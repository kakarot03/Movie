import {
  loginFailure,
  loginStart,
  loginSuccess,
  logOut,
  registerFailure,
  registerStart,
  registerSuccess,
} from "./userRedux";
import axios from "axios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", user);
    return dispatch(loginSuccess(res.data));
  } catch (err) {
    return dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/register",
      user
    );
    return dispatch(registerSuccess(res.data));
  } catch (err) {
    return dispatch(registerFailure());
  }
};

export const logout = (dispatch) => {
  dispatch(logOut());
};

export const addMovie = async (movie) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/addNew/movie",
      movie
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const addTheatre = async (theatre) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/addNew/theatre",
      theatre
    );
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};
