// src/Theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
       main: '#C9C9C9' 
      //  rgba(201, 201, 201, 1);
      //  '#333', // Custom primary color 4caf50
      
    },
    secondary: {
      main: '#ff4081', // Custom secondary color (optional)
    },
  },
});

export default theme;