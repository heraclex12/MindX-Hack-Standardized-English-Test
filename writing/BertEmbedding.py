from writing.fupugecscore.bert import tokenization, modeling
import tensorflow as tf
from writing.fupugecscore.bert.extract_features import convert_lst_to_features, PoolingStrategy


class BertEmbedding(object):
  def __init__(self, bert_config, init_checkpoint, use_one_hot_embeddings=False,
                     pooling_strategy=PoolingStrategy.REDUCE_MEAN,
                     pooling_layer=-2):
    self.bert_config = bert_config
    self.init_checkpoint = init_checkpoint
    self.use_one_hot_embeddings = use_one_hot_embeddings
    self.pooling_strategy = pooling_strategy
    self.pooling_layer = pooling_layer

    self.build()
    # self.saver = tf.train.Saver()
    self.sess = tf.Session()
    tvars = tf.trainable_variables()
    (assignment_map, initialized_variable_names
      ) = modeling.get_assignment_map_from_checkpoint(tvars, self.init_checkpoint)

    tf.train.init_from_checkpoint(self.init_checkpoint, assignment_map)
    self.sess.run(tf.global_variables_initializer())
    # self.saver.restore(self.sess, init_checkpoint)

  def predict(self, features):
    feed_dict = {
        self.input_ids : features['input_ids'],
        self.input_mask: features['input_mask'],
        self.input_type_ids : features['input_type_ids']
    }
    return self.sess.run(self.predictions, feed_dict=feed_dict)

  def build(self,):
    self.input_ids = tf.placeholder(shape=[None,128], dtype=tf.int32)
    self.input_mask = tf.placeholder(shape=[None,128], dtype=tf.int32)
    self.input_type_ids = tf.placeholder(shape=[None,128], dtype=tf.int32)

    self.model = modeling.BertModel(
            config=self.bert_config,
            is_training=False,
            input_ids=self.input_ids,
            input_mask=self.input_mask,
            token_type_ids=self.input_type_ids,
            use_one_hot_embeddings=self.use_one_hot_embeddings)


    all_layers = []
    if len(self.pooling_layer) == 1:
        encoder_layer = self.model.all_encoder_layers[self.pooling_layer[-1]]
    else:
        for layer in self.pooling_layer:
            all_layers.append(self.model.all_encoder_layers[layer])
        encoder_layer = tf.concat(all_layers, -1)

    if self.pooling_strategy == PoolingStrategy.REDUCE_MEAN:
        pooled = tf.reduce_mean(encoder_layer, axis=1)
    elif self.pooling_strategy == PoolingStrategy.REDUCE_MAX:
        pooled = tf.reduce_max(encoder_layer, axis=1)
    elif self.pooling_strategy == PoolingStrategy.REDUCE_MEAN_MAX:
        pooled = tf.concat([tf.reduce_max(encoder_layer, axis=1),
                            tf.reduce_max(encoder_layer, axis=1)], axis=1)
    elif self.pooling_strategy == PoolingStrategy.FIRST_TOKEN or self.pooling_strategy == PoolingStrategy.CLS_TOKEN:
        pooled = tf.squeeze(encoder_layer[:, 0:1, :], axis=1)
    elif self.pooling_strategy == PoolingStrategy.LAST_TOKEN or self.pooling_strategy == PoolingStrategy.SEP_TOKEN:
        seq_len = tf.cast(tf.reduce_sum(self.input_mask, axis=1), tf.int32)
        rng = tf.range(0, tf.shape(seq_len)[0])
        indexes = tf.stack([rng, seq_len - 1], 1)
        pooled = tf.gather_nd(encoder_layer, indexes)
    elif self.pooling_strategy == PoolingStrategy.NONE:
        pooled = encoder_layer
    else:
        raise NotImplementedError()

    self.predictions = pooled


if __name__ == '__main__':
    vocab_file = 'fupugecscore/data/uncased_L-12_H-768_A-12/vocab.txt'
    config_file = 'fupugecscore/data/uncased_L-12_H-768_A-12/bert_config.json'
    ckpt_file = 'fupugecscore/data/uncased_L-12_H-768_A-12/bert_model.ckpt'

    pooling_layer = [-2]
    pooling_strategy = PoolingStrategy.REDUCE_MEAN

    be = BertEmbedding(bert_config=modeling.BertConfig.from_json_file(config_file),
    init_checkpoint=ckpt_file,
    pooling_strategy=pooling_strategy,
    pooling_layer=pooling_layer)