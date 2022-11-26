from app.models import db, Spot, environment, SCHEMA
from datetime import date


def seed_spots():

    spot1 = Spot(
        name='Mystic Mountain', 
        imageUrl="https://hipcamp-res.cloudinary.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1653684291/campground-photos/dxzsirx1lnpp2dtnlqjh.jpg",
        user_id=1, 
        type="Lodging",
        address="155 Lonestar Way",
        city="Calistoga",
        state="California",
        country="USA",
        price=105,
        description="Up in the hills that rise above Santa Rosa and the Sonoma Valley, Mystic Mountain is a perfect retreat tucked away from the hustle and bustle in the valleys below. We're a family hobby farm with a vegetable garden that often has goods to harvest."
        )
        
    spot2 = Spot(
        name='Mendocino Magic', 
        imageUrl="https://hipcamp-res.cloudinary.com/images/c_pad,e_blur:500,f_auto,q_60,w_128/v1626216309/campground-photos/ujh9b7a56y2jqoqqpyyt/mendocino-magic-lakeside-camp-northern-california.jpg",
        user_id=2, 
        type="Tent",
        address="312 Electric Avenue",
        city="Mendocino",
        state="California",
        country="USA",
        price=180,
        description="Mendocino Magic is one of Hi-Camp's first private land properties! Be a trailblazer, and stay at this unique 600-acre space nestled an hour inland from the Mendocino Coast. Enjoy rolling hills, ponds, forests and hiking, and an amazing reservoir for swimming!"
        )
        
    spot3 = Spot(
        name='Holy Cross Refugio',
        imageUrl="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1080,q_60/v1499314898/campground-photos/ohoqrxdanzlzkfnez18g.jpg", 
        user_id=1, 
        type="Tent",
        address="654 Not a Road Anymore Rd.",
        city="Steambot Springs",
        state="Colorado",
        country="USA",
        price=150,
        description="Holy Cross Refugio, or HCR, is a little sanctuary in the mountains. There is little nearby except for wilderness, with a lifetime worth of trails, lakes, and peaks to explore only two hours from Denver. We have access that few dream of to Colorado's water wilderness, and some of the best backcountry skiing, hiking, scrambling, and fly fishing in the Summit Vail Eagle Aspen area."
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