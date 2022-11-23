from app.models import db, Spot, environment, SCHEMA
from datetime import date


def seed_spots():

    spot1 = Spot(
        name='Mystic Mountain', 
        user_id=1, 
        type="Lodging",
        address="155 Lonestar Way",
        state="California",
        country="USA",
        price=105,
        description="Up in the hills that rise above Santa Rosa and the Sonoma Valley, Mystic Mountain is a perfect retreat tucked away from the hustle and bustle in the valleys below. We're a family hobby farm with a vegetable garden that often has goods to harvest."
        )
        
    spot2 = Spot(
        name='Mendocino Magic', 
        user_id=2, 
        type="Tent",
        address="312 Electric Avenue",
        state="California",
        country="USA",
        price=180,
        description="Mendocino Magic is one of Hi-Camp's first private land properties! Be a trailblazer, and stay at this unique 600-acre space nestled an hour inland from the Mendocino Coast. Enjoy rolling hills, ponds, forests and hiking, and an amazing reservoir for swimming!"
        )
        
    spot3 = Spot(
        name='Mill Creek Camp', 
        user_id=1, 
        type="Tent",
        address="654 Not a Road Anymore Rd.",
        state="Colorado",
        country="USA",
        price=150,
        description="Mill Creek Camp is a beautiful site featuring a campfire pit (for use only when fires are okayed) and a picnic table. The wooded area provides great privacy and excellent shade. Park your car and use hand carts to take your gear around the Mill Creek trail to reach your campsite (please don't forget to return hand carts!).  "
        )  
    
   

    db.session.add(spot1)
    db.session.add(spot2)
    db.session.add(spot3)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_spots():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.spots RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM spots")
        
    db.session.commit()