from app.models import db, Review, environment, SCHEMA
from datetime import date


def seed_reviews():

    review1 = Review(
        spot_id=2, 
        user_id=1, 
        rating=5,
        body="Great Spot to relax and unwind"
        )
    
    review2 = Review(
        spot_id=1, 
        user_id=2, 
        rating=3,
        body="It was windy and rainy and they didn't have anything to get us out of the rain. I can't believe they don't have umbrellas"
        )

    review3 = Review(
        spot_id=1, 
        user_id=3, 
        rating=4,
        body="It was a wonderful time and the the area had some amazing view. Would recommend again."
        )    
   

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM reviews")
        
    db.session.commit()