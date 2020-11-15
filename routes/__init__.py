from flask import Blueprint

routes = Blueprint('routes', __name__)

from .user_interact import *
from .writing_score import *

"""
    This folder includes routes/endpoints
"""