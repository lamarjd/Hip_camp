import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import "./NavBar.css";

function ProfileButton({ sessionUser }) {

  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


  return (
    <>
      <div className="user_button">
        <i id="menu" className="fas fa-user-circle" onClick={openMenu} />
      </div>
      {showMenu && (
        <div className="profile-dropdown">
          <p id="user-info">{sessionUser.username}</p>
          <p id="user-info">{sessionUser.email}</p>

          <p id="user-spots" style={{textDecoration: "none"}}>

          <NavLink  to={`/${sessionUser?.id}/spots`}>My Spots</NavLink>
          </p>

          <p>
            <LogoutButton />
          </p>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
