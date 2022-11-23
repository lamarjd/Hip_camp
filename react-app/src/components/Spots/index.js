import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useHistory } from "react-router-dom"

import { fetchSpots, editSpotThunk, deleteSpotThunk } from "../../store/spot"


function AllSpots() {
const dispatch = useDispatch();

const spots = useSelector(state => Object.values(state.spots))

console.log("SPOTS", spots)

useEffect(() => {
    dispatch(fetchSpots())
}, [dispatch])


  return (
    <>
    {spots.map((spot => (
        <div className="all-spots-container">
      <NavLink
      key={spot.id}
      to={`/spots/${spot.id}`}
      >
        <h1>{spot.name}</h1>
      </NavLink>
    </div>
    )))}
    </>
  )
}

export default AllSpots