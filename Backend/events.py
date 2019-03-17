from app import app, db, bcrypt
from models import Users, School
from flask import request, abort, jsonify
from sqlalchemy import func
import json