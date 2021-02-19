from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import GroceryType


def type_exists(form, field):
    print("Checking if type exists", field.data)
    id = field.data
    type = GroceryType.query.filter(GroceryType.id == id).first()
    if not type:
        raise ValidationError("Type provided not found.")


class AddForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[
                           DataRequired(), type_exists])
