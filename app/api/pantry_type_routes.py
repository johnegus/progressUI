from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import PantryGrocery, User, PantryGroceryType, db
from sqlalchemy.exc import SQLAlchemyError


pantry_type_routes = Blueprint('pantry-types', __name__)

# GET all grocery types 
@pantry_type_routes.route('/')
@login_required
def types():
    try:
        types = PantryGroceryType.query.order_by(PantryGroceryType.type.asc()).all()
        type_dicts = [type.to_dict() for type in types]
        type_json = jsonify({'types': type_dicts})
        return type_json
    except SQLAlchemyError as e:
        error = str(e.__dict__['orig'])
        print(error)
        return {'errors': ['An error occurred while retrieving the data']}, 500