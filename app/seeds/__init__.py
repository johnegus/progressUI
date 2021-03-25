from flask.cli import AppGroup
from .users import seed_users, undo_users, seed_activity_types, undo_activity_types, seed_activities, undo_activities

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    # Add other seed functions here
    seed_activity_types()
    seed_activities()
# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_activity_types()
    undo_activities()
    undo_users()
