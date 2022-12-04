import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CreateSpotFormModal from "../Modals/CreateSpotFormModal"
import { fetchSpots, deleteSpotThunk } from '../../store/spot';
import defaultPic from "../../assets/wake-up.png";
import "./Spots.css"
import EditSpotFormModal from '../Modals/EditSpotFormModal';

function UserSpots() {
    const dispatch = useDispatch();

 const sessionUser = useSelector((state) => state.session.user);

 const spots = useSelector((state) => Object.values(state.spots));
 console.log("SPOTS", spots);

 const oneSpot = spots.filter(spot => {
    return spot.user_id === sessionUser.id
 })
 console.log("User spots", oneSpot)

 useEffect(() => {
    dispatch(fetchSpots());
  }, [dispatch]);
 
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

        {oneSpot?.map((spot) => (
      
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
                <>

                  <EditSpotFormModal oneSpot={spot} spotId={spot.id}/>
                  <button onClick={() => dispatch(deleteSpotThunk(spot.id))}>
                  Delete
                </button>
                </>
               
              )}
            </div>
          </div>
          ))}
      </div>
            
      
    </div>
  )
}

export default UserSpots;
