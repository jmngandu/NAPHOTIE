import { Form, Link } from "react-router-dom";
import { useState } from "react";
import VerifyHuman from "./VerifyHuman";

export default function Login() {
  return (
    <>
      <div className="login-page">
        <h3>Sign in to NAPHOTIE</h3>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <VerifyHuman />

          <button type="submit">
            <Link to="/Home">Sign in</Link>
          </button>
          <p>
            <Link>create account</Link>
          </p>
        </form>
      </div>
    </>
  );
}
