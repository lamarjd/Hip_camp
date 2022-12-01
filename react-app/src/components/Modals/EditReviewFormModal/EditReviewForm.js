import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editReviewThunk, getOneReviewThunk } from '../../../store/review';
import { useHistory } from "react-router-dom";

function EditReviewForm({ review, spotId, oneSpot, setShowModal }) {

const dispatch = useDispatch();
const history = useHistory();

console.log("review from Edit Review Form", review)

// const review = useSelector((state) => state.reviews)
// console.log("review selector", review)

const [body, setBody] = useState(review?.body)
const [rating, setRating] = useState(review?.rating)
const [errors, setErrors] = useState([]);

let editedBody = (e) => {
    setBody(e.target.value)
  }

  let editedRating = (e) => {
    setRating(e.target.value);
  };



  useEffect(() => { 
    const errors = []
     if(body.length < 20) {
      errors.push("Review body must be longer than 20 characters") 
    }
    
    if(body.length > 200) {
      errors.push("Review body must be less than 200 characters") 
    }
      setErrors(errors) 
    }, [body]) 

useEffect(() => {
    dispatch(getOneReviewThunk(spotId))
  }, [dispatch])


  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      rating,
      body,
    };

let editedReview = await dispatch(editReviewThunk(payload, review.id))

if (editedReview) {
    setShowModal(false)
    history.push(`/spots/${spotId}`)
}
}


  return (
    <form className="edit-review-form" onSubmit={handleSubmit}>
            <ul>
        {errors &&
          errors.map((error) => {
            return (
              <li className="errors" key={error}>
                {error}
              </li>
            );
          })}
      </ul>
      <div className="edit-review-inner-container">
        <ul id="review-list">
        <li>
        <label>
          {" "}
          Select Rating
          <select onChange={editedRating}>
            <option value={1}>1 Star</option>
            <option value={2}>2 Star</option>
            <option value={3}>3 Star</option>
            <option value={4}>4 Star</option>
            <option value={5}>5 Star</option>
          </select>
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
                maxLength={200}
                minLength={20}
                required
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