import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    error: false,
  },
  reducers: {
    loginStart: (state) => {},
    loginSuccess: (state, action) => {
      state.error = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.currentUser = null;
      state.error = true;
    },
    registerStart: (state) => {},
    registerSuccess: (state) => {
      state.error = false;
    },
    registerFailure: (state) => {
      state.error = true;
    },
    logOut: (state) => {
      state.currentUser = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logOut,
} = userSlice.actions;
export default userSlice.reducer;
