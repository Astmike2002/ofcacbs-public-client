// src/LoginComponent.js
import React, { useState, useEffect } from 'react';

const LoginCom = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captchaImage, setCaptchaImage] = useState('');
  const [captchaValue, setCaptchaValue] = useState('');

  // Function to fetch CAPTCHA image via POST request
  const fetchCaptchaImage = async () => {
    try {
      const response = await fetch('https://dev-nexify.esspa.edb.gov.hk/api_endpoint/esspa/rest/captcha/getCaptchaImage', {
        method: 'POST', // Set method to 'POST'
        headers: {
          'Content-Type': 'application/json' // Set content type to application/json
        },
        // include body data if required by the endpoint; adjust accordingly
        // body: JSON.stringify({
        //   // Example of body content; adjust according to your API specifications
        //   param1: 'value1', // Example parameter
        //   param2: 'value2'  // Another example parameter
        // })
      });

      if (response.ok) {
        const data = await response.json(); // Assuming the response contains JSON data
        setCaptchaImage("data:image/png;base64,".concat(data.result)); // Adjust according to the response structure
      } else {
        console.error('Failed to fetch CAPTCHA image:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching CAPTCHA image:', error);
    }
  };

  // Fetch the CAPTCHA image when the component mounts
  useEffect(() => {
    fetchCaptchaImage();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle your login logic here, potentially checking the CAPTCHA value
    alert(`Logged in with username: ${username}, CAPTCHA value: ${captchaValue}`);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <img src={captchaImage} alt="CAPTCHA" style={{ marginBottom: '10px' }} />
          <div>
            <label htmlFor="captcha">Enter CAPTCHA:</label>
            <input
              type="text"
              id="captcha"
              name="captcha"
              value={captchaValue}
              onChange={(e) => setCaptchaValue(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginCom;