from flask import Blueprint
from flask_restful import Api
from routes.user_interact import UserRegister, UserLogin, UserInfo

api_bp = Blueprint('api', __name__)
api = Api(api_bp)


api.add_resource(UserRegister, '/register_user')
api.add_resource(UserLogin, '/login')
api.add_resource(UserInfo, '/user_info')