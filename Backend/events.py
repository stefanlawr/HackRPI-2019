from app import app, db, bcrypt
from models import Events, EventTypes
from flask import request, abort, jsonify
from sqlalchemy import func
import json


'''
######## EVENT ROUTES AND FUNCTIONS ########
'''

# Primary driver route event creation
# Accepts a JSON blob with desired event data, calls helper function
@app.route("/campus/create", methods=['POST'])
def createEventDriver():
	request_json = request.json
	e_id = createEvent(request_json)
	return jsonify({"e_id" : e_id})

# Helper function to create the DB connection and add new event data
def createEvent(e_info):
	newEvent = Events(e_info["e_t_id"], e_info["s_id"], e_info["name"], e_info["location"], e_info["description"])
	db.session.add(newEvent)
	db.session.commit() 

	return newEvent.e_id

@app.route("/campus/<s_id>/<name>", methods=["GET"])
def getEvents(s_id, name):
    eventTypeID = getEventID(name)
    allEvents = Events.query.filter_by(s_id=int(s_id), e_t_id=int(eventTypeID)).all()

    events = {}
    for event in allEvents:
        events[event.e_id] = event.json()
    return jsonify(events)
    

def getEventID(name):
    eventType = EventTypes.query.filter_by(name=name).first()
    return eventType.e_t_id

