import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { fetchOneSpot } from '../../../store/spot'
import { createReviewThunk } from '../../../store/review' 

function CreateReviewForm({ spot, setShowModal }) {
  
  console.log("spot from ReviewForm", spot)

  const dispatch = useDispatch();
  const history = useHistory();

  const { id } = spot
  let spot_id = id

  const [body, setBody] = useState("")
  const [rating, setRating] = useState(1)

  useEffect(() => {
    dispatch(fetchOneSpot(id))
  }, [dispatch, body, rating])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      body,
      rating,
      spot_id
    }

    setBody("")
    setRating(1)
    setShowModal(false)

    let reviewCreated = await dispatch(createReviewThunk(payload, id))

    if (reviewCreated) {
      history.push(`/spots/${spot_id}`)
    }
  }

  return (
    <form className="review-form"
    onSubmit={handleSubmit}>
      <div className="review-inputs">

        <label> Write Review
          <input
          placeholder="Add your review here"
          value={body}
          maxLength={2000}
          required
          onChange={(e) => setBody(e.target.value)}
          />
        </label>

        <label> Select Rating
          <select onChange={(e) => setRating(e.target.value)}>
            <option value={1}>1 Star</option>
            <option value={2}>2 Star</option>
            <option value={3}>3 Star</option>
            <option value={4}>4 Star</option>
            <option value={5}>5 Star</option>
          </select>
        </label>
        
        <button type="submit">Add Review</button>
      </div>

    </form>
  )
}

export default CreateReviewForm;