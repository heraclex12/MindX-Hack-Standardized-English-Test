from flask import jsonify, request
# from . import routes
from models.database import *

import numpy as np
import tensorflow as tf
import json
from models.database import EnglishMongoDB
from flask_restful import Resource, reqparse
from writing import compute_spell_grammar_score


class WritingScoring(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        question_id = json_data['question_id']
        question_content = json_data['question_content']
        anwser_content = json_data['answer_content']

        point, _ = compute_spell_grammar_score(anwser_content)
        return point, 200