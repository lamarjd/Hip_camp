import os

# contains the configuration Object, which gets the Secret Key and URI from the .env
class Configuration:
    SECRET_KEY=os.environ.get('SECRET_KEY')
    SQLALCHEMY_DATABASE_URI=os.environ.get('DATABASE_URL')
    # DB_FILE = os.environ.get("DB_FILE")