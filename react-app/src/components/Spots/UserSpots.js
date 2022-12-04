import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CreateSpotFormModal from "../Modals/CreateSpotFormModal"
import { deleteSpotThunk } from '../../store/spot';
import defaultPic from "../../assets/wake-up.png";
import "./Spots.css"

function UserSpots() {
    const dispatch = useDispatch();

 const sessionUser = useSelector((state) => state.session.user);

 const spots = useSelector((state) => Object.values(state.spots));
 console.log("SPOTS", spots);

 const filteredSpots = spots.filter(spot => {
    return spot.user_id === sessionUser.id
 })
 console.log("User spots", filteredSpots)


 
 return (
     <div>
      User Spots
      <div className="spot-list">
        {/* {filteredSpots.map((spot) => (
            <>
        <p>{spot.name}</p> 
        <p>{spot.name}</p> 
            </>

        ))} */}

        {filteredSpots?.map((spot) => (
      
            <div key={spot.id} className="single-spots-container">
            <NavLink key={spot?.id} to={`/spots/${spot?.id}`}>
            <div className="all-spot-img">
            <img
            // onMouseOver={handleMouseOver}
            // onMouseOut={handleMouseOut}
            id="spot-pic"
            alt="spot-pic"
            src={spot?.imageUrl}
            onError={(e) => {
                e.target.src = `${defaultPic}`;
            }}
            />
            
            <h1>{spot?.name}</h1>
            </div>
            </NavLink>
            <br />
            
            <div className="delete-spot">
              {sessionUser?.id === spot.user_id && (
                  // isHovering &&
                  <button onClick={() => dispatch(deleteSpotThunk(spot.id))}>
                  Delete
                </button>
              )}
            </div>
          </div>
          ))}
      </div>
            
      
    </div>
  )
}

export default UserSpots;
