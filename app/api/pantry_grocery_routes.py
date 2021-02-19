from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import PantryGrocery, User, PantryGroceryType, db
from sqlalchemy.exc import SQLAlchemyError


pantry_grocery_routes = Blueprint('pantry-groceries', __name__)

# GET all groceries for a specific user 
@pantry_grocery_routes.route('/user/<int:userId>')
# @login_required
def get_all_groceries(userId):
    try:
        groceries = PantryGrocery.query.filter(PantryGrocery.user_id == userId).order_by(PantryGrocery.createdAt.desc()).all()

        grocery_dicts = [grocery.to_type_dict() for grocery in groceries]
        grocery_json = jsonify({'groceries': grocery_dicts})
        return grocery_json
    except SQLAlchemyError as e:
        error = str(e.__dict__['orig'])
        print(error)
        return {'errors': ['An error occurred while retrieving the data']}, 500


# PUT a new grocery name for a specific grocery item
@pantry_grocery_routes.route('/edit/<int:grocery_id>', methods=['PUT'])
def edit_grocery(grocery_id):
    data = request.json
    grocery = PantryGrocery.query.filter(PantryGrocery.id == grocery_id).first()
    grocery.item_name = data['item_name']
    db.session.commit()
    return grocery.to_type_dict(), 200

# POST a new grocery for a specific user
@pantry_grocery_routes.route('/new/<int:user_id>', methods=['POST'])
@login_required
def post_grocery(user_id):
    data = request.json
    grocery = PantryGrocery(
        user_id=user_id,
        item_name=data['item_name'],
        pantry_grocery_types_id=data['grocery_types_id'],)
    db.session.add(grocery)
    db.session.commit()
    return grocery.to_type_dict(), 200
    


# DELETE an grocery
@pantry_grocery_routes.route('/delete/<int:grocery_id>', methods=['DELETE'])
@login_required
def grocery(grocery_id):
    grocery = PantryGrocery.query.filter(PantryGrocery.id == grocery_id).first()
    db.session.delete(grocery)
    db.session.commit()
    return {'message': 'Grocery was successfully deleted'}, 200