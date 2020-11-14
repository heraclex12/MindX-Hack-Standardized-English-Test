from flask import jsonify
from . import routes
from models.database import *


@routes.route('/register_user', methods=['POST'])
def register_user():
    pass


@routes.route('/login_user', methods=['POST'])
def login_user():
    pass
