from flask import Flask, render_template, redirect
from app.config import Configuration
from app.forms import SimpleForm, HomePage
from app.models import db, SimplePerson
from flask_migrate import Migrate
import os

#  Creat Flask application. __name__ is an attribute of the Flask App
app = Flask(__name__)
# use the Config Object to bring in the key and DB info
app.config.from_object(Configuration)
# initiate a db from the models file
db.init_app(app)
migrate = Migrate(app, db)

DB_FILE = os.environ.get("DB_FILE")
SECRET_KEY = os.environ.get('SECRET_KEY')

@app.route("/", methods=["GET", "POST"])
def root():
    home = HomePage()
    # print(home.people)
    form = SimpleForm()

    # if home.people:
    #     return render_template("/simple_form_data.html", form=form)
        # return redirect("/simple-form-data")

    # if home.add:
    #     return redirect("/simple-form")
    #     return render_template("simple_form.html", home=home)
    
    # else:
    return render_template("main_page.html", home=home, form=form)


@app.route("/simple-form")
def get_form():
    form = SimpleForm()
    return render_template("simple_form.html", form=form)

@app.route("/simple-form", methods=["POST"])
def post_form():
    form = SimpleForm()

    if form.validate_on_submit():
        params = {
            "name": form.data["name"],
            "age": form.data["age"],
            "bio": form.data["bio"]
        }

        simple_person = SimplePerson(**params)
        db.session.add(simple_person)
        db.session.commit()
        return redirect("/")
    return "<h1>Bad Request</h1>"

@app.route("/simple-form-data")
def get_form_data():
    people = SimplePerson.query.filter(SimplePerson.name.like("M%")).all()
    return render_template("simple_form_data.html", people=people)
