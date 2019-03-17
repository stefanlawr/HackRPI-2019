from app import app, db, bcrypt
from models import Users
from flask import request, abort, jsonify
from sqlalchemy import func
import json

'''
######## USER ROUTES AND FUNCTIONS ########
'''

# Primary route for account login 
# Accepts a user email and password, salts and queries DB
@app.route("/login", methods=['POST'])
def login():
    request_json = request.json
    email = request_json["email"]
    password = request_json["password"]
    
    user = Users.query.filter_by(email=email).first()
    if user:
        if bcrypt.check_password_hash(user.password, password):
            return jsonify({'status' : 'success', 'message' : 'Sucessfully Logged In!'})
        else:
            return jsonify({'status' : 'error', 'message' : 'Incorrect Password'})
    
    return jsonify({'status' : 'error', 'message' : 'Username/Password does not exist'})

# Primary route for account creation
# Accepts a user email and password, salts and queries DB
@app.route("/signup", methods=['POST'])
def signup():
    request_json = request.json
    response = ""
    try:
        new_email = request_json["email"]
        user = Users.query.filter_by(email=new_email).first()

        # if the client is already registered, abort
        if user:
            return abort(400, {"User already exists. Please try a different email"})

        # generate passoword
        hashed_pass = bcrypt.generate_password_hash(request_json["password"]).decode("utf-8")
        request_json["password"] = hashed_pass
        createUser(request_json)

        response = jsonify({'status' : 'success',
                    'message' : 'Sucessfully Created Client!'})

    except Exception as UserCreateException:
        #TODO: log this for later..
        print(UserCreateException)
        response = abort(400, {"Something unexpected happened.."})

    return response


# Function to create a new User in the db
# Helper function in signup function
def createUser(u_info):
    newUser = Users(u_info["first_name"], u_info["last_name"], u_info["email"], u_info["password"], u_info["s_id"])
    db.session.add(newUser)
    db.session.commit()
    return newUser.u_id

# Retrieves user info
@app.route("/get_user/<u_id>")
def getUser(u_id):
	requested_user = Users.query.filter_by(u_id=int(u_id)).first()
	return "requested user information: " + requested_user.first_name + " " + requested_user.last_name