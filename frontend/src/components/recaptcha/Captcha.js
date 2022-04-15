import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const RecaptchaComponent = ({ handleRecapthca }) => {
  return (
    <ReCAPTCHA
      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
      onChange={handleRecapthca}
      theme="dark"
    />
  );
};

export default RecaptchaComponent;
