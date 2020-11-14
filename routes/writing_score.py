from flask import jsonify
# from . import routes
from models.database import *

import numpy as np
from bert_serving.client import BertClient
import tensorflow as tf
import json

if __name__ == '__main__':
    bc = BertClient()