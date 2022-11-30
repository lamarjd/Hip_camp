import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
// THUNKS Imports
import { fetchOneSpot } from "../../store/spot";
import { getAllReviews, deleteReviewThunk, editReviewThunk } from "../../store/review";
// Component and local imports
import EditSpotFormModal from "../Modals/EditSpotFormModal";
import EditSpotForm from "../Modals/EditSpotFormModal/EditSpotForm";
import CreateReviewFormModal from "../Modals/CreateReviewFormModal";

import "./OneSpot.css";
import EditReviewFormModal from "../Modals/EditReviewFormModal";

function OneSpot() {
  const dispatch = useDispatch();
  const { spotId } = useParams();
  // console.log("Spot Id", spotId);

  const spot = useSelector((state) => {
    return state.spots[spotId];
  });
  console.log("Spot Selector", spot?.review);

  // const reviews = spot?.review;
  // console.log("review from spot", reviews);

  const rev = useSelector((state) => Object.values(state.reviews))
  console.log("--------> Review selector", rev)

  const filteredReviews = rev.filter((review) => review.spot_id === +spotId)

  console.log("Filtered reviews", filteredReviews)


  /* ALT WAY TO SELECT THE SPOT FROM STORE
const spots = useSelector(state => Object.values(state.spots))

const oneSpot = spots.filter((spot) => spot.id === +spotId)[0]
console.log("One Spot", oneSpot)
*/

  useEffect(() => {
    dispatch(fetchOneSpot(spotId));
    dispatch(getAllReviews());
  }, [dispatch]);

 
  return (
    <div className="review-container">
      <h3>Image</h3>
      <div className="img-container">
        <img id="spot-img" alt="spot-img" src={spot?.imageUrl} />
      </div>

      <h3>State:</h3>
      {spot?.state}
      <br />
      <h3>Country:</h3>
      {spot?.country}
      <br />

      <h3>Name:</h3>
      {spot?.name}
      <br />

      <h3>Type:</h3>
      {spot?.type}
      <br />
      {/* <h3>Address:</h3>
      {spot?.address}
      <br /> */}
      <h3>Price:</h3>
      {spot?.price}
      <br />
      <h3>Description:</h3>
      {spot?.description}
      <br />
      <h3>UserID:</h3>
      {spot?.user_id}
      <EditSpotFormModal spot={spot} spotId={spotId} />

      {/* <EditSpotForm spot={spot} 
      spotId={spotId}/> */}


      {filteredReviews?.length == 0 ? (
        
        <h3>No Reviews</h3>
      ) : ( 
      <div className="total-reviews">
        <h3> Reviews ({filteredReviews.length})</h3> 
      </div>
      )}

      <div className="reviews">
        {filteredReviews?.map((review) => (
          <span>
          
          <p key={review.id}>Body: {review.body}</p>

          <p key={review.id}>Rating: {review.rating} / 5</p>
          
          <button onClick={() => dispatch(editReviewThunk(review, review.id))}>Edit</button>
          
          <EditReviewFormModal filteredReviews={filteredReviews} spot={spot} spotId={spotId}/>
          
          <button onClick={() => dispatch(deleteReviewThunk(review.id))}>Delete</button>
          </span>
          ))}
      </div>


          <CreateReviewFormModal spot={spot} spotId={spotId} />

    </div>
  );
}

export default OneSpot;
