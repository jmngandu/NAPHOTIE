import { Form, Link } from "react-router-dom";
import { useState } from "react";
import VerifyHuman from "./VerifyHuman";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const welcomeM = () => toast("Welcome to Naphotie!");

  return (
    <>
      <div className="login-page">
        <h3>Sign in to NAPHOTIE</h3>
        <form>
          <div className="log-input">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Gmail"
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>

          <VerifyHuman />
          <div className="login-btns">
            <button onClick={welcomeM} id="log-btn" type="submit">
              <Link to="/Home">Login</Link>
            </button>
            <ToastContainer />

            <button onClick={welcomeM} id="signup-btn">
              <Link to="Signup">Sign up</Link>
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
      <small>©2024 Naphotie, All rights reserved.</small>
    </>
  );
}
