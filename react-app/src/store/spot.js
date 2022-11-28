
const ALL_SPOTS = 'spots/all'
const ONE_SPOT = 'spots/one'
const CREATE_SPOT = 'spots/new'
const EDIT_SPOT = 'spots/edit'
const DELETE_SPOT = 'spots/delete'

const getAllSpotsAction = payload => {

    return {
        type: ALL_SPOTS,
        payload
    }
}

const oneSpot = payload => {
    return {
        type: ONE_SPOT,
        payload
    }
}

const createSpotAction = payload => {
    return {
        type: CREATE_SPOT,
        payload
    }
}


const editSpotAction = (spot) => {
    return {
        type: EDIT_SPOT,
        spot
    }
}

const removeSpotAction = (spotId) => {
    return {
        type: DELETE_SPOT,
        spotId
    }
}


export const fetchSpots = () => async dispatch => {
    const res = await fetch('/api/spots');

    if (res.ok) {

        const spots = await res.json();

        dispatch(getAllSpotsAction(spots));

        return spots

     } else { // any bad requests and errors
        throw new Error("Not this time")
    }
}

// spot details thunk
export const fetchOneSpot = id => async dispatch => {

    const res = await fetch(`/api/spots/${id}`)
    if (res.ok) {

        const singleSpot = await res.json()

        dispatch(oneSpot(singleSpot))

        return singleSpot
    } else { // any bad requests and errors
        throw new Error("Not this time")
    }
}

// create a spot thunk
export const createSpotThunk = (payload,id) => async dispatch => {
    const response = await fetch('/api/spots/new_spot',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })

    const data = await response.json()


    if (response.ok) {
        await dispatch(createSpotAction(data))
        return data
    } else { // any bad requests and errors
        throw new Error("Not this time")
    }
}

export const editSpotThunk = (spot,id) => async dispatch => {
    console.log("THUNK FIRING", spot, id)
    const response = await fetch(`/api/spots/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(spot)
    });
    if (response.ok) {
        const spot = await response.json();
        console.log("Spot from Edit Thunk", spot)

        dispatch(editSpotAction(spot))
        return spot
    }
    // error handling
    throw new Error("Not this time")
}
export const editSpotAddReviewThunk = (spot,id) => async dispatch => {

    const response = await fetch(`/api/spots/${id}/reviewEdit`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(spot)
    });
    if (response.ok) {
        const spot = await response.json();
        dispatch(editSpotAction(spot))
        return spot
    }
    // error handling
    throw new Error("Not this time")
}

export const deleteSpotThunk = (spotId) => async dispatch => {
    const response = await fetch(`/api/spots/${spotId}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
    });
    if (response.ok) {
        const spot = `${spotId}`
        dispatch(removeSpotAction(spot))
    } else { // any bad requests and errors
        throw new Error("Not this time")
    }
}

export const createSpotReviewThunk = (payload,review_id) => async dispatch => {
    const response = await fetch(`/api/apots/${review_id}/review`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })

    const data = await response.json()


    if (response.ok) {
        await dispatch(createSpotAction(data))
        return data
    } else { // any bad requests and errors
        throw new Error("Not this time")
    }
}

const initialState = {}


const spotReducer = (state = initialState, action) => {
    let newState = {};

    switch (action.type) {

        case ALL_SPOTS: {
            action.payload.spots.forEach(spot => {
                newState[spot.id] = spot
            })
            return newState
        }

        case ONE_SPOT: {

            newState = {...state}
            newState[action.payload.id] = action.payload

            return newState
        }

        case CREATE_SPOT: {
            newState = { ...state }
            newState[action.payload.id] = action.payload
            return newState
        }

        case EDIT_SPOT:

            newState= {...state}
            console.log("New State", newState)
            console.log("New State Action", action)
            newState[action.spot.id]= action.spot
            console.log("New State Action Before", newState)
            newState[action.spot.id]["reviews"]= state[action.spot.id].reviews
            console.log("New State Action After", newState)

            return newState
  
        case DELETE_SPOT:
            newState = {...state}
            // console.log("STTATE",state)
            // console.log("EWNEWNEWN",newState)
            // console.log("ACTION",action)
            delete newState[action.spotId]
            // console.log("AFADSFDASF AFTER---",newState)
            return newState;

        default: {
            return state;
        }
    }
}

export default spotReducer;
