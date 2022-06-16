import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register, login } from "../redux/apiCalls";
import validator from "validator";
import "./Login.css";

const Login = () => {
  const [className, setClassName] = useState("right-panel-deactive");
  const [username, setUserName] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  // to add and remove the classList on clicking signup/signin button
  const handleClick = (props) => {
    if (props === "signup") {
      setClassName("right-panel-active");
    } else {
      setClassName("right-panel-deactive");
    }
  };

  // to sign up
  const RegisterHandleClick = (e) => {
    e.preventDefault();
    if (invalidInfo()) return;
    register(dispatch, { username, registerEmail, registerPassword });
  };

  const invalidInfo = () => {
    if (!validator.isEmail(registerEmail)) {
      return true;
    }
    if (registerPassword !== confirmPassword) {
      return true;
    }
    return false;
  };

  const LoginHandleClick = (e) => {
    e.preventDefault();
    if (!validator.isEmail(loginEmail)) {
      return true;
    }
    login(dispatch, { loginEmail, loginPassword });
  };

  return (
    <div>
      <h2>Sign in/up Form</h2>
      <div className={className} id="container">
        <div className="form-container sign-up-container" id="form-container">
          <form action="#">
            <h1 className="register-head">Create Account</h1>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={RegisterHandleClick}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container" id="form-container">
          <form action="#">
            <h1 style={{ paddingBottom: "15px" }}>Sign in</h1>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button onClick={LoginHandleClick}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container" id="overlay-container">
          <div className="overlay" id="overlay">
            <div
              className="overlay-panel overlay-left"
              id="overlay-panel overlay-left"
            >
              <h1>Welcome Back!</h1>
              <p>
                Register an Account with your Credentials and Start Booking!
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleClick("signin")}
              >
                Sign In
              </button>
            </div>
            <div
              className="overlay-panel overlay-right"
              id="overlay-panel overlay-right"
            >
              <h1>Hello, Friend!</h1>
              <p>
                SignIn to reserve the tickets for your Fav Movie, Enjoy the
                Show!
              </p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => handleClick("signup")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
