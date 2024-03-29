import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedin } from '../Redux/Slice/authSlice';



function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [loggedIn, setLoggedIn] = React.useState(!!localStorage.getItem("token"));
  const navigate=useNavigate()
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const isloggedin=useSelector(isLoggedin)
  const token=localStorage.getItem("token")

  const handlelogout=()=>{
    localStorage.removeItem("token")
    navigate("/")
  }

const loggedinUser=localStorage.getItem("loggedinUser")
  return (
    
    <AppBar position="sticky" sx={{ backgroundColor: '#0f0617',marginBottom:"10px",width: '100vw'}} >
      <Container   >
        <Toolbar disableGutters>
    <Link to='/'>
    
    MovieApp
          
    </Link>
          

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
          <Link to='/user/register'>

              <MenuItem  onClick={handleCloseNavMenu}>
                          <Typography textAlign="center">Register</Typography>
                      </MenuItem>
          </Link>

             
            </Menu>
          </Box>
          
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>


            {
              !token?
              <Link to='user/register'>
           
              <Button
                  
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  register
                  
                </Button>
            
            </Link>
            :
            ""
            }
         
             
         
          </Box>


{
  token ?
  <Box sx={{ flexGrow: 0 }}>
  <Tooltip title="Open settings">
    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
      <Avatar alt={loggedinUser} src="/static/images/avatar/2.jpg" />
    </IconButton>
  </Tooltip>
  <Menu
    sx={{ mt: '45px' }}
    id="menu-appbar"
    anchorEl={anchorElUser}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={Boolean(anchorElUser)}
    onClose={handleCloseUserMenu}
  >

<Link to='/account'>
<MenuItem  onClick={handleCloseUserMenu}>
        <Typography textAlign="center">Account</Typography>
      </MenuItem>
</Link>

      <MenuItem >
     
        <Typography textAlign="center" onClick={handlelogout}>Logout</Typography>
      </MenuItem>
  </Menu>
</Box>
:
""
}
         
          
        </Toolbar>
      </Container>
    </AppBar>
  
  );
}
export default Navbar;