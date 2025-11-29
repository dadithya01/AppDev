import './App.css'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import Fab from '@mui/material/Fab';
import LightModeIcon from '@mui/icons-material/LightMode';

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
        <div >
          <Fab color="info" aria-label="toggle dark mode" onClick={toggleTheme} style={{ position: 'fixed', bottom: '20px', left: '20px' }}>
            <LightModeIcon />
          </Fab>
          <h1>This app is using the dark mode</h1>
        </div>
      </ThemeProvider>
      
    </>
  )
}

export default App
