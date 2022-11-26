from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime

class Review(db.Model):
    __tablename__ = 'reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key = True)
    spot_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('spots.id')))
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    rating = db.Column(db.Integer)
    body = db.Column(db.String(2000), nullable = False)
    created_at = db.Column(db.DateTime, default= datetime.utcnow)
    updated_at = db.Column(db.DateTime, default= datetime.utcnow)

#  Add relationship for reviews - Cascade Delete
    spots = db.relationship("Spot", cascade="all,delete", backref="spot")
    # users = db.relationship("User", cascade="all,delete", backref="user")


    def to_dict(self):
        return {
            "id": self.id,
            "spot_id": self.spot_id,
            "user_id": self.user_id,
            "rating": self.rating,
            "body": self.body
        }