import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import CreateSpotFormModal from "../Modals/CreateSpotFormModal";
import LogoutButton from "../auth/LogoutButton";
import LoginFormModal from "../Modals/LoginFormModal";
import "./NavBar.css";

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionModals;
  if (!sessionUser) {
    sessionModals = (
      <>
        <LoginFormModal />
      </>
    );
  } else {
    sessionModals = <>{/* <CreateSpotForm /> */}</>;
  }

  return (
    <nav className="nav">
      <div className="navbar">
        <ul className="nav-list-items">
          <li>
            <NavLink
              className="logo"
              to="/"
              exact={true}
              activeClassName="active"
            >
              HI-C
              <i className="fa-solid fa-campground"></i>
              MP
            </NavLink>
          </li>
          <li>{sessionModals}</li>
          {!sessionUser && (
            <li>
              <NavLink
                className="signup"
                to="/sign-up"
                exact={true}
                activeClassName="active"
              >
                Sign Up
              </NavLink>
            </li>
          )}
          {sessionUser && (
            <li id="logout">
              <LogoutButton />
            </li>
          )}
        </ul>


      </div>
    </nav>
  );
};

export default NavBar;
