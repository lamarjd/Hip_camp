import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import spotReducer, { fetchOneSpot } from "../../../store/spot";
import { createReviewThunk } from "../../../store/review";
import "../Modals.css";

function CreateReviewForm({ oneSpot, setShowModal }) {
  console.log("oneSpot from ReviewForm", oneSpot);

  const dispatch = useDispatch();
  const history = useHistory();

  const { id } = oneSpot;
  // let spot_id = id

  const [body, setBody] = useState("");
  const [rating, setRating] = useState(1);
  const [errors, setErrors] = useState([]);
  
  // let validationErrors = [];

  useEffect(() => {
    dispatch(fetchOneSpot(id));    
  }, [dispatch, body, rating]);
  
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
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      body,
      rating,
      // spot_id
    };

    setBody("");
    setRating(1);
    setShowModal(false);

    let reviewCreated = await dispatch(createReviewThunk(payload, id));

    if (reviewCreated) {
      history.push(`/spots/${id}`);
    }
  };

  return (
    <form className="add-review-form" onSubmit={handleSubmit}>
      <div className="review-inputs">
      {/* <ul>
        {errors &&
          errors.map((error) => {
            return (
              <li className="errors" key={error}>
                {error}
              </li>
            );
          })}
      </ul> */}
      <h2>Write a review for {oneSpot.name}</h2> <hr/>
      <div className="add-review-inputs">

      <label>
          {" "}
          Select Rating {" "}
          <select onChange={(e) => setRating(e.target.value)}>
            <option value={1}>1 Star</option>
            <option value={2}>2 Star</option>
            <option value={3}>3 Star</option>
            <option value={4}>4 Star</option>
            <option value={5}>5 Star</option>
          </select>
        </label>

        </div>
        <br/>

        <div className="add-review-inputs">

        <label>
          {" "}
          Write Review {" "}
          <input id="review-body-input"
            placeholder="Add your review here"
            value={body}
            maxLength={200}
            minLength={20}
            required
            onChange={(e) => setBody(e.target.value)}
            />
           {body.length}/200
        </label>
        <br />
        </div>
        


        <div className="review-buttons">

        <button id="submit" type="submit">Add Review</button>
        <button id="submit" type="cancel" onClick={() => setShowModal(false)}>Cancel</button>
        </div>
        
      </div>
    </form>
  );
}

export default CreateReviewForm;
