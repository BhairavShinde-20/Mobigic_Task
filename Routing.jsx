import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Login from "./components/Login";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path ="/profile/:_id" element={<Profile/>} />
      </Routes>
    </>
  );
};

export default Routing;
