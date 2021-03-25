from werkzeug.security import generate_password_hash
from app.models import db, User, ActivityType, Activity

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = [
           User(first_name='Demo', 
                last_name='User', 
                email='demo@aa.io',
                password='password', 
                city='Chicago',
                country='USA', 
                avatar='https://images.unsplash.com/photo-1486739985386-d4fae04ca6f7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHJ1bm5pbmd8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60'),
           User(
                first_name='David',
                last_name='Jensen',
                email='david@david.com',
                password="password5",
                city="Detroit",
                country="USA",
                avatar='https://images.unsplash.com/photo-1560073743-0a45c01b68c4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fHJ1bm5pbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'),
           User(
                first_name='Tom',
                last_name='Mayfield',
                email='tom@tom.com',
                password="password2",
                city="Los Angeles",
                country="USA",
                avatar='https://images.unsplash.com/photo-1475274110913-480c45d0e873?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDB8fHJ1bm5pbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'),
           User(
                first_name='Sally',
                last_name='Choi',
                email='sally@sally.com',
                password="password3",
                city="Seoul",
                country="South Korea",
                avatar='https://images.unsplash.com/photo-1509010636466-2292663e132f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTV8fHJ1bm5pbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'),
           User(
                first_name='Eric',
                last_name='Mandy',
                email='eric@eric.com',
                password="password4",
                city="Berlin",
                country="Germany",
                avatar='https://images.unsplash.com/photo-1512299286776-c18be8ed6a1a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTA1fHxydW5uaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'),
    ]

    db.session.add_all(demo)

    db.session.commit()

def seed_activity_types():

    activity_type = [
        ActivityType(type='Prep Resume', image='https://i.imgur.com/FVf9I61.jpg', days_to_expiry=1),
        ActivityType(type='Prep Cover Letter', image='https://i.imgur.com/xjimeYz.jpg', days_to_expiry=1),
        ActivityType(type='Prep for Interview', image='https://i.imgur.com/qAVaqDE.jpg', days_to_expiry=1),
        ActivityType(type='DS&A Practice', image='https://i.imgur.com/sHMxtTP.jpg', days_to_expiry=1), 
        ActivityType(type='Coding', image='https://i.imgur.com/BaZbcWZ.jpg', days_to_expiry=1),
        ActivityType(type='Studying', image='https://i.imgur.com/zCtmoN7.jpg', days_to_expiry=1), 
        ActivityType(type='Pairboarding', image='https://i.imgur.com/VnAIH5y.jpg', days_to_expiry=1),
        ActivityType(type='Mock Interview', image='https://i.imgur.com/ZKwZ23R.jpg', days_to_expiry=1),
        ActivityType(type='Mock Coding Challenge', image='https://i.imgur.com/Q0TbeAA.jpg', days_to_expiry=1), 
        ActivityType(type='Assignment', image='https://i.imgur.com/Yj0940Q.jpg', days_to_expiry=1),
        ActivityType(type='Internship/Contract Work', image='https://i.imgur.com/OaEx0gn.jpg', days_to_expiry=1),
        ActivityType(type='Meeting', image='https://i.imgur.com/y8vfLyN.jpg', days_to_expiry=1), 
        ActivityType(type='Apply', image='https://i.imgur.com/KBIpQqb.jpg', days_to_expiry=0.4), 
        ActivityType(type='Email', image='https://i.imgur.com/bggYZTe.jpg', days_to_expiry=0.5), 
        ActivityType(type='Email Outreach', image='https://i.imgur.com/qaENyle.jpg', days_to_expiry=0.5), 
        ActivityType(type='Get Reference', image='https://i.imgur.com/hL3gJqV.jpg', days_to_expiry=0.5), 
        ActivityType(type='LinkedIn Connection Request', image='https://i.imgur.com/p5gSJPI.jpg', days_to_expiry=0.5), 
        ActivityType(type='Phone Screen', image='https://i.imgur.com/4mH7X54.jpg', days_to_expiry=2), 
        ActivityType(type='Phone Interview', image='https://i.imgur.com/J1elfV9.jpg', days_to_expiry=2), 
        ActivityType(type='Phone Call', image='https://i.imgur.com/YkOTg4M.jpg', days_to_expiry=2), 
        ActivityType(type='Networking Event', image='https://i.imgur.com/XR3S8Q0.jpg', days_to_expiry=3), 
        ActivityType(type='Technical Interview', image='https://i.imgur.com/YGdwkaO.jpg', days_to_expiry=5),
        ActivityType(type='Coding Challenge', image='https://i.imgur.com/bxCp4pa.jpg', days_to_expiry=5),
        ActivityType(type='On-Site Interview', image='https://i.imgur.com/XHIFEmZ.jpg', days_to_expiry=8),

    ]

    db.session.add_all(activity_type)

    db.session.commit()


def seed_activities():

    activity = [
        Activity(user_id=1, item_name='Applied to Google', activity_types_id=13),
        Activity(user_id=1, item_name='Applied to tesla', activity_types_id=13),
        Activity(user_id=1, item_name='Worked on project', hours_multiplier=4, activity_types_id=5),
        Activity(user_id=1, item_name='Got a reference to Microsoft', activity_types_id=16),
        Activity(user_id=1, item_name='Pairboarding', hours_multiplier=2, activity_types_id=7),
   
    ]

    db.session.add_all(activity)

    db.session.commit()





# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()

def undo_activity_types():
    db.session.execute('TRUNCATE activity_types;')
    db.session.commit()

def undo_activities():
    db.session.execute('TRUNCATE activities;')
    db.session.commit()

