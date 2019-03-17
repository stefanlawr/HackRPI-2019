from app import app, db, bcrypt
from models import Users, School
from flask import request, abort, jsonify
from sqlalchemy import func
import json


'''
######## EVENT ROUTES AND FUNCTIONS ########
'''

# Primary route for account login 
# Accepts a user email and password, salts and queries DB
@app.route("/campus/create", methods=['POST'])
def createEventDriver():
	request_json = request.json
	e_id = createEvent(request_json)
	return jsonify({'status' : 'success', "e_id" : e_id, 'message' : 'Sucessfully Booked your Reservation!'})

# Client creates a reservation for a paticular business,eventType, and time
def createEvent(r_info):
	newReservation = Reservation(r_info["b_id"],r_info["c_id"],r_info["r_date"], r_info["r_time"],r_info["et_id"])
	db.session.add(newReservation)
	db.session.commit()

	client = Client.query.filter_by(c_id=int(r_info["c_id"])).first()
	business = Business.query.filter_by(b_id=int(r_info["b_id"])).first()
	event_type = EventType.query.filter_by(et_id=int(r_info["et_id"])).first()

	sendNotification(client, business, newReservation, event_type)
	return newReservation.r_id


