import './App.css'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import Fab from '@mui/material/Fab';
import LightModeIcon from '@mui/icons-material/LightMode';
import AppBarDrawer from '../Components/AppBarDrawer/AppBarDrawer';

function App() {

  const [mode, setMode] = useState(true);

  const toggleTheme = () => {
    setMode(prevMode => !prevMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: mode ? 'dark' : 'light',
    },
  });

  return (
    <>

    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div style={{ marginTop: '70px', marginLeft: '20px', marginRight: '20px' }}>
          <Fab color="info" aria-label="toggle dark mode" onClick={toggleTheme} style={{ position: 'fixed', bottom: '20px', left: '20px' }}>
            <LightModeIcon />
          </Fab>
        </div>

        <AppBarDrawer />

        <h1>Hello</h1>
        
      </ThemeProvider>

    </>
  )
}

export default App
