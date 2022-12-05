import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import CreateSpotFormModal from "../Modals/CreateSpotFormModal";
import { fetchSpots, editSpotThunk, deleteSpotThunk } from "../../store/spot";
import { getAllReviews } from "../../store/review";
import defaultPic from "../../assets/wake-up.png";
import "./Spots.css";

function AllSpots() {
  const dispatch = useDispatch();
  const { spotId } = useParams();
  
  useEffect(() => {
    dispatch(fetchSpots());
    dispatch(getAllReviews());
  }, [dispatch]);

  const rev = useSelector((state) => Object.values(state.reviews));
  console.log("rev", rev)
  
  const spots = useSelector((state) => Object.values(state.spots));
  console.log("SPOTS", spots);
  
  // const revBySpot = (spots) => {
  //   let arr =[]

  //   for (let i = 0; i < spots.length - 1; i++) {
  //     // console.log("spots[i]", spots[i])
  //     if (spots[i] === rev.spot_id) {
  //       arr.push(rev.rating)
  //   }
  //   }
  //   return arr
  // };

  // console.log("review rating by spot", revBySpot(spots))



const spotReview = rev.map((review) => {
  return "Rev rating --->" + review.rating + "rev spot_ID" + review.spot_id
})
console.log("spot reviews", spotReview)
  


  const sessionUser = useSelector((state) => state.session.user);


  // let filteredSpots = spots.filter((spot) => {
  //   return spot.type === "Campsite";
  // });

  // console.log("Filtered spots", filteredSpots)

  // const [isHovering, setIsHovering] = useState(false)

  // const handleMouseOver = () => {
  //   setIsHovering(true)
  // }

  // const handleMouseOut = () => {
  //   setIsHovering(false)
  // }

  // const changeBackground = (e) => {
  //   e.target.style.background = 'red';
  // }

  // const filteredReviews = rev.filter((review) => review.spot_id === +spotId);
  // console.log("Filtered Reviews from All Spots", filteredReviews)

  // ******** Rating Percentage CALCS ***************
  // const reviews = filteredReviews.map((review) => {
  //   return review.rating;
  // });

  // console.log("reviews", reviews.reduce((accum, num) => {
  //   return accum + num;
  // }, 0))

  // const revPercent = reviews.reduce((accum, num) => {
  //   let sum = accum + num;
  //   let avg = 100 - sum / 5 / reviews.length;
  //   return Math.floor(avg);
  // }, 0);

  // *************************************************

  return (
    <div className="all-spots-container">
      {/* <CreateSpotForm />       */}
      <div className="options-container">
        <span className="single-option">
          {/* <h3>Campsites</h3>
          <h3>Lodging</h3> */}
        <h3>{sessionUser && 
        
        <CreateSpotFormModal />}</h3>
        </span>
      </div>
      <div className="spot-list">

        {spots?.map((spot) => (
          <div key={spot.id} className="single-spots-container">
            <NavLink key={spot?.id} to={`/spots/${spot?.id}`}>
              <div className="all-spot-img">
                <img
                  // onMouseOver={handleMouseOver}
                  // onMouseOut={handleMouseOut}
                  id="spot-pic"
                  alt="spot-pic"
                  src={spot?.imageUrl}
                  onError={(e) => {
                    e.target.src = `${defaultPic}`;
                  }}
                />

                <h1>{spot?.name}</h1>
                <p>{}</p>


                  <p>%</p>

              </div>
            </NavLink>
            <br />

            {/* <div className="delete-spot">
              {sessionUser?.id === spot.user_id && (
                <button onClick={() => dispatch(deleteSpotThunk(spot.id))}>
                  Delete
                </button>
              )}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllSpots;
