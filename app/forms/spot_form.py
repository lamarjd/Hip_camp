from flask_wtf import FlaskForm
from wtforms.fields import StringField, IntegerField, BooleanField, SubmitField, DateField, SelectField
from wtforms.validators import DataRequired


class NewSpot(FlaskForm):
    name = StringField("Name", validators=[DataRequired()])
    user_id = IntegerField("User ID")
    imageUrl = StringField("Image", validators=[DataRequired()])
    type = SelectField("Type", choices=["Campsite", "Lodging"])
    address = StringField("Address")
    city = StringField("City")
    state = StringField("State")
    country = StringField("Country")
    price = IntegerField("Price")
    description = StringField("Description")
    submit = SubmitField("Submit")

