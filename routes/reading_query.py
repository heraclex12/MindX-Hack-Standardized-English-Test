from flask import jsonify
from models.database import EnglishMongoDB
import numpy as np
import json
from flask_restful import Resource, reqparse

class AtlanticReadingData(Resource):
    def get(self):
        mongo_instance = EnglishMongoDB().get_instance()
        db = mongo_instance.atlantic

        cursor = db.find()
        list_cur = list(cursor)
        list_cur = list(map(lambda doc: str(doc['_id']), list_cur))
        json_data = json.dumps(list_cur, indent=2)
        return json_data

class IELTSReadingData(Resource):
    def get(self):
        mongo_instance = EnglishMongoDB().get_instance()
        db = mongo_instance.ielts

        cursor = db.find()
        list_cur = list(cursor)
        list_cur = list(map(lambda doc: str(doc['_id']), list_cur))
        json_data = json.dumps(list_cur, indent=2)
        return json_data

class ReutersReadingData(Resource):
    def get(self):
        mongo_instance = EnglishMongoDB().get_instance()
        db = mongo_instance.reuters

        cursor = db.find()
        list_cur = list(cursor)
        list_cur = list(map(lambda doc: str(doc['_id']), list_cur))
        json_data = json.dumps(list_cur, indent=2)
        return json_data

class NYTimesReadingData(Resource):
    def get(self):
        mongo_instance = EnglishMongoDB().get_instance()
        db = mongo_instance.nytimes

        cursor = db.find()
        list_cur = list(cursor)
        list_cur = list(map(lambda doc: str(doc['_id']), list_cur))
        json_data = json.dumps(list_cur, indent=2)
        return json_data

