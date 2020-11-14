from flask import jsonify, request
from . import routes
from models.database import EnglishMongoDB
from flask_restful import Resource, reqparse
import json


class WritingPage(Resource):
    def get(self, question_id):
        mongo_instance = EnglishMongoDB().get_instance()
        db = mongo_instance.writing_question
        question = db.find_one({'_id': int(question_id)})

        if question:
            q = {}
            q['id'] = question['_id']
            q['question'] = question['question']
            return q, 200
        else:
            return {'status': 'NOT FOUND'}, 404

