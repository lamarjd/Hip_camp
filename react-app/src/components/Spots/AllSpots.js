import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import CreateSpotFormModal from "../Modals/CreateSpotFormModal";
import { fetchSpots, editSpotThunk, deleteSpotThunk } from "../../store/spot";
import defaultPic from "../../assets/wake-up.png";
import "./Spots.css";

function AllSpots() {
  const dispatch = useDispatch();

  const spots = useSelector((state) => Object.values(state.spots));
  console.log("SPOTS", spots);

  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(fetchSpots());
  }, [dispatch]);

  // let filteredSpots = spots.filter((spot) => {
  //   return spot.type === "Campsite";
  // });

  // console.log("Filtered spots", filteredSpots)

  // const [isHovering, setIsHovering] = useState(false)

  // const handleMouseOver = () => {
  //   setIsHovering(true)
  // }

  // const handleMouseOut = () => {
  //   setIsHovering(false)
  // }

  // const changeBackground = (e) => {
  //   e.target.style.background = 'red';
  // }

  return (
    <div className="all-spots-container">
  
      <div className="options-container">
        <span className="single-option">

          <h3>{sessionUser && <CreateSpotFormModal />}</h3>
        </span>
      </div>
      <div className="spot-list">
        {spots?.map((spot) => (
          <div key={spot.id} className="single-spots-container">
            <NavLink key={spot?.id} to={`/spots/${spot?.id}`}>
              <div className="all-spot-img">
                <img
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllSpots;
