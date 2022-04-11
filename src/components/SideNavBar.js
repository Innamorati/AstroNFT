import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import {VerticalNavBar, LogoAstroNFTResponsive, LogoText, SideNav, ShoppingCart, SideNavButton, ResponsiveNavButtons, SideNavButtonSign} from '../styles/StyleNavBar';
import { Navbar, Offcanvas, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuIcon from '@mui/icons-material/Menu';

/* import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout'; */

const SideNavBar = () => {

  /* const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 */
return(

  <SideNav>
  <LogoAstroNFTResponsive>
  <LinkRouter to={'/home'}>
      <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="logo" />
  </LinkRouter>
  <LinkRouter to={'/home'}>
      <LogoText>AstroNFT</LogoText>
  </LinkRouter>
  </LogoAstroNFTResponsive>
  <ShoppingCart>
    <LinkRouter to={'/cart'}><img src={process.env.PUBLIC_URL+'/assets/shopping-cart.jpg'}/></LinkRouter>
  </ShoppingCart>
    <VerticalNavBar>
    <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
      style={{width: '50%', height: '50vh', borderRadius: '20px 0 20px 20px'}}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel"><img src={process.env.PUBLIC_URL+'/assets/logo.png'} alt='logo'/> AstroNFT</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <ResponsiveNavButtons>
          <LinkRouter to={'/home'}> <SideNavButton>Home</SideNavButton> </LinkRouter> 
          <LinkRouter to={'/products'}> <SideNavButton>Products</SideNavButton> </LinkRouter> 
          <LinkRouter to={'/contact'}> <SideNavButton>Contact</SideNavButton> </LinkRouter>
          <SideNavButton>
            <NavDropdown title={<img src={process.env.PUBLIC_URL+'/assets/user.jpg'}/>} id="offcanvasNavbarDropdown">
              <NavDropdown.Item> <LinkRouter to={'/signin'}> <SideNavButtonSign>Sign In</SideNavButtonSign> </LinkRouter> </NavDropdown.Item>
              <NavDropdown.Item> <LinkRouter to={'/signup'}> <SideNavButtonSign>Sign Up</SideNavButtonSign> </LinkRouter> </NavDropdown.Item>
            </NavDropdown>
          </SideNavButton>
          </ResponsiveNavButtons>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
</VerticalNavBar>
</SideNav> );

}
export default SideNavBar;
  {/* <>
  <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
  <LogoAstroNFTResponsive>
  <LinkRouter to={'/home'}>
      <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="logo" />
  </LinkRouter>
  <LinkRouter to={'/home'}>
      <LogoText>AstroNFT</LogoText>
  </LinkRouter>
  </LogoAstroNFTResponsive>
  <ShoppingCart>
    <LinkRouter to={'/cart'}><img src={process.env.PUBLIC_URL+'/assets/shopping-cart.jpg'}/></LinkRouter>
  </ShoppingCart>
  <Tooltip title="Account settings">
    <IconButton
      onClick={handleClick}
      size="small"
      sx={{ ml: 2 }}
      aria-controls={open ? 'account-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
    >
      <MenuIcon sx={{ width: 45, height: 35, color: '#494949', border: '2px solid #494949', borderRadius: '10px' }}/>
    </IconButton>
  </Tooltip>
</Box>
<Menu
  anchorEl={anchorEl}
  id="account-menu"
  open={open}
  onClose={handleClose}
  onClick={handleClose}
  PaperProps={{
    elevation: 0,
    sx: {
      overflow: 'visible',
      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
      mt: 1.5,
      '& .MuiAvatar-root': {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1,
      },
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        bgcolor: 'background.paper',
        transform: 'translateY(-50%) rotate(45deg)',
        zIndex: 0,
      },
    },
  }}
  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
>
<ResponsiveNavButtons>
  <MenuItem>
    <LinkRouter to={'/home'}> <SideNavButton>Home</SideNavButton> </LinkRouter> 
  </MenuItem>
  <MenuItem>
    <LinkRouter to={'/products'}> <SideNavButton>Products</SideNavButton> </LinkRouter> 
  </MenuItem>
  <MenuItem>
    <LinkRouter to={'/contact'}> <SideNavButton>Contact</SideNavButton> </LinkRouter>
  </MenuItem>
  <Divider />
  <MenuItem>
    <ListItemIcon>
      <PersonAdd fontSize="small" />
    </ListItemIcon>
    Add another account
  </MenuItem>
  <MenuItem>
    <ListItemIcon>
      <Settings fontSize="small" />
    </ListItemIcon>
    Settings
  </MenuItem>
  <MenuItem>
    <ListItemIcon>
      <Logout fontSize="small" />
    </ListItemIcon>
    Logout
  </MenuItem>
  </ResponsiveNavButtons>
</Menu> */}

/* </> */
 /*  <SideNav>
  <LogoAstroNFTResponsive>
  <LinkRouter to={'/home'}>
      <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="logo" />
  </LinkRouter>
  <LinkRouter to={'/home'}>
      <LogoText>AstroNFT</LogoText>
  </LinkRouter>
  </LogoAstroNFTResponsive>
  <ShoppingCart>
    <LinkRouter to={'/cart'}><img src={process.env.PUBLIC_URL+'/assets/shopping-cart.jpg'}/></LinkRouter>
  </ShoppingCart>
    <VerticalNavBar>
    <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel"><img src={process.env.PUBLIC_URL+'/assets/logo.png'} alt='logo'/> AstroNFT</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <ResponsiveNavButtons>
          <LinkRouter to={'/home'}> <SideNavButton>Home</SideNavButton> </LinkRouter> 
          <LinkRouter to={'/products'}> <SideNavButton>Products</SideNavButton> </LinkRouter> 
          <LinkRouter to={'/contact'}> <SideNavButton>Contact</SideNavButton> </LinkRouter>
          <SideNavButton>
            <NavDropdown title={<img src={process.env.PUBLIC_URL+'/assets/user.jpg'}/>} id="offcanvasNavbarDropdown">
              <NavDropdown.Item> <LinkRouter to={'/signin'}> <SideNavButtonSign>Sign In</SideNavButtonSign> </LinkRouter> </NavDropdown.Item>
              <NavDropdown.Item> <LinkRouter to={'/signup'}> <SideNavButtonSign>Sign Up</SideNavButtonSign> </LinkRouter> </NavDropdown.Item>
            </NavDropdown>
          </SideNavButton>
          </ResponsiveNavButtons>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
</VerticalNavBar>
</SideNav> */
/* );
}
export default SideNavBar; */

/*


export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

 */