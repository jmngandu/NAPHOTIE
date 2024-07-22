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
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>

          <VerifyHuman />

          <button onClick={welcomeM} id="log-btn" type="submit">
            <Link to="/Home">Sign in</Link>
          </button>
          <ToastContainer />

          <p>
            <Link to="Signup">create account</Link>
          </p>
        </form>
      </div>
    </>
  );
}
