import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link, Redirect, useHistory, useParams } from "react-router-dom";
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
import defaultPic from "../../assets/wake-up.png";

import "./OneSpot.css";
import EditReviewFormModal from "../Modals/EditReviewFormModal";
import AllSpots from "../Spots/AllSpots";

function OneSpot() {
  const dispatch = useDispatch();
  const { spotId } = useParams();
  // console.log("Spot Id", spotId);

  const sessionUser = useSelector((state) => state.session.user);

  // const spot = useSelector((state) => {
  //   return state.spots[spotId];
  // });
  // console.log("Spot Selector", spot);

  // const reviews = spot?.review;
  // console.log("review from spot", reviews);

  const rev = useSelector((state) => Object.values(state.reviews));
  // console.log("--------> Review selector", rev);

  const filteredReviews = rev.filter((review) => review.spot_id === +spotId);
  // console.log("Filtered reviews", filteredReviews);

  const spots = useSelector((state) => Object.values(state.spots));

  const oneSpot = spots.filter((spot) => spot.id === +spotId)[0];
  // console.log("One Spot", oneSpot);

  useEffect(() => {
    dispatch(fetchOneSpot(spotId));
    dispatch(getAllReviews());
  }, [dispatch]);

  const reviews = filteredReviews.map((review) => {
    return review.rating;
  });

  // console.log("reviews", reviews.reduce((accum, num) => {
  //   return accum + num;
  // }, 0))

  const revPercent = reviews.reduce((accum, num) => {
    let sum = accum + num;
    // let avg = sum * reviews.length
    // / 5 / reviews.length;
    return sum ;
  }, 0);

  return (
    <div className="spot-container">
      <NavLink to="/spots" exact={true} activeClassName="active">
        <h2 id="back">Back To All Spots</h2>
        {/* <AllSpots/> */}
      </NavLink>
    
      <div className="spot-detail-div">
        <div className="spot-details">
          <p>{oneSpot?.country} </p> <h6>{" > "}</h6>
          {oneSpot?.city ? (
            <>
              <p>{oneSpot?.city}</p>
              <h6>{" > "}</h6>
            </>
          ) : (
            <p>{""}</p>
          )}
          <p>{oneSpot?.state} </p>
        </div>

        <div className="spot-name">
          <h2>{oneSpot?.name}</h2>

          <div className="total-spot-reviews">
            {!reviews.length ? (
              <p>No Reviews</p>
            ) : (
              <>
                <i id="thumb-up" className="fa-solid fa-thumbs-up"></i>
                <p id="thumb-up">{(revPercent / 5) / reviews.length * 100}%</p>
                <p id="underline">({filteredReviews.length}) reviews</p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="img-container">
        <img
          id="spot-img"
          alt="spot-img"
          src={oneSpot?.imageUrl}
          onError={(e) => {
            e.target.src = `${defaultPic}`;
          }}
        />
      </div>

      <br />
      <div className="spot-specifics">
        <h3>Price:</h3>
        <h4 id="specifics">${oneSpot?.price} </h4>
        <h3>Type:</h3>
        <h4 id="specifics">{oneSpot?.type} </h4>

        <h3>Description:</h3>
        <h4 id="specifics">{oneSpot?.description} </h4>
        <br />
      </div>

      {filteredReviews?.length == 0 ? (
        <h3>No Reviews</h3>
      ) : (
        <div className="total-reviews">
          <h3> Reviews ({filteredReviews.length})</h3>
        </div>
      )}

      <div className="reviews">
        {filteredReviews?.map((review) => (
          <span id="review-items">
            <p id="review-labels" key={review?.body}>
              Review: {review?.body}
            </p>

            <p id="review-labels" key={review?.rating}>
              Rating: {review?.rating} / 5 stars
            </p>

            {review?.user_id === sessionUser?.id && (
              <div className="review-action-buttons">
                <EditReviewFormModal
                  review={review}
                  oneSpot={oneSpot}
                  spotId={spotId}
                />

                <button
                  id="delete-review"
                  onClick={() => dispatch(deleteReviewThunk(review.id))}
                >
                  Delete
                </button>
              </div>
            )}
          </span>
        ))}
      </div>

      {oneSpot?.user_id !== sessionUser?.id && (
        <CreateReviewFormModal filteredReviews={filteredReviews} oneSpot={oneSpot} spotId={spotId} />
      )}
      <br />
    </div>
  );
}

export default OneSpot;
