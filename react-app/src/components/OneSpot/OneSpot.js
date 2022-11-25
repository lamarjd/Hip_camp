import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useHistory, useParams } from "react-router-dom"
// THUNKS Imports
import { fetchOneSpot } from "../../store/spot"
// Component imports
import EditSpotForm from './EditSpotForm'

function OneSpot() {
const dispatch = useDispatch();
const { spotId } = useParams();
console.log("Spot Id", spotId);

const spots = useSelector(state => Object.values(state.spots))

const oneSpot = spots.filter((spot) => spot.id === +spotId)[0]
console.log("One Spot", oneSpot)

useEffect(() => {
    dispatch(fetchOneSpot(spotId))
}, [dispatch])

  return (
    <div>
      <EditSpotForm spotId={spotId} oneSpot={oneSpot}/>
      <h3>Name:</h3>
     {oneSpot.name}
     <br />
     <h3>Type:</h3>
     {oneSpot.type}
     <br />
     <h3>Address:</h3>
     {oneSpot.address}
     <br />
     <h3>State:</h3>
     {oneSpot.state}
     <br />
     <h3>Country:</h3>
     {oneSpot.country}
     <br />
     <h3>Price:</h3>
     {oneSpot.price}
     <br />
     <h3>Description:</h3>
     {oneSpot.description}
     <br />
     <h3>UserID:</h3>
     {oneSpot.user_id}
    </div>
  )
}

export default OneSpot;