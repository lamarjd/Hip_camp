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

@spot_routes.route('/new_spot', methods=["POST"])
def new_spot():
    form = NewSpot()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        spot = Spot(
            name = data["name"],
            user_id = current_user.id,
            imageUrl = data["imageUrl"],
            type = data["type"],
            address = data["address"],
            city = data["city"],
            state = data["state"],
            country = data["country"],
            price = data["price"],
            description = data["description"],
        )
        db.session.add(spot)
        db.session.commit()
    return make_response(spot.to_dict(), 201)


@spot_routes.route('/<int:id>', methods=["PUT"])
def edit_spot(id):
    form = NewSpot()
    form['csrf_token'].data = request.cookies['csrf_token']
    one_spot = Spot.query.get(id)
    # Placeholder for Reviews
    if(not one_spot):
        return "<h1>No Spot</h1>"
    if one_spot.user_id == current_user.id:
        
        if form.validate_on_submit():
            one_spot.name = form.data["name"]
            one_spot.imageUrl = form.data["imageUrl"]
            one_spot.type = form.data["type"]
            one_spot.user_id = current_user.id
            one_spot.address = form.data["address"]
            one_spot.city = form.data["city"]
            one_spot.state = form.data["state"]
            one_spot.country = form.data["country"]
            one_spot.price = form.data["price"]
            one_spot.description = form.data["description"]
            db.session.commit()

        return make_response(one_spot.to_dict(), 200)
    else:
        return make_response("Unauthorized", 401)


@spot_routes.route('/<int:id>', methods=["DELETE"])
def delete_spot(id):
    spot = Spot.query.get(id)
    if(not spot):
        return '<h1>No such Spot Exists</h1>'
    if spot.user_id == current_user.id:
        db.session.delete(spot)
        db.session.commit()
        return {
            "message": "Successfully deleted",
            "statusCode": 200
        }

        