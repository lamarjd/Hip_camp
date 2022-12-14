import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import { signUp } from "../../store/session";
import "./Signup.css";

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(
        signUp(username, email, first_name, last_name, password)
      );
      if (data) {
        setErrors(data);
        console.log("data", data);
      }
    } else {
      setErrors(["Passwords must match"]);
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  console.log("User from signup", user);

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className="signup-container">
        <nav className="signupNavBar">
          <NavLink to="/" exact={true} activeClassName="active">
            <h1 id="go-back">Go Back</h1>
          </NavLink>
        </nav>

        <div className="outermostSignupDiv">
          <form onSubmit={onSignUp} id="signupForm">
            <div>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <div className="outerSignupDiv">
              <label className="emailSignupLabel">User Name</label>
              <input
                id="userNameSignUpBox"
                className="signupemailbox"
                type="text"
                name="username"
                onChange={updateUsername}
                value={username}
                maxLength={60}
                minLength={5}
                required={true}
              ></input>

              <label className="emailSignupLabel">Email</label>
              <input
                id="signInEmailBox"
                className="signupemailbox"
                type="text"
                name="email"
                onChange={updateEmail}
                value={email}
                minLength={5}
                maxLength={60}
                required={true}
              ></input>

              <label className="emailSignupLabel">First Name</label>
              <input
                id="firstnamesignupbox"
                className="signupemailbox"
                type="text"
                name="firstName"
                onChange={updateFirstName}
                value={first_name}
                minLength={3}
                maxLength={60}
                required={true}
              ></input>

              <label className="emailSignupLabel">Last Name</label>
              <input
                id="signUpLastNameBox"
                className="signupemailbox"
                type="text"
                name="lastName"
                onChange={updateLastName}
                value={last_name}
                minLength={3}
                maxLength={60}
                required={true}
              ></input>

              <label className="emailSignupLabel">Password</label>
              <input
                id="passwordSignUpIdBox"
                className="signupemailbox"
                type="password"
                name="password"
                onChange={updatePassword}
                value={password}
                minLength={5}
                maxLength={60}
                required={true}
              ></input>

              <label className="emailSignupLabel">Repeat Password</label>
              <input
                id="labelRepeatPassword"
                className="signupemailbox"
                type="password"
                name="repeat_password"
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
              ></input>

              <button id="signupButton" type="submit">
                Sign Up
              </button>
              <br/>
              {" "}
            <i id="tree" className="fa-solid fa-tree"></i>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
