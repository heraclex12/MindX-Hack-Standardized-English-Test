from writing.fupugecscore.util import *
from writing.fupugecscore.score import *
import tensorflow as tf
from writing.fupugecscore.bert.extract_features import convert_lst_to_features
from writing.BertEmbedding import be, tokenizer


def encode_doc(doc, aricle_set):
    """
    Encode document-based answer to feature embeddings

    :param doc: an answer for the writing question id
    :param aricle_set: a writing question id
    :return: embeddings: context vectors of this answer
    """
    sentences = sentence_tokenize(doc)

    tmp_f = list(convert_lst_to_features(sentences, 128, tokenizer))
    result = {
        "input_ids": np.asarray([f.input_ids for f in tmp_f]),
        "input_mask": np.asarray([f.input_mask for f in tmp_f]),
        "input_type_ids": np.asarray([f.input_type_ids for f in tmp_f]),
        "article_set": aricle_set
    }

    embeddings = be.predict(result)

    return embeddings


if __name__ == '__main__':
    doc = """
    Well computers can be a good or a good thing. I don'@CAPS1 realy see @CAPS2 computers can be a bad thing for me. I also know @CAPS2 computers can or will help people all around the world. I think computers has positive effects on people like me. Computers teaches hand-eye coordination. It can help if you need to find out reasearch for a school project. You can create lots of things on computers like music, desiner @CAPS1-shirts, logos, banners and lots of other creative things. With computer you can look up available homes and apartments. You can even go online and fill out a job application and save trips to stores @CAPS2 cool is that!!
    """
    print(type(encode_doc(doc, 1)))
