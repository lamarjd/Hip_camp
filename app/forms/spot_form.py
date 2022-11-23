from flask_wtf import FlaskForm
from wtforms.fields import StringField, IntegerField, BooleanField, SubmitField, DateField, SelectField
from wtforms.validators import DataRequired


class NewSpot(FlaskForm):
    name = StringField("Name", validators=[DataRequired()])
    type = StringField("Type")
    address = StringField("Address")
    state = StringField("State")
    country = StringField("Country")
    price = IntegerField("Price")
    description = StringField("Description")
    submit = SubmitField("Submit")

