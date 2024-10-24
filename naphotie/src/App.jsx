import { useState } from "react";
import "./App.css";
import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { Notfound } from "./Components/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="Signup" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
