import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { addMovie, addTheatre, logout } from "../redux/apiCalls";
import "./Admin.css";

const Admin = () => {
  const [moviename, setMovieName] = useState("");
  const [year, setYear] = useState("");
  const [theatre, setTheatreName] = useState("");
  const dispatch = useDispatch();

  const handleClick1 = () => {
    addMovie({ moviename, year });
  };

  const handleClick2 = () => {
    addTheatre({ theatre });
  };

  const handleLogOut = () => {
    logout(dispatch);
    <Navigate to={"/login"}></Navigate>;
  };

  return (
    <div>
      {/* <button onClick={handleLogOut()}>Logout</button> */}
      <h2>Admin Panel</h2>
      <div id="container">
        <div className="form-container sign-in-container" id="form-container">
          <form action="#">
            <h1 className="register-head">Add Movie</h1>
            <input
              type="text"
              placeholder="Movie Name"
              onChange={(e) => setMovieName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Release Year"
              onChange={(e) => setYear(e.target.value)}
            />
            <button onClick={() => handleClick1()}>Add Movie</button>
          </form>
        </div>
        <div className="overlay-container" id="overlay-container">
          <div className="overlay" id="overlay">
            <div
              className="overlay-panel overlay-right"
              id="overlay-panel overlay-right"
            >
              <h1>Add Theatre</h1>
              <input
                id="dummy"
                type="text"
                placeholder="Theatre Name"
                onChange={(e) => setTheatreName(e.target.value)}
              />
              <button
                onClick={() => handleClick2()}
                className="ghost"
                id="signIn"
              >
                Add Theatre
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
