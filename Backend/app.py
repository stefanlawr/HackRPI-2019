from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_cors import CORS
import os

PORT = 5000
HOST = '0.0.0.0'

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get("POSTGRES_URI")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app)

if os.environ.get("POSTGRES_URI") is None:
	print("ERROR: Environment Variable not set..")
	exit(0)

db = SQLAlchemy(app)
db.init_app(app)
bcrypt = Bcrypt(app)

#import externally dependent functionality
from users import * 
from events import *

if __name__ == '__main__':
	print("running CampusHub webserver..")
	app.run(port=PORT, host=HOST, debug=True)