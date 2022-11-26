import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useHistory, useParams } from "react-router-dom"
// THUNKS Imports
import { fetchOneSpot } from "../../store/spot"
// Component and local imports
import EditSpotForm from './EditSpotForm'
import "./OneSpot.css"

function OneSpot() {
const dispatch = useDispatch();
const { spotId } = useParams();
console.log("Spot Id", spotId);

const spot = useSelector((state) => {
  return state.spots[spotId]
})
// console.log("Spot Selector", spot)

/* ALT WAY TO SELECT THE SPOT FROM STORE
const spots = useSelector(state => Object.values(state.spots))

const oneSpot = spots.filter((spot) => spot.id === +spotId)[0]
console.log("One Spot", oneSpot)
*/


useEffect(() => {
    dispatch(fetchOneSpot(spotId))
}, [dispatch])

  return (
    <div>
      <EditSpotForm spotId={spotId} 
      // oneSpot={oneSpot}
      />
      

      <h3>Image</h3>
      <div className="img-container">
        <img id="spot-img" alt="spot-img" src={spot?.imageUrl} />
      </div>
      
      <h3>Name:</h3>
     {spot.name}
     <br />
     <h3>Type:</h3>
     {spot.type}
     <br />
     <h3>Address:</h3>
     {spot.address}
     <br />
     <h3>State:</h3>
     {spot.state}
     <br />
     <h3>Country:</h3>
     {spot.country}
     <br />
     <h3>Price:</h3>
     {spot.price}
     <br />
     <h3>Description:</h3>
     {spot.description}
     <br />
     <h3>UserID:</h3>
     {spot.user_id}
    </div>
  )
}

export default OneSpot;