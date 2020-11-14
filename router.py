from flask import Blueprint
from flask_restful import Api
from routes.user_interact import UserRegister, UserLogin, UserInfo
from routes.reading_query import *
from routes.writing_query import *
from routes.writing_score import *

api_bp = Blueprint('api', __name__)
api = Api(api_bp)


api.add_resource(UserRegister, '/register_user')
api.add_resource(UserLogin, '/login')
api.add_resource(UserInfo, '/user_info')

api.add_resource(AtlanticReadingData, '/get_reading/atlantic')
api.add_resource(IELTSReadingData, '/get_reading/ielts')
api.add_resource(ReutersReadingData, '/get_reading/reuters')
api.add_resource(NYTimesReadingData, '/get_reading/nytimes')

api.add_resource(WritingPage, '/get_writing_question/<int:question_id>')
api.add_resource(WritingScoring, '/get_writing_score')