import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useHistory, useParams } from "react-router-dom"

import { fetchOneSpot } from "../../store/spot"

function OneSpot() {
const dispatch = useDispatch();
const { spotId } = useParams();
console.log("Spot Id", spotId);



useEffect(() => {
    dispatch(fetchOneSpot(spotId))
}, [dispatch])

  return (
    <div>
      One Spot
    </div>
  )
}

export default OneSpot;