import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useHistory, useParams } from "react-router-dom";
// THUNKS Imports
import { fetchOneSpot } from "../../store/spot";
import {
  getAllReviews,
  deleteReviewThunk,
  editReviewThunk,
} from "../../store/review";
// Component and local imports
import EditSpotFormModal from "../Modals/EditSpotFormModal";
import EditSpotForm from "../Modals/EditSpotFormModal/EditSpotForm";
import CreateReviewFormModal from "../Modals/CreateReviewFormModal";
import defaultPic from "../../assets/wake-up.png"

import "./OneSpot.css";
import EditReviewFormModal from "../Modals/EditReviewFormModal";

function OneSpot() {
  const dispatch = useDispatch();
  const { spotId } = useParams();
  // console.log("Spot Id", spotId);

  const sessionUser = useSelector((state) => state.session.user)

  // const spot = useSelector((state) => {
  //   return state.spots[spotId];
  // });
  // console.log("Spot Selector", spot);

  // const reviews = spot?.review;
  // console.log("review from spot", reviews);

  const rev = useSelector((state) => Object.values(state.reviews));
  console.log("--------> Review selector", rev);

  const filteredReviews = rev.filter((review) => review.spot_id === +spotId);

  console.log("Filtered reviews", filteredReviews);

  const spots = useSelector((state) => Object.values(state.spots));

  const oneSpot = spots.filter((spot) => spot.id === +spotId)[0];
  console.log("One Spot", oneSpot);

  useEffect(() => {
    dispatch(fetchOneSpot(spotId));
    dispatch(getAllReviews());
  }, [dispatch]);

// let getRating = (filteredReviews) => {
//   let sum = 0;
//   for (let i = 0; i < filteredReviews.length -1; i++) {
//     return filteredReviews[i]
//   }
// }

//   console.log("spot rating", getRating)
if (!oneSpot) {
  return <Redirect to='/not-found' />;
}

  return (
    <div className="spot-container">
      {/* <h3>Image</h3> */}

      <div className="spot-detail-div">
        <div className="spot-details">
          <p>
            {oneSpot?.country} {" > "}{" "}
          </p>
          {oneSpot?.city ? (
            <p>
              {oneSpot?.city}
              {" > "}
            </p>
          ) : (
            <p>{""}</p>
            )}
          <p>{oneSpot?.state} </p>
        </div>

          <div className="spot-name">
            <h2>{oneSpot?.name}</h2>

            <div className="total-spot-reviews">
            <i className="fa-solid fa-thumbs-up"></i>
              <p>{(filteredReviews.length / 100).toFixed(2)}%</p>
            <p>{filteredReviews.length} reviews</p>
            </div>

          </div>
      </div>

      <div className="img-container">
        <img id="spot-img" alt="spot-img" src={oneSpot?.imageUrl} 
        onError={e => {e.target.src=`${defaultPic}`}}
        />
      </div>

      <br />
      {/* <h3>Country:</h3>
      {oneSpot?.country}
      <br /> */}

      {/* <h3>Name:</h3>
      {oneSpot?.name}
      <br /> */}

      <h3>Type:</h3>
      {oneSpot?.type}
      <br />
      {/* <h3>Address:</h3>
      {spot?.address}
      <br /> */}
      <h3>Price:</h3>
      {oneSpot?.price}
      <br />
      <h3>Description:</h3>
      {oneSpot?.description}
      <br />
      <h3>UserID:</h3>
      {oneSpot?.user_id}


      {oneSpot?.user_id === sessionUser?.id &&
      <EditSpotFormModal oneSpot={oneSpot} spotId={spotId} />
      }

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
            {/* {console.log("review within the map", review)} */}
            <p key={review?.body}>Body: {review?.body}</p>

            <p key={review?.rating}>Rating: {review?.rating} / 5</p>

            {review?.user_id === sessionUser?.id &&
            <>
            <EditReviewFormModal
              review={review}
              oneSpot={oneSpot}
              spotId={spotId}
              />

            <button id="delete-review" onClick={() => dispatch(deleteReviewThunk(review.id))}>
              Delete
            </button>
              </>
            }
          </span>
        ))}
      </div>

    {oneSpot?.user_id !== sessionUser?.id && 
      <CreateReviewFormModal oneSpot={oneSpot} spotId={spotId} />
    }
    </div>
  );
}

export default OneSpot;
