from app import app, db, bcrypt
from models import Users, School
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
# Also handles the creation of a new School
@app.route("/signup", methods=['POST'])
def signup():
    request_json = request.json
    response = ""
    try:
        # Checks for existence of school in DB
        new_school = request_json["s_name"]
        school = School.query.filter_by(name=new_school).first()

        # School doesn't exist
        if not school:
            print("Creating new School entity")
            s_id = createSchool(request_json)
            request_json["s_id"] = s_id # replaces the school name with the associated id
        
        else:
            print("School exists, proceeding")
            request_json["s_id"] = school.s_id

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
    return jsonify({"u_id" : newUser.u_id})

# Retrieves user info
@app.route("/get_user/<u_id>")
def getUser(u_id):
    requested_user = Users.query.filter_by(u_id=int(u_id)).first()
    return jsonify({'first_name' : requested_user.first_name, 'last_name' : requested_user.last_name, 'email' : requested_user.email})

'''
######## SCHOOL FUNCTIONS ########
'''

def createSchool(s_info):
    newSchool = School(s_info["s_id"])
    db.session.add(newSchool)
    db.session.commit()
    return jsonify({"s_id" : newSchool.s_id})