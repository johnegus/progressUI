from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


# grocery_users = db.Table(
#   "grocery_users",
#   db.Model.metadata,
#   db.Column("grocery_id", db.Integer, db.ForeignKey("groceries.id"), primary_key=True),
#   db.Column("user_id", db.Integer, db.ForeignKey("users.id"), primary_key=True),
# )

# freezer_grocery_users = db.Table(
#   "freezer_grocery_users",
#   db.Model.metadata,
#   db.Column("freezer_grocery_id", db.Integer, db.ForeignKey("freezer_groceries.id"), primary_key=True),
#   db.Column("user_id", db.Integer, db.ForeignKey("users.id"), primary_key=True),
# )

# pantry_grocery_users = db.Table(
#   "pantry_grocery_users",
#   db.Model.metadata,
#   db.Column("pantry_grocery_id", db.Integer, db.ForeignKey("pantry_groceries.id"), primary_key=True),
#   db.Column("user_id", db.Integer, db.ForeignKey("users.id"), primary_key=True),
# )


class GroceryType(db.Model):
    __tablename__ = "grocery_types"

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(255), nullable=False, unique=True)
    image = db.Column(db.String(255))
    days_to_expiry = db.Column(db.Float, nullable=False)
    # grocery = db.relationship("Grocery", back_populates="type")
    def to_dict(self):
        return {
          "id": self.id,
          "type": self.type,
          "image": self.image,
          "days_to_expiry": self.days_to_expiry,
        }

class Grocery(db.Model):
    __tablename__ = "groceries"

    id = db.Column(db.Integer, primary_key=True)
    item_name = db.Column(db.String(50), nullable=False)
    grocery_types_id = db.Column(db.Integer, db.ForeignKey("grocery_types.id"), nullable=True)
    hours_multiplier = db.Column(db.Float, nullable=False, default=1)
    createdAt = db.Column(db.DateTime, server_default=db.func.now())
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)

    type = db.relationship("GroceryType")
    users = db.relationship("User", back_populates="groceries")

    def to_dict(self):
        return {
          "id": self.id,
          "item_name": self.item_name,
          "grocery_types_id": self.grocery_types_id,
          "hours_multiplier": self.hours_multiplier,
          "createdAt": self.createdAt,
        }

    def to_type_dict(self):
        return {
          "id": self.id,
          "item_name": self.item_name,
          "grocery_types_id": self.grocery_types_id,
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

    groceries = db.relationship("Grocery", back_populates="users", lazy=True, single_parent=True, cascade="all, delete-orphan")
    freezer_groceries = db.relationship("FreezerGrocery", back_populates="users", lazy=True, single_parent=True, cascade="all, delete-orphan")
    pantry_groceries = db.relationship("PantryGrocery", back_populates="users", lazy=True, single_parent=True, cascade="all, delete-orphan")

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

## beginning of ecofridge 2.0 expansion of freezer----------------------------------------------

class FreezerGroceryType(db.Model):
    __tablename__ = "freezer_grocery_types"

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(255), nullable=False, unique=True)
    image = db.Column(db.String(255))
    days_to_expiry = db.Column(db.Integer, nullable=False)
    # grocery = db.relationship("Grocery", back_populates="type")
    def to_dict(self):
        return {
          "id": self.id,
          "type": self.type,
          "image": self.image,
          "days_to_expiry": self.days_to_expiry,
        }

class FreezerGrocery(db.Model):
    __tablename__ = "freezer_groceries"

    id = db.Column(db.Integer, primary_key=True)
    item_name = db.Column(db.String(50), nullable=False)
    freezer_grocery_types_id = db.Column(db.Integer, db.ForeignKey("freezer_grocery_types.id"), nullable=True)
    createdAt = db.Column(db.DateTime, server_default=db.func.now())
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)

    type = db.relationship("FreezerGroceryType")
    users = db.relationship("User", back_populates="freezer_groceries")

    def to_dict(self):
        return {
          "id": self.id,
          "item_name": self.item_name,
          "freezer_grocery_types_id": self.freezer_grocery_types_id,
          "createdAt": self.createdAt,
        }

    def to_type_dict(self):
        return {
          "id": self.id,
          "item_name": self.item_name,
          "freezer_grocery_types_id": self.freezer_grocery_types_id,
          "createdAt": self.createdAt,
          "type": self.type.to_dict()
        }


## beginning of ecofridge 2.0 expansion of pantry----------------------------------------------
class PantryGroceryType(db.Model):
    __tablename__ = "pantry_grocery_types"

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(255), nullable=False, unique=True)
    image = db.Column(db.String(255))
    days_to_expiry = db.Column(db.Integer, nullable=False)
    # grocery = db.relationship("Grocery", back_populates="type")
    def to_dict(self):
        return {
          "id": self.id,
          "type": self.type,
          "image": self.image,
          "days_to_expiry": self.days_to_expiry,
        }

class PantryGrocery(db.Model):
    __tablename__ = "pantry_groceries"

    id = db.Column(db.Integer, primary_key=True)
    item_name = db.Column(db.String(50), nullable=False)
    pantry_grocery_types_id = db.Column(db.Integer, db.ForeignKey("pantry_grocery_types.id"), nullable=True)
    createdAt = db.Column(db.DateTime, server_default=db.func.now())
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)

    type = db.relationship("PantryGroceryType")
    users = db.relationship("User", back_populates="pantry_groceries")

    def to_dict(self):
        return {
          "id": self.id,
          "item_name": self.item_name,
          "pantry_grocery_types_id": self.pantry_grocery_types_id,
          "createdAt": self.createdAt,
        }

    def to_type_dict(self):
        return {
          "id": self.id,
          "item_name": self.item_name,
          "pantry_grocery_types_id": self.pantry_grocery_types_id,
          "createdAt": self.createdAt,
          "type": self.type.to_dict()
        }