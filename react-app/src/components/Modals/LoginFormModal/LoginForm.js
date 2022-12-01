import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { login } from '../../../store/session';
import "../Modals.css"

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const user = useSelector(state => state.session.user);
  // console.log("User from LoginForm", user)
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(login(email, password))
  // }, [dispatch])


  const demoUser = () => {
    setEmail("demo@aa.io");
    setPassword("password");
  };

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form className="form" onSubmit={onLogin}>
      <div className="errors">
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className="login-fields">
        <label htmlFor='email'>Email</label>
        <input
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div className="login-fields">
        <label htmlFor='password'>Password</label>
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
        
        <input type="submit" className="sign-in" value="Log In" /> <br />
        
        <div className="demo-container">
          <button className="demo" onClick={demoUser}>
            Demo User
          </button>
        </div>
      </div>

    </form>
  );
};

export default LoginForm;
