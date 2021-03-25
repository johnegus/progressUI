from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin



class ActivityType(db.Model):
    __tablename__ = "activity_types"

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(255), nullable=False, unique=True)
    image = db.Column(db.String(255))
    days_to_expiry = db.Column(db.Float, nullable=False)
    def to_dict(self):
        return {
          "id": self.id,
          "type": self.type,
          "image": self.image,
          "days_to_expiry": self.days_to_expiry,
        }

class Activity(db.Model):
    __tablename__ = "activities"

    id = db.Column(db.Integer, primary_key=True)
    item_name = db.Column(db.String(50), nullable=False)
    activity_types_id = db.Column(db.Integer, db.ForeignKey("activity_types.id"), nullable=True)
    hours_multiplier = db.Column(db.Float, nullable=False, default=1)
    createdAt = db.Column(db.DateTime, server_default=db.func.now())
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)

    type = db.relationship("ActivityType")
    users = db.relationship("User", back_populates="activities")

    def to_dict(self):
        return {
          "id": self.id,
          "item_name": self.item_name,
          "activity_types_id": self.activity_types_id,
          "hours_multiplier": self.hours_multiplier,
          "createdAt": self.createdAt,
        }

    def to_type_dict(self):
        return {
          "id": self.id,
          "item_name": self.item_name,
          "activity_types_id": self.activity_types_id,
          "createdAt": self.createdAt,
          "hours_multiplier": self.hours_multiplier,
          "type": self.type.to_dict()
        }

class User(db.Model, UserMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(35), nullable = False)
    last_name = db.Column(db.String(35), nullable = False)
    email = db.Column(db.String(255), nullable = False, unique = True)
    hashed_password = db.Column(db.String(255), nullable = False)
    city = db.Column(db.String(255), nullable = False)
    country = db.Column(db.String(255), nullable = False)
    avatar = db.Column(db.String(255))

    activities = db.relationship("Activity", back_populates="users", lazy=True, single_parent=True, cascade="all, delete-orphan")

    @property
    def password(self):
        return self.hashed_password


    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)


    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
          "id": self.id,
          "first_name": self.first_name,
          "last_name": self.last_name,
          "city": self.city,
          "country": self.country,
          "avatar": self.avatar,
          "email": self.email
        }

