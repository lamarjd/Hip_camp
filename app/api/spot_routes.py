from flask import Blueprint, jsonify, render_template, request, redirect, Response, make_response
from flask_login import login_required, current_user
from app.models import Task, db
from app.forms.spot_form import NewSpot

#import models
from ..models import Spot, User

spot_routes = Blueprint('spots', __name__)

#  get all tasks
@spot_routes.route('/spots')

def get_all_spots():
    # if current_user.is_authenticated:
        spots = Spot.query.all()
        response = {"spots": [spot.to_dict() for spot in spots]}
        return make_response(response, 200)