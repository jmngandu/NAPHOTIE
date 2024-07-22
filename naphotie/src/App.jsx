import { useState } from "react";
import "./App.css";
import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
