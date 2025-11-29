import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;

function AppBarDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h5" sx={{ my: 2 }} color="info" fontWeight={'bold'}>
            AppDev
        </Typography>
        <Divider />
        <List >
            <ListItemButton>
                <ListItemText primary="Home" primaryTypographyProps={{ color: 'info' }} />
            </ListItemButton>
            <ListItemButton>
                <ListItemText primary="About" primaryTypographyProps={{ color: 'info' }} />
            </ListItemButton>
            <ListItemButton>
                <ListItemText primary="Contact" primaryTypographyProps={{ color: 'info' }} />
            </ListItemButton>
        </List>
    </Box>
);

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" style={{ backgroundColor: 'transparent' ,backdropFilter: 'blur(10px)'}}>
        <Toolbar>
          <IconButton
            color="info"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
          color='info'
            variant="h5"
            component="div"
            fontWeight={'bold'}
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            AppDev
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button color="info" >
              Home
            </Button>
            <Button color="info" >
              About
            </Button>
            <Button color="info" >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

AppBarDrawer.propTypes = {
  window: PropTypes.func,
};

export default AppBarDrawer;
