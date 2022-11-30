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
        type="Campsite",
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
        type="Campsite",
        address="654 Not a Road Anymore Rd.",
        city="Steambot Springs",
        state="Colorado",
        country="USA",
        price=150,
        description="Holy Cross Refugio, or HCR, is a little sanctuary in the mountains. There is little nearby except for wilderness, with a lifetime worth of trails, lakes, and peaks to explore only two hours from Denver. We have access that few dream of to Colorado's water wilderness, and some of the best backcountry skiing, hiking, scrambling, and fly fishing in the Summit Vail Eagle Aspen area."
        )     
        
    spot4 = Spot(
        name='Hundred Acre Wood', 
        imageUrl="https://res.cloudinary.com/dncypdqkb/image/upload/v1669615924/HipCamp/Hundred%20Acre%20Wood/bjp72fxw7t8mt6iwaovd_mprrsl.jpg",
        user_id=2, 
        type="Campsite",
        address="155 Lonestar Way",
        city="Colorado Springs",
        state="Colorado",
        country="USA",
        price=250,
        description="Hang a hammock in the trees, or pitch a tent in a field. Enjoy the sounds of nature! This is back country camping with raw wilderness to explore. The fire will have to be small, with leave no trace principals. Please use only brush from the forest floor, and logging debris that can be managed by hand."
        )
        
    spot5 = Spot(
        name='Glowing Meadows', 
        imageUrl="https://res.cloudinary.com/dncypdqkb/image/upload/v1669615910/HipCamp/Hundred%20Acre%20Wood/hs28dc1gratcid5yutyi_rzmgxp.jpg",
        user_id=3, 
        type="Campsite",
        address="312 Electric Avenue",
        city="Mendocino",
        state="California",
        country="USA",
        price=180,
        description="Glowing Meadows is one of Hi-Camp's first private land properties! Be a trailblazer, and stay at this unique 600-acre space nestled an hour inland from the Mendocino Coast. Enjoy rolling hills, ponds, forests and hiking, and an amazing reservoir for swimming!"
        )
        
    spot6 = Spot(
        name='Volcano Treehouse',
        imageUrl="https://res.cloudinary.com/dncypdqkb/image/upload/v1669798539/HipCamp/zsukfptria6y76wjzzij_uw4ela.jpg", 
        user_id=1, 
        type="Lodging",
        address="654 Not a Road Anymore Rd.",
        city="Mountain View",
        state="Hawaii",
        country="USA",
        price=350,
        description="Aloha,I built the treehouse to be a very romantic hideaway for myself and my honey, and now that I'm renting it out, the couples and families who have stayed here, including many honeymooners have appreciated the romance of the setting and ambiance. "
        )      
        
    spot7 = Spot(
        name='Stargazers Jungle', 
        imageUrl="https://res.cloudinary.com/dncypdqkb/image/upload/v1669798717/HipCamp/g83spygiy68zyotxagxt_wcozij.jpg",
        user_id=2, 
        type="Lodging",
        address="155 Lonestar Way",
        city="Hana",
        state="Hawaii",
        country="USA",
        price=500,
        description="A Jungle setting on a working flower farm with an ocean view, two of the largest Banyan trees on the island and a short walking path showcasing magnificent exotic flowers and fruits make up our property."
        )
        
    spot8 = Spot(
        name='Jungle Bay Retreat', 
        imageUrl="https://res.cloudinary.com/dncypdqkb/image/upload/v1669798832/HipCamp/spmvnbd7xebxcilzwofg_o0zbxf.jpg",
        user_id=3, 
        type="Campsite",
        address="312 Electric Avenue",
        city="Hawaii",
        state="Hawaii",
        country="USA",
        price=280,
        description="This is the true paradise you’ve been dreaming about! Private ocean playground, waterfalls, swimming holes, surfing spots, snorkeling and fishing all within walking distance our home."
        )
        
    spot9 = Spot(
        name='The Haven at Hawi',
        imageUrl="https://res.cloudinary.com/dncypdqkb/image/upload/v1669798925/HipCamp/zi7hd5gxpis86xhx4qwl_gaz7jz.jpg", 
        user_id=1, 
        type="Lodging",
        address="654 Not a Road Anymore Rd.",
        city="Hawaii",
        state="Hawaii",
        country="USA",
        price=250,
        description="The Haven at Hawi Nani is located on a small working horse ranch on 20 acres of lush fields with a breathtaking view of the ocean and Maui."
        )     
        
    spot10 = Spot(
        name='GingerHill Farm Retreat', 
        imageUrl="https://res.cloudinary.com/dncypdqkb/image/upload/v1669799027/HipCamp/nim4oezic8jjod5omxl8_xz5rlg.jpg",
        user_id=2, 
        type="Lodging",
        address="155 Lonestar Way",
        city="Kealakekua",
        state="Hawaii",
        country="USA",
        price=200,
        description="Gingerhill Farm Retreat is a farm community dedicated to exploring sustainability, self-sufficiency, and stewardship of the land."
        )
        
    spot11 = Spot(
        name="Hau'ula Homestead", 
        imageUrl="https://res.cloudinary.com/dncypdqkb/image/upload/v1669799112/HipCamp/fm2auc39dhczfxdq00sl_zknwjb.jpg",
        user_id=3, 
        type="Campsite",
        address="312 Electric Avenue",
        city="Hauula",
        state="Hawaii",
        country="USA",
        price=180,
        description="Right across the road from Hau'ula Beach park and a short drive from famous North Shore beaches. Flat grass field with some trees and bordered by a stream. "
        )
        
    spot12 = Spot(
        name="Waipi'o Lodge",
        imageUrl="https://res.cloudinary.com/dncypdqkb/image/upload/v1669799231/HipCamp/lenjpdgkciy8bf0a5wpa_mmg0um.jpg", 
        user_id=1, 
        type="Campsite",
        address="654 Not a Road Anymore Rd.",
        city="Honokaa",
        state="Hawaii",
        country="USA",
        price=100,
        description="Waipi'o Lodge and Campsite is located in Kukuihaele less than a mile from majestic Waipiʻo Valley. In a place where horses and wild turkeys often wander by, this is the old Hawaiʻi. A place where neighbors stop to talk and life is sweet as the smell of sugar cane grass. "
        )

    # spot13 = Spot(
    #     name='Mystic Mountain', 
    #     imageUrl="https://hipcamp-res.cloudinary.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1653684291/campground-photos/dxzsirx1lnpp2dtnlqjh.jpg",
    #     user_id=1, 
    #     type="Lodging",
    #     address="155 Lonestar Way",
    #     city="Calistoga",
    #     state="California",
    #     country="USA",
    #     price=105,
    #     description="Up in the hills that rise above Santa Rosa and the Sonoma Valley, Mystic Mountain is a perfect retreat tucked away from the hustle and bustle in the valleys below. We're a family hobby farm with a vegetable garden that often has goods to harvest."
    #     )
        
    # spot14 = Spot(
    #     name='Mendocino Magic', 
    #     imageUrl="https://hipcamp-res.cloudinary.com/images/c_pad,e_blur:500,f_auto,q_60,w_128/v1626216309/campground-photos/ujh9b7a56y2jqoqqpyyt/mendocino-magic-lakeside-camp-northern-california.jpg",
    #     user_id=2, 
    #     type="Tent",
    #     address="312 Electric Avenue",
    #     city="Mendocino",
    #     state="California",
    #     country="USA",
    #     price=180,
    #     description="Mendocino Magic is one of Hi-Camp's first private land properties! Be a trailblazer, and stay at this unique 600-acre space nestled an hour inland from the Mendocino Coast. Enjoy rolling hills, ponds, forests and hiking, and an amazing reservoir for swimming!"
    #     )
        
    # spot15 = Spot(
    #     name='Holy Cross Refugio',
    #     imageUrl="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1080,q_60/v1499314898/campground-photos/ohoqrxdanzlzkfnez18g.jpg", 
    #     user_id=1, 
    #     type="Tent",
    #     address="654 Not a Road Anymore Rd.",
    #     city="Steambot Springs",
    #     state="Colorado",
    #     country="USA",
    #     price=150,
    #     description="Holy Cross Refugio, or HCR, is a little sanctuary in the mountains. There is little nearby except for wilderness, with a lifetime worth of trails, lakes, and peaks to explore only two hours from Denver. We have access that few dream of to Colorado's water wilderness, and some of the best backcountry skiing, hiking, scrambling, and fly fishing in the Summit Vail Eagle Aspen area."
    #     )     
        
    # spot16 = Spot(
    #     name='Mystic Mountain', 
    #     imageUrl="https://hipcamp-res.cloudinary.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1653684291/campground-photos/dxzsirx1lnpp2dtnlqjh.jpg",
    #     user_id=1, 
    #     type="Lodging",
    #     address="155 Lonestar Way",
    #     city="Calistoga",
    #     state="California",
    #     country="USA",
    #     price=105,
    #     description="Up in the hills that rise above Santa Rosa and the Sonoma Valley, Mystic Mountain is a perfect retreat tucked away from the hustle and bustle in the valleys below. We're a family hobby farm with a vegetable garden that often has goods to harvest."
    #     )
        
    # spot17 = Spot(
    #     name='Mendocino Magic', 
    #     imageUrl="https://hipcamp-res.cloudinary.com/images/c_pad,e_blur:500,f_auto,q_60,w_128/v1626216309/campground-photos/ujh9b7a56y2jqoqqpyyt/mendocino-magic-lakeside-camp-northern-california.jpg",
    #     user_id=2, 
    #     type="Tent",
    #     address="312 Electric Avenue",
    #     city="Mendocino",
    #     state="California",
    #     country="USA",
    #     price=180,
    #     description="Mendocino Magic is one of Hi-Camp's first private land properties! Be a trailblazer, and stay at this unique 600-acre space nestled an hour inland from the Mendocino Coast. Enjoy rolling hills, ponds, forests and hiking, and an amazing reservoir for swimming!"
    #     )
        
    # spot18 = Spot(
    #     name='Holy Cross Refugio',
    #     imageUrl="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1080,q_60/v1499314898/campground-photos/ohoqrxdanzlzkfnez18g.jpg", 
    #     user_id=1, 
    #     type="Tent",
    #     address="654 Not a Road Anymore Rd.",
    #     city="Steambot Springs",
    #     state="Colorado",
    #     country="USA",
    #     price=150,
    #     description="Holy Cross Refugio, or HCR, is a little sanctuary in the mountains. There is little nearby except for wilderness, with a lifetime worth of trails, lakes, and peaks to explore only two hours from Denver. We have access that few dream of to Colorado's water wilderness, and some of the best backcountry skiing, hiking, scrambling, and fly fishing in the Summit Vail Eagle Aspen area."
    #     )      
        
    # spot19 = Spot(
    #     name='Mystic Mountain', 
    #     imageUrl="https://hipcamp-res.cloudinary.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1653684291/campground-photos/dxzsirx1lnpp2dtnlqjh.jpg",
    #     user_id=1, 
    #     type="Lodging",
    #     address="155 Lonestar Way",
    #     city="Calistoga",
    #     state="California",
    #     country="USA",
    #     price=105,
    #     description="Up in the hills that rise above Santa Rosa and the Sonoma Valley, Mystic Mountain is a perfect retreat tucked away from the hustle and bustle in the valleys below. We're a family hobby farm with a vegetable garden that often has goods to harvest."
    #     )
        
    # spot20 = Spot(
    #     name='Mendocino Magic', 
    #     imageUrl="https://hipcamp-res.cloudinary.com/images/c_pad,e_blur:500,f_auto,q_60,w_128/v1626216309/campground-photos/ujh9b7a56y2jqoqqpyyt/mendocino-magic-lakeside-camp-northern-california.jpg",
    #     user_id=2, 
    #     type="Tent",
    #     address="312 Electric Avenue",
    #     city="Mendocino",
    #     state="California",
    #     country="USA",
    #     price=180,
    #     description="Mendocino Magic is one of Hi-Camp's first private land properties! Be a trailblazer, and stay at this unique 600-acre space nestled an hour inland from the Mendocino Coast. Enjoy rolling hills, ponds, forests and hiking, and an amazing reservoir for swimming!"
    #     )
        
    # spot21 = Spot(
    #     name='Holy Cross Refugio',
    #     imageUrl="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1080,q_60/v1499314898/campground-photos/ohoqrxdanzlzkfnez18g.jpg", 
    #     user_id=1, 
    #     type="Tent",
    #     address="654 Not a Road Anymore Rd.",
    #     city="Steambot Springs",
    #     state="Colorado",
    #     country="USA",
    #     price=150,
    #     description="Holy Cross Refugio, or HCR, is a little sanctuary in the mountains. There is little nearby except for wilderness, with a lifetime worth of trails, lakes, and peaks to explore only two hours from Denver. We have access that few dream of to Colorado's water wilderness, and some of the best backcountry skiing, hiking, scrambling, and fly fishing in the Summit Vail Eagle Aspen area."
    #     )     
        
    # spot22 = Spot(
    #     name='Mystic Mountain', 
    #     imageUrl="https://hipcamp-res.cloudinary.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1653684291/campground-photos/dxzsirx1lnpp2dtnlqjh.jpg",
    #     user_id=1, 
    #     type="Lodging",
    #     address="155 Lonestar Way",
    #     city="Calistoga",
    #     state="California",
    #     country="USA",
    #     price=105,
    #     description="Up in the hills that rise above Santa Rosa and the Sonoma Valley, Mystic Mountain is a perfect retreat tucked away from the hustle and bustle in the valleys below. We're a family hobby farm with a vegetable garden that often has goods to harvest."
    #     )
        
    # spot23 = Spot(
    #     name='Mendocino Magic', 
    #     imageUrl="https://hipcamp-res.cloudinary.com/images/c_pad,e_blur:500,f_auto,q_60,w_128/v1626216309/campground-photos/ujh9b7a56y2jqoqqpyyt/mendocino-magic-lakeside-camp-northern-california.jpg",
    #     user_id=2, 
    #     type="Tent",
    #     address="312 Electric Avenue",
    #     city="Mendocino",
    #     state="California",
    #     country="USA",
    #     price=180,
    #     description="Mendocino Magic is one of Hi-Camp's first private land properties! Be a trailblazer, and stay at this unique 600-acre space nestled an hour inland from the Mendocino Coast. Enjoy rolling hills, ponds, forests and hiking, and an amazing reservoir for swimming!"
    #     )
        
    # spot24 = Spot(
    #     name='Holy Cross Refugio',
    #     imageUrl="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1080,q_60/v1499314898/campground-photos/ohoqrxdanzlzkfnez18g.jpg", 
    #     user_id=1, 
    #     type="Tent",
    #     address="654 Not a Road Anymore Rd.",
    #     city="Steambot Springs",
    #     state="Colorado",
    #     country="USA",
    #     price=150,
    #     description="Holy Cross Refugio, or HCR, is a little sanctuary in the mountains. There is little nearby except for wilderness, with a lifetime worth of trails, lakes, and peaks to explore only two hours from Denver. We have access that few dream of to Colorado's water wilderness, and some of the best backcountry skiing, hiking, scrambling, and fly fishing in the Summit Vail Eagle Aspen area."
    #     )    
    
   

    db.session.add(spot1)
    db.session.add(spot2)
    db.session.add(spot3)
    db.session.add(spot4)
    db.session.add(spot5)
    db.session.add(spot6)    
    db.session.add(spot7)
    db.session.add(spot8)
    db.session.add(spot9)
    db.session.add(spot10)
    db.session.add(spot11)
    db.session.add(spot12)
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