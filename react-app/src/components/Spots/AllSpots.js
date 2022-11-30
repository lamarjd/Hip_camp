import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import CreateSpotFormModal from "../Modals/CreateSpotFormModal";
import { fetchSpots, editSpotThunk, deleteSpotThunk } from "../../store/spot";
import "./Spots.css";

function AllSpots() {
  const dispatch = useDispatch();

  const spots = useSelector((state) => Object.values(state.spots));
  console.log("SPOTS", spots);

  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(fetchSpots());
  }, [dispatch]);

  return (
    <div>
      {/* <CreateSpotForm />       */}
      <div className="spot-list">
        {spots?.map((spot) => (
          <div key={spot.id}className="single-spots-container">
            <NavLink key={spot?.id} to={`/spots/${spot?.id}`}>

              <div className="all-spot-img">
                <img id="spot-pic" alt="spot-pic" src={spot?.imageUrl} />

              </div>
              
              <h1>{spot?.name}</h1>
            </NavLink>

            {/* {sessionUser.id === spot.user_id &&  */}
            <button onClick={() => dispatch(deleteSpotThunk(spot.id))}>
              Delete
            </button>
             {/* } */}
          </div>
        ))}

        {sessionUser && <CreateSpotFormModal />}
      </div>
    </div>
  );
}

export default AllSpots;
