import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, NavLink, Redirect } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import "./NavBar.css";

function ProfileButton({ sessionUser }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [showMenu, setShowMenu] = useState(false);
    const [showSpots, setShowSpots] = useState(false);
  
    const openMenu = () => {
      if (showMenu) return;
      setShowMenu(true);
    };
  
    useEffect(() => {
      if (!showMenu) return;
  
      const closeMenu = () => {
        setShowMenu(false);
        setShowSpots(false)
      };
  
      document.addEventListener("click", closeMenu);
  
      return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);
  
    // const logout = (e) => {
    //   e.preventDefault();
    //   dispatch(sessionActions.logout());
    //   history.push("/");
    // };
  
    return (
      <>
        <div className="user_button">
          <i id="menu" className="fas fa-user-circle" onClick={openMenu} />
        </div>
        {showMenu && (
          <div className="profile-dropdown">
            <p>{sessionUser.username}</p>
            <p>{sessionUser.email}</p>

            
            {!showSpots &&               
         

                <NavLink onClick={() => setShowSpots(true)} to={`${sessionUser?.id}/spots`}            
                >
                My Spots
            </NavLink>
            
        }

                
            

            <p>
              <LogoutButton />
            </p>
          </div>
        )}
      </>
    );
  }
  
  export default ProfileButton;