import ofcalogo from '../img/hamburgermenu.svg'
// import {
//   AppBar, Toolbar, Typography, Button, Container,
//   CssBaseline, Grid, Box,
//   IconButton, Drawer, List, ListItem, ListItemText
// } from '@mui/material';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import './TopMenu.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';

function TopMenu() {

  const handleMyTask = () => {
    // Logic for My Task
    console.log("My Task clicked");
  };

  const handleMyNotification = () => {
    // Logic for My Notification
    console.log("My Notification clicked");
  };

  const handleLogin = () => {
    // Logic for Logout
    console.log("Logout clicked");
  };

  const handleLogout = () => {
    // Logic for Logout
    console.log("Logout clicked");
  };

  return (

    <header>
      <ThemeProvider theme={theme}>
        <AppBar className="AppBar" position="static" color="primary">
          <Toolbar>
            {/* <grid-container-first> */}
            <grid-item-type11>
              {/* <span >==</span> */}
              <img className="ofcalogo" src={ofcalogo} />
            </grid-item-type11>
            {/* </grid-container-first> */}

            <grid-item-type12>
              <div><p className='name1' >Office Communication Authority</p></div>
              <div><p className='name2' >CBS Admin Portal</p></div>
            </grid-item-type12>

            <grid-item-type13>
              <Button className='name3' color="inherit" onClick={handleMyTask}>
                My Task
              </Button>
              <Button className='name4' color="inherit" onClick={handleMyNotification}>
                My Notification
              </Button>
              <Button className='name5' color="inherit" onClick={handleLogout}>
                Login
              </Button>
              <Button className='name5' color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </grid-item-type13>


          </Toolbar>
        </AppBar>

      </ThemeProvider>
    </header>
  )
}
export default TopMenu;      