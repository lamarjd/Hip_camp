import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../store/session';
import "./Auth.css"

const LogoutButton = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/'); // Redirect to home after logout
  };

  return <button id="logout" onClick={onLogout}  
  >Logout</button>;
};

export default LogoutButton;
