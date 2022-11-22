from flask_wtf import FlaskForm
from wtforms.fields import StringField, IntegerField, TextAreaField, SubmitField
# from wtforms.validators import DataRequired

# create the form Class that extends FlaskForm
class SimpleForm(FlaskForm):
    name = StringField("Name")
    age = IntegerField("Age")
    bio = TextAreaField("Biography")
    submit = SubmitField("Submit")
    home = SubmitField("Home")


class HomePage(FlaskForm):
    people = SubmitField("People")
    add = SubmitField("Add Person")


