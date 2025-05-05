import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userId = sessionStorage.getItem('username');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const role = sessionStorage.getItem('roles');
  const [isAdmin, setIsAdmin] = useState(false);

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    setIsLoggedIn(true);
    setIsAdmin(role === 'admin');
  }, [userId, role]);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    console.log('User has logged out');
    sessionStorage.clear();
    window.location.href = '/login';
  };

  const toggleDrawer = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        sx={{ boxShadow: 'none', height: '57px', backgroundColor: '#3b3b3b' }}
      >
        <Toolbar
          sx={{
            minHeight: '64px',
            display: 'flex',
            justifyContent: 'space-between',
            px: 2,
            color: 'white',
          }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            <a
              className="text-white"
              href="/"
              style={{
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                color: 'white',
              }}
            >
              Guide Ink
            </a>
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', ml: 'auto' }}>
            <IconButton href="/" sx={{ color: 'white' }}>
              <HomeIcon sx={{ width: '28px', height: '28px', color: 'white' }} />
            </IconButton>

            {isLoggedIn ? (
              <IconButton
                onClick={handleMenuClick}
                sx={{ color: 'white' }}
              >
                <PersonIcon sx={{ width: '30px', height: '30px', color: 'white' }} />
              </IconButton>
            ) : (
              <Button
                variant="contained"
                color="primary"
                href="/login"
                sx={{
                  fontWeight: 'bold',
                  textTransform: 'none',
                  textDecoration: 'none',
                  color: 'white',
                  backgroundColor: 'black',
                  borderRadius: '20px',
                  padding: '6px 32px',
                  minWidth: '120px',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                  '&:hover': {
                    backgroundColor: '#001F5B',
                    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
                  },
                }}
              >
                Login
              </Button>
            )}

            <IconButton
              color="inherit"
              onClick={toggleDrawer}
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              <MenuIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
            sx={{
              '& .MuiMenu-paper': {
                borderRadius: '12px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            <MenuItem
              onClick={handleCloseMenu}
              component="a"
              href={isAdmin ? '/Profile' : '/AdminProfile'}
              sx={{
                borderRadius: '8px',
                '&:hover': { backgroundColor: '#f5f5f5' },
              }}
            >
              {isAdmin ? 'User Profile' : 'Profile'}
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleCloseMenu();
                handleLogout();
              }}
              sx={{
                borderRadius: '8px',
                '&:hover': { backgroundColor: '#f5f5f5' },
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={isMenuOpen} onClose={toggleDrawer}>
        <div style={{ width: 250 }}>
          <IconButton onClick={toggleDrawer} sx={{ justifyContent: 'flex-end' }}>
            <CloseIcon />
          </IconButton>
          <List>
            {!isLoggedIn ? (
              <ListItem button component="a" href="/login" sx={{ padding: '10px 16px' }}>
                <ListItemText primary="Login" />
              </ListItem>
            ) : (
              <ListItem
                button
                onClick={() => {
                  handleCloseMenu();
                  handleLogout();
                }}
                sx={{ padding: '10px 16px' }}
              >
                <ListItemText primary="Logout" />
              </ListItem>
            )}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
