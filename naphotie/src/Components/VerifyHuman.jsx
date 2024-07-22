import React from "react";
import { useState } from "react";

const VerifyHuman = () => {
  return (
    <div>
      <h1>Verify you're human</h1>
      <p>Please complete the captcha or verification process.</p>
      <label>
        <input type="checkbox" />I agree to the terms and conditions
      </label>
    </div>
  );
};

export default VerifyHuman;
