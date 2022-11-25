import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useHistory } from "react-router-dom"

import { fetchSpots, editSpotThunk, deleteSpotThunk } from "../../store/spot"
import CreateSpotForm from './CreateSpotForm'


function AllSpots() {
const dispatch = useDispatch();

const spots = useSelector(state => Object.values(state.spots))

console.log("SPOTS", spots)

useEffect(() => {
    dispatch(fetchSpots())
}, [dispatch])


  return (
    <div>
      <CreateSpotForm />
    {spots.map((spot => (
        <div className="single-spots-container">
      <NavLink
      key={spot.id}
      to={`/spots/${spot.id}`}
      >
        <h1>{spot.name}</h1>
      </NavLink>
      <button onClick={() => dispatch(deleteSpotThunk(spot.id))}>Delete</button>
    </div>
    )))}
    </div>
  )
}

export default AllSpots