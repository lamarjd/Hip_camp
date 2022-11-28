
import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CreateSpotFormModal from '../Modals/CreateSpotFormModal';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../Modals/LoginFormModal';
import "./NavBar.css"

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user)

  let sessionModals;
  if (!sessionUser) {
    sessionModals = (
      <>
      <LoginFormModal />
      </>
    )
  } else {
    sessionModals = (
      <>
      {/* <CreateSpotForm /> */}
      </>
    )
  }


  return (

    <nav>
      <div className="navbar">

      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          
          {sessionModals}
         
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>

      <div>
      
      </div>

     <NavLink to='/spots' exact={true}>
     See All Spots
     </NavLink>

     {sessionUser &&
    <CreateSpotFormModal />
     }
    </div>
    </nav>
  );
}

export default NavBar;
