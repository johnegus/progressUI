from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
# @login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

# DELETE a user
@user_routes.route('/delete/<int:id>', methods=['DELETE'])
# @login_required
def delete_user(id):
    user = User.query.filter(User.id == id).first()
    db.session.delete(user)
    db.session.commit()
    return {'message': 'User was successfully deleted'}, 200


# PUT a new user avatar 
@user_routes.route('/edit-avatar/<int:id>', methods=['PUT'])
def edit_user_avatar(id):
    data = request.json
    user = User.query.filter(User.id == id).first()
    user.avatar = data['avatar']
    db.session.commit()
    return user.to_dict(), 200