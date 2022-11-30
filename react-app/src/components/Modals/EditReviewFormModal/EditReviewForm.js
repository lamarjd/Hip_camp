import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editReviewThunk, getOneReviewThunk } from '../../../store/review';
import { useHistory } from "react-router-dom";

function EditReviewForm({ filteredReviews, spotId, spot, setShowModal }) {

const dispatch = useDispatch();
const history = useHistory();


const [body, setBody] = useState("")
const [rating, setRating] = useState(1)

let editedBody = (e) => {
    setBody(e.target.value)
  }

  let editedRating = (e) => {
    setRating(e.target.value);
  };



useEffect(() => {
    setBody(filteredReviews && filteredReviews.body)
    setRating(filteredReviews && filteredReviews.rating);
}, [filteredReviews]);

useEffect(() => {
    dispatch(getOneReviewThunk(spotId))
  }, [dispatch])


  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      rating,
      body,
    };

let editedReview = await dispatch(editReviewThunk(payload))

if (editedReview) {
    setShowModal(false)
    history.push(`/spots/${spotId}`)
}
}


  return (
    <form className="edit-review-form" onSubmit={handleSubmit}>
      <div className="edit-review-inner-container">
        <ul id="review-list">
        <li>
            <label>
              {" "}
              Edit Rating:
              <input
                id="input-rating"
                type="text"
                value={rating}
                // maxLength={60}
                // required
                onChange={editedRating}
              />
            </label>
          </li>
          <li>
            <label>
              {" "}
              Edit Body:
              <input
                id="input-name"
                type="text"
                value={body}
                // maxLength={60}
                // required
                onChange={editedBody}
              />
            </label>
          </li>
     

          <button className="edit-spot-button" type="submit">
            Submit Edit
          </button>
        </ul>
      </div>
    </form>
  );
}


export default EditReviewForm;