import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VerifyHuman = () => {
  const Termsandcond = () => toast("Welcome to Naphotie!");
  return (
    <div>
      <h1>Verify you're human</h1>
      <p>Please complete the captcha or verification process.</p>
      <label>
        <input onClick={Termsandcond} type="checkbox" />I agree to the terms and
        conditions
      </label>
      <ToastContainer />
    </div>
  );
};

export default VerifyHuman;
