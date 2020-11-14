import tensorflow as tf
from writing.fupugecscore.bert import tokenization, modeling
import numpy as np
from writing.fupugecscore.util import *
from encode_doc import encode_doc



class CoherenceScore:
    def __init__(self, init_checkpoint):
        self.init_checkpoint = init_checkpoint
        self.bert_emb_dim = 768
        self.dropout_prob = 0.5
        self.lstm_hidden_size = 1024
        self.lstm_layers_num = 1
        self.fnn_hidden_size = []
        self.bidirectional = False
        self.build_graph()
        self.sess=tf.Session()
        tvars = tf.trainable_variables()
        (assignment_map, initialized_variable_names
          ) = modeling.get_assignment_map_from_checkpoint(tvars, self.init_checkpoint)

        tf.train.init_from_checkpoint(self.init_checkpoint, assignment_map)
        self.sess.run(tf.global_variables_initializer())

    def predict(self, embeddings):
        feed_dict = {
            self.batch_doc_encodes: embeddings
        }
        return self.sess.run(self.logit, feed_dict=feed_dict)

    def build_graph(self):

        def normalize_value(score, min_value, max_value):
            result = tf.div(tf.subtract(score, min_value), tf.to_float(tf.subtract(max_value, min_value)))
            return result

        self.batch_doc_encodes = tf.placeholder(shape=[1, None, 768], dtype=tf.float32)
        batch_doc_sent_nums = tf.expand_dims(tf.shape(self.batch_doc_encodes)[1], 0)
        with tf.variable_scope("icnv1", reuse=tf.AUTO_REUSE):
          fw_cell = create_rnn_cell(self.lstm_hidden_size,
                                    self.dropout_prob,
                                    self.lstm_layers_num,
                                    self.bidirectional,
                                    False)
          output, states = tf.nn.dynamic_rnn(cell=fw_cell,
                                            inputs=self.batch_doc_encodes,
                                            sequence_length=batch_doc_sent_nums,
                                            dtype=tf.float32)
          last_state = states[0].h

          if self.fnn_hidden_size:
              x_dim = self.fnn_hidden_size[-1]
          else:
              x_dim = self.lstm_hidden_size

          w = tf.get_variable(shape=[x_dim, 1],
                              initializer=create_initializer(),
                              name="weight",
                              dtype=tf.float32)
          b = tf.get_variable(initializer=tf.zeros_initializer(),
                              shape=[1],
                              name="bias",
                              dtype=tf.float32)

          self.logit = tf.squeeze(tf.sigmoid(tf.matmul(last_state, w) + b))


init_checkpoint = 'fupugecscore/data/output/basic_score/model.ckpt-1946'
coherence_score = CoherenceScore(init_checkpoint)



if __name__ == '__main__':

    doc = """
        Well computers can be a good or a good thing. I don'@CAPS1 realy see @CAPS2 computers can be a bad thing for me. I also know @CAPS2 computers can or will help people all around the world. I think computers has positive effects on people like me. Computers teaches hand-eye coordination. It can help if you need to find out reasearch for a school project. You can create lots of things on computers like music, desiner @CAPS1-shirts, logos, banners and lots of other creative things. With computer you can look up available homes and apartments. You can even go online and fill out a job application and save trips to stores @CAPS2 cool is that!!
        """
    embeddings = encode_doc(doc, 1)
    print(coherence_score.predict(np.expand_dims(embeddings, 0)))