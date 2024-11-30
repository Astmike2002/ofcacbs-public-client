// src/Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleIconClick = () => {
    navigate('/login'); // Navigate to login page
  };

  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <h2>Navigation</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ cursor: 'pointer' }} onClick={handleIconClick}>
          <img
            src="https://iconarchive.com/download/i84991/Material-Icons/Hand-Pointing-Right-icon.ico" // Hand icon URL
            alt="Hand Icon"
            style={{ width: '25px', marginRight: '5px', verticalAlign: 'middle' }}
          />
          Go to Login
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;