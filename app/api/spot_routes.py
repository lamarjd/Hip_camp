from flask import Blueprint, jsonify, render_template, request, redirect, Response, make_response
from flask_login import login_required, current_user
from app.models import Spot, db
from app.forms.spot_form import NewSpot

#import models
from ..models import Spot, User, Review

spot_routes = Blueprint('spots', __name__)

#  get all spots
@spot_routes.route('/')

def get_all_spots():
    # if current_user.is_authenticated:
        spots = Spot.query.all()
        # print("my spots", spots)
        return {"spots": [spot.to_dict() for spot in spots]}
        # return make_response(response, 200)


@spot_routes.route('<int:id>')
def get_one_spot(id):
    spot = Spot.query.get(id)
    if not spot:
        return make_response("Doesn't Exist", 404)
    new_spot = spot.to_dict()
    spot_reviews = Review.query.filter(Review.spot_id == id).all()
    something = [review.to_dict() for review in spot_reviews]
    new_spot["review"] = something

    return make_response(new_spot, 200)