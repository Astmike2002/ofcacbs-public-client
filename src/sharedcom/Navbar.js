// src/Navbar.js
import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaHome, FaSearch} from 'react-icons/fa'; // Icons
import { MdOutlineSettings } from "react-icons/md";
// import { ThemeProvider, createTheme } from '@mui/material/styles';

// const theme = createTheme({
//     palette: {
//       primary: {
//         main: 'rgba(201, 201, 201, 1)', // Your primary color
//       },
//       secondary: {
//         main: '#dc004e', // Your secondary color
//       },
//     },
//   });


const CustomNavbar = () => {
  
  const [activeIndex, setActiveIndex] = useState(null);
  const handleIconClick = (index) => {
    // setActiveIndex(activeIndex === index ? null : index); // Toggle the active index
    // navigate('/login'); // Navigate to login page
    
  };

  return (
    <Navbar bg="seconary" expand="false" > 
      <Container>
        {/* <Navbar.Brand href="#home">MyApp</Navbar.Brand> */}
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleIconClick(0)}>
              <FaHome />
              {activeIndex === 0 && <span className="ms-1">Home</span>}
            </Nav.Link>
            <Nav.Link onClick={() => handleIconClick(1)}>
              <FaSearch />
              {activeIndex === 1 && <span className="ms-1">Search</span>}
            </Nav.Link>
            <Nav.Link onClick={() => handleIconClick(2)}>
              <MdOutlineSettings />
              {activeIndex === 2 && <span className="ms-1">Create Application</span>}
            </Nav.Link>
          </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;