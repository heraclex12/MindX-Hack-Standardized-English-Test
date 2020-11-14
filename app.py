from flask import Flask
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from router import api_bp
app = Flask(__name__)

CORS(app)
flask_bcrypt = Bcrypt(app)


@app.route('/')
def hello_world():
   return 'Hello World'


app.register_blueprint(api_bp, url_prefix='/api')


if __name__ == '__main__':
    app.run()
