import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Movie from "./pages/Movie";
import Admin from "./pages/Admin";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  let admin = false;
  if (user && user.isAdmin) {
    admin = true;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <Movie /> : <Navigate to="/login" />}
          // element={<Admin />}
        ></Route>
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
