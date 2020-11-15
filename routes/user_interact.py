from flask import jsonify, request
from . import routes
from models.database import EnglishMongoDB
from flask_restful import Resource, reqparse
import app


class UserRegister(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        json_data['password'] = app.flask_bcrypt.generate_password_hash(json_data['password'])
        json_data['gender'] = int(json_data['gender'])
        json_data['_id'] = json_data['email']

        mongo_instance = EnglishMongoDB().get_instance()
        db = mongo_instance.user
        if db.find({'_id' : json_data['_id'].lower()}).count() > 0:
            return {"status" : "DUPLICATE"}, 200
        else:
            db.insert_one(json_data)
            return {"status" : "SUCCESS"}, 200


class UserLogin(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        mongo_instance = EnglishMongoDB().get_instance()
        db = mongo_instance.user
        try:
            user = db.find_one({'email' : json_data['email']})
        except:
            return {"status": "FAILED"}, 400
        if user and app.flask_bcrypt.check_password_hash(user['password'], json_data['password']):
            return {"status" : "SUCCESS"}, 200
        else:
            return {"status" : "FAILED"}, 401


class UserInfo(Resource):
    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('email', type=str)
        args = parser.parse_args()
        mongo_instance = EnglishMongoDB().get_instance()
        db = mongo_instance.user
        user = db.find_one({'email' : args['email']})
        if user:
            user_info = {}
            user_info['email'] = user['email']
            user_info['gender'] = user['gender']
            user_info['fullname'] = user['fullName']
            user_info['phone'] = user['phone']
            return user_info, 200
        else:
            return {"status" : "FAILED", "description" : "user not found!"}, 400