from flask import jsonify, request, make_response
import chardet
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

            json_str = json.dumps(q, ensure_ascii=False, indent=4, sort_keys=True)
            json_utf8 = json_str.encode('utf-8')
            response = make_response(json_utf8)
            response.headers['Content-Type'] = 'application/json; charset=utf-8'
            response.headers['mimetype'] = 'application/json'
            return q, 200
        else:
            return {'status': 'NOT FOUND'}, 404

