import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link, useLocation } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications'
import { useNavigate } from 'react-router-dom';

import './Navbar.css'
import '../../pages/Mobiliser/Mobiliser.css'

const pages = [{page:'Home', path:''}, {page:'About Us', path:'about'},{page: 'Services', path:'services'},  {page:'Contant Us',path:'contact'},];

export default function Navbar() {
  const navigate = useNavigate();
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);;
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
 


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownVisible(!profileDropdownVisible);
  };
  const logout = () => {
    navigate('/login-user')
  };



  const handleNavRightItems = () => {
    if(location.pathname === '/'){
      return (
        <Box sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 'auto' }}>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems:'center ' }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                component={Link}
                to={page.page === 'Home' ? '/' : `/${page.path}`}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  display: 'block',
                  textTransform: 'initial',
                  fontFamily: 'Roboto',
                  fontWeight:  location.pathname === (page.page === 'Home' ? '/' : `/${page.path}`) ? 'bold' : 500,
                  color:'#000'
                }}
              >
                {page.page}
              </Button>
            ))}
            <Button component={Link} to = '/login-user' variant='contained' size='small' sx={{fontFamily:'Roboto',textTransform:'initial'}}
            >
              Login
            </Button>
          </Box>
        </Box>
      )
    }

    else if (location.pathname === '/mobiliser' || location.pathname === '/leader'){
      return(
        <div className="navvbar-buttons">
        <div className='icons-container'>
          <NotificationsIcon/>
          <PersonIcon onClick={toggleProfileDropdown} sx={{cursor:'pointer'}}/> 
        </div>
        {profileDropdownVisible && (
          <div className="profile-dropdown">
            <ul>
              <li>My Profile</li>
              <li onClick={logout}>Logout</li>
            </ul>
          </div>
        )}
      </div>
      )
    }
    else{
      return(
       <></>
      )
    }
  }

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#fff', paddingTop:'3px', paddingBottom:'6px',boxShadow: '0px 0px 0px 0px #bfbfbf', color: '#000' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography>
            <img src='https://sgrsgroup.com/wp-content/uploads/2023/06/1200x300px.png' className='logo-sm'/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.page} onClick={handleCloseNavMenu} component={Link} to={page.page === 'Home' ? '/' : `/${page.path}`}>
                  <Typography textAlign="center" style={{ textTransform: 'initial' }}>{page.page}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseNavMenu} component={Link} to='/login-user'>
                  <Typography textAlign="center" style={{ textTransform: 'initial' }}>Sign In</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Typography sx={{flexGrow: 1, }} >
            <img src='https://sgrsgroup.com/wp-content/uploads/2023/06/1200x300px.png' className='logo-image'/>
          </Typography>
         {handleNavRightItems()}
        </Toolbar>
      </Container>
    </AppBar>
)
 }
