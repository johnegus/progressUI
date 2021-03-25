from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Activity, User, ActivityType, db
from sqlalchemy.exc import SQLAlchemyError


activity_routes = Blueprint('activities', __name__)

# GET all activities for a specific user 
@activity_routes.route('/user/<int:userId>')
@login_required
def get_all_activities(userId):
    try:
        activities = Activity.query.filter(Activity.user_id == userId).order_by(Activity.createdAt.desc()).all()

        activity_dicts = [activity.to_type_dict() for activity in activities]
        activity_json = jsonify({'activities': activity_dicts})
        return activity_json
    except SQLAlchemyError as e:
        error = str(e.__dict__['orig'])
        print(error)
        return {'errors': ['An error occurred while retrieving the data']}, 500



# GET a specific activity item
@activity_routes.route('/<int:activity_id>', methods=['GET'])
# @login_required
def get_activity_item(activity_id):
    try:
        activity = Activity.query.filter(Activity.id == activity_id).first()
        activity_json = jsonify({'activities': activity.to_dict()})
        return activity_json
    except SQLAlchemyError as e:
        error = str(e.__dict__['orig'])
        print(error)
        return {'errors': ['An error occurred while retrieving the data']}, 500

# PUT a new activity name for a specific activity item
@activity_routes.route('/edit/<int:activity_id>', methods=['PUT'])
def edit_activity(activity_id):
    data = request.json
    activity = Activity.query.filter(Activity.id == activity_id).first()
    activity.item_name = data['item_name']
    db.session.commit()
    return activity.to_type_dict(), 200

# POST a new activity for a specific user
@activity_routes.route('/new/<int:user_id>', methods=['POST'])
@login_required
def post_activity(user_id):
    data = request.json
    activity = Activity(
        user_id=user_id,
        item_name=data['item_name'],
        activity_types_id=data['activity_types_id'],
        hours_multiplier=data['hours_multiplier'])
    db.session.add(activity)
    db.session.commit()
    return activity.to_type_dict(), 200
    


# DELETE an activity
@activity_routes.route('/delete/<int:activity_id>', methods=['DELETE'])
@login_required
def activity(activity_id):
    activity = Activity.query.filter(Activity.id == activity_id).first()
    db.session.delete(activity)
    db.session.commit()
    return {'message': 'Activity was successfully deleted'}, 200


# DELETE all activities
@activity_routes.route('/user/<int:user>/delete', methods=['DELETE'])
# @login_required
def delete_all_activities(user):
    activities = Activity.query.filter(Activity.user_id == user).delete()
    # db.session.delete(activities)
    db.session.commit()
    return {'message': 'All activities successfully deleted'}, 200