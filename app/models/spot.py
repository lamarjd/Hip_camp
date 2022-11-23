from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime

class Spot(db.Model):
    __tablename__ = 'spots'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100), nullable = False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    type = db.Column(db.String(150), nullable = False)
    address = db.Column(db.String(150))
    state = db.Column(db.String(150))
    country = db.Column(db.String(150))
    price = db.Column(db.Integer, nullable = False)
    description = db.Column(db.String(2000), nullable = False)
    created_at = db.Column(db.DateTime, default= datetime.utcnow)
    updated_at = db.Column(db.DateTime, default= datetime.utcnow)

#  Add relationship for reviews - Cascade Delete
    reviews = db.relationship("Review", cascade="all,delete", backref="spot")


    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "type": self.type,
            "address": self.address,
            "state": self.state,
            "country": self.country,
            "price": self.price,
            "description": self.description,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }