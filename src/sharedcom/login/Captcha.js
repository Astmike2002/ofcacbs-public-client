import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Captcha = () => {
  // { onSubmit }) => {
  // const [captchaValue, setCaptchaValue] = useState(null);
  // const RECAPTCHA_SITE_KEY = 'YOUR_SITE_KEY'; // Replace with your site key.

  // const handleCaptchaChange = (value) => {
  //   setCaptchaValue(value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (captchaValue) {
  //     onSubmit(captchaValue); // Passes captcha value to parent component
  //   }
  // };

  return (
    // <form onSubmit={handleSubmit}>
    //   <h2>Verify you are human</h2>
       <ReCAPTCHA
        // sitekey={RECAPTCHA_SITE_KEY}
        // onChange={handleCaptchaChange}
      />
    //   <button type="submit" disabled={!captchaValue}>Submit</button>
    // </form>
  );
};

export default Captcha;