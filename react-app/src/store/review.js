const ONE_REVIEW = 'reviews/one'
const ALL_REVIEWS = 'reviews/all'
const CREATE_REVIEW = 'reviews/new'
const EDIT_REVIEW = 'reviews/edit'
const DELETE_REVIEW = 'reviews/delete'

// ACTION CREATORS
const oneReview = payload => {
    return {
        type: ONE_REVIEW,
        payload
    }
}

const allReviews = payload => {
    return {
        type: ALL_REVIEWS,
        payload
    }
}

const createReviewAction = payload => {
    return {
        type: CREATE_REVIEW,
        payload
    }
}

const editReviewAction = review => {
    return {
        type: EDIT_REVIEW,
        review
    }
}

const removeReviewAction = reviewId => {
    return {
        type: DELETE_REVIEW,
        reviewId
    }
}
// ================

//  THUNK ACTIONS
export const getOneReview = (id) => async dispatch => {
    const response = await fetch(`/api/reviews/${id}`)

    if (response.ok){
        const singleReview = await response.json();
        dispatch(oneReview(singleReview))
        return singleReview
    }
    throw new Error("Can't get this review")
}

export const getAllReviews = () => async dispatch => {
    const response = await fetch(`/api/reviews`)

    if (response.ok) {
        const reviews = await response.json()
        dispatch(allReviews(reviews))
        return reviews
    }
    throw new Error("Cannot get all reviews")
}

export const createReviewThunk = (payload, id) => async dispatch => {
    const response = await fetch(`/api/reviews/${id}/new_review`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const data = await response.json()
        await dispatch(createReviewAction(data))
        return data
    }
    throw new Error("Cannot create a review")
}

export const editReviewThunk = (review, id) => async dispatch => {
    const response = await fetch(`/api/reviews/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    });

    if (response.ok){
        const review = await response.json();
        dispatch(editReviewAction(review))
        return review
    }
    throw new Error("Cannot edit this review")
}

export const deleteReviewThunk = (reviewId) => async dispatch => {
    console.log("review ID from Thunk", reviewId)
    const response = await fetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log("response from delete review thunk", response)
    if (response.ok){
        const review = `${reviewId}`
        console.log("review from backend", review)
        dispatch(removeReviewAction(review))
    }
    // throw new Error("Cannot delete this review")
}

// ================


// REDUCER
const initialState = {}

const reviewReducer = (state=initialState, action) => {
    let newState = {};
    switch (action.type) {
        case ONE_REVIEW: {
            newState = {...state}
            newState[action.payload.id] = action.payload
            return newState
        }

        case ALL_REVIEWS: {
            action.payload.reviews.forEach(review => {
                newState[review.id] = review
            })
            return newState
        }

        case CREATE_REVIEW: {
            newState = {...state}
            newState[action.payload.id] = action.payload
            return newState
        }

        case EDIT_REVIEW: {
            return {
                ...state,
                [action.review.id]: action.review
            }
        }

        case DELETE_REVIEW: {
            newState = {...state}
            console.log("Delete reducer before", newState)
            delete newState[action.reviewId]
            console.log("Delete ACTION reducer AFTER", action)
            console.log("Delete reducer AFTER", newState)
            return newState
        }

        default: {
            return state
        }
    }
}


export default reviewReducer;