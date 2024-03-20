import * as React from 'react';
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
import logo from '../../images/logo2.png'
import './Header.css'

const pages = [{page:'Home', path:''}, {page:'About Us', path:'about'},{page: 'Services', path:'services'},  {page:'Contant Us',path:'contact'},];

export default function Header() {
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#fff', paddingTop:'3px', paddingBottom:'6px',boxShadow: '0px 1px 5px 0px #bfbfbf', color: '#000' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 'bold',
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              lineHeight: 1,
              fontStyle: 'italic'

            }}
          >
            <span style={{ color: '#ffffff', height:'40px', padding:'5px 5px 0px 5px',fontWeight: 800, backgroundColor: '#1a2e35',  fontStyle: 'normal', fontSize:'32px', borderRadius:'2px',textAlign:'center' }}>SGRS Academics </span>
            
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
          <img src={logo} className='logo-sm' alt="Company Logo" />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              color: 'inherit',
              letterSpacing: '.1rem',
              fontStyle: 'italic',
              textDecoration: 'none',
              lineHeight: 1
            }}
          >
            <span style={{ color: '#ffffff', fontSize:'28px', borderRadius:'2px', fontWeight: 800, backgroundColor: '#1a2e35', padding: '5px 5px 5px 5px', fontStyle: 'normal', marginRight: '4px' }}>SGRS Academics</span>
          </Typography>
        
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
                Sign In
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

  );
}
