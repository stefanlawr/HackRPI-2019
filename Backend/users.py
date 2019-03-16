from app import app, db, bcrypt
from models import Users
from flask import request, abort, jsonify
from sqlalchemy import func
import json

'''
######## USER ROUTES AND FUNCTIONS ########
'''

# Function to create a new User in the db
def createUser(u_info):
	newUser = Users(u_info["fname"], u_info["lname"], u_info["email"], u_info["password"], u_info["school_id"])
	db.session.add(newUser)
	db.session.commit()

	return newUser.u_id

@app.route("/get_user/<u_id>")
def getUser(u_id):
	requested_user = Users.query.filter_by(u_id=int(u_id)).first()
	return "requested user information: " + requested_user.first_name + " " + requested_user.last_name

@app.route("/login", methods=['POST'])
def login():
    request_json = request.json 
    print(request_json)
    email = request_json["email"]
    password = request_json["password"]
    
    user = Users.query.filter_by(email=email).first()
    if user:
        if bcrypt.check_password_hash(user.password, password):
            return jsonify({'status' : 'success', 'message' : 'Sucessfully Logged In!'})
        else:
            return jsonify({'status' : 'error', 'message' : 'Incorrect Password'})
    
    return jsonify({'status' : 'error', 'message' : 'Username/Password does not exist'})

