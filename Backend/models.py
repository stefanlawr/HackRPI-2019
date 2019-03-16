# RSRV FLASK ORM
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from app import db, app
import json
import datetime



class Users(db.Model):
	"""Model for the clients tabe"""
	
	#on sign_up
	def __init__(self, first_name, last_name, email, password, school_id):
		self.first_name = first_name
		self.last_name = last_name
		self.email = email
		self.password = password
		self.school_id = school_id

	u_id = db.Column(db.Integer, primary_key=True, nullable=False)
	first_name = db.Column(db.Unicode)
	last_name = db.Column(db.Unicode)
	email = db.Column(db.Unicode)
	password = db.Column(db.Unicode)
	school_id = db.Column(db.Integer)

	def json(self):
		return {"first_name" : self.first_name, "last_name" : self.last_name, "email" : self.email, "school_id" : self.school_id}

class School(db.Model):

	#on registering a school
	def __init__(self, name):
		self.name = name

	s_id = db.Column(db.Integer, primary_key=True, nullable=False)
	name = db.Column(db.Unicode)

	def json(self):
		return {"s_id" : self.s_id, "name" : self.name}

class Events(db.Model):

	def __init__(self, e_t_id, s_id, name, location):
		self.e_t_id = e_t_id
		self.s_id = s_id
		self.name = name
		self.location = location

	e_id = db.Column(db.Integer, primary_key=True, nullable=False) 
	e_t_id = db.Column(db.Integer, db.ForeignKey('event_types.e_t_id'))
	s_id = db.Column(db.Integer, db.ForeignKey('school.s_id'))
	name = db.Column(db.Unicode)
	location = db.Column(db.Unicode)

	def json(self):
		return{"e_id" : self.e_id, "e_t_id": self.e_t_id, "s_id": self.s_id, "name":self.name, "location": self.location}

class EventTypes(db.Model):

	def __init(self, name):
		self.name = name

	e_t_id = db.Column(db.Integer, primary_key=True, nullable=False)
	name = db.Column(db.Unicode)

