from flask import Blueprint, jsonify, render_template, request, redirect, Response, make_response
from flask_login import login_required, current_user
from app.models import Task, db
from app.forms.review_form import NewReview

#import models
from ..models import Spot, User, Review

review_routes = Blueprint('reviews', __name__)

#  get all tasks
@review_routes.route('/reviews')

def get_all_reviews():
    # if current_user.is_authenticated:
        reviews = Review.query.all()
        response = {"reviews": [review.to_dict() for review in reviews]}
        return make_response(response, 200)