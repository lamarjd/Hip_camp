from flask_wtf import FlaskForm
from wtforms.fields import StringField, IntegerField, BooleanField, SubmitField, DateField, SelectField
from wtforms.validators import DataRequired


class NewReview(FlaskForm):
    body = StringField("Body", validators=[DataRequired()])
    rating = IntegerField("Rating", validators=[DataRequired()])
    spot_id = IntegerField("Spot ID")
    user_id = IntegerField("User ID")
    submit = SubmitField("Submit")