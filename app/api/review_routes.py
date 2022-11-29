from flask import Blueprint, jsonify, render_template, request, redirect, Response, make_response
from flask_login import login_required, current_user
from app.models import Review, db
from app.forms.review_form import NewReview

#import models
from ..models import Spot, User, Review

review_routes = Blueprint('reviews', __name__)

#  get all reviews
@review_routes.route('/')
def get_all_reviews():
    # if current_user.is_authenticated:
        reviews = Review.query.all()
        response = {"reviews": [review.to_dict() for review in reviews]}
        return make_response(response, 200)

# get one review
@review_routes.route('/<int:id>')
def get_one_review(id):
    review = Review.query.get(id)
    return make_response(review.to_dict(), 200)


# create a review
@review_routes.route('/<int:id>/new_review', methods=["POST"])
def post_review(id):
    if current_user.is_authenticated:
        form = NewReview()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            review = Review(
                spot_id = id,
                user_id = current_user.id,
                rating = form.data["rating"],
                body = form.data["body"]
            )
        db.session.add(review)
        db.session.commit()
        return make_response(review.to_dict(), 201)
    else: return make_response("Unauthorized", 401)

# Edit a review
@review_routes.route('/<int:id>', methods=["PUT"])
def edit_review(id):
    if current_user.is_authenticated:
        new_review = Review.query.get(id)
        form = NewReview()
        form['csrf_token'].data = request.cookies['csrf_token']

        if form.validate_on_submit():
            new_review.rating = form.data["rating"]
            new_review.body = form.data["body"]

        return make_response(new_review.to_dict(), 200)

    else: return make_response("Unauthorized", 401)

@review_routes.route('/<int:id>', methods=["DELETE"])
def delete_review(id):
    print("ID from review route", id)
    if current_user.is_authenticated:
        review = Review.query.get(id)
        print("review query from route", review.to_dict())
        db.session.delete(review)
        db.session.commit()
        return make_response("Successfully Deleted", 200)
    else:
        return make_response("Unauthorized", 401)