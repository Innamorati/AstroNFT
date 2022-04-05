import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import {VerticalNavBar, LogoAstroNFTResponsive, LogoText, SideNav, NavButton} from '../styles/StyleNavBar';
import { Navbar, Offcanvas, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuIcon from '@mui/icons-material/Menu';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const SideNavBar = () => {
return(
  <SideNav>
  <LogoAstroNFTResponsive>
  <LinkRouter to={'/home'}>
      <img src={process.env.PUBLIC_URL+'/assets/logo.jpg'} alt='logo'/>
  </LinkRouter>
  <LinkRouter to={'/home'}>
      <LogoText>AstroNFT</LogoText>
  </LinkRouter>
</LogoAstroNFTResponsive>
    <VerticalNavBar>
    <Navbar bg="light" expand={false}>
  <Container fluid>
    {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel"><img src={process.env.PUBLIC_URL+'/assets/logo.jpg'} alt='logo'/> AstroNFT</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <NavButton> <LinkRouter to={'/home'} >Home</LinkRouter> </NavButton>
          <NavButton> <LinkRouter to={'/products'} >Products</LinkRouter> </NavButton>
          <NavButton> <LinkRouter to={'/contact'} >Contact</LinkRouter> </NavButton>
          <NavButton>
            <NavDropdown title={<img src={process.env.PUBLIC_URL+'/assets/user.jpg'}/>} id="offcanvasNavbarDropdown">
              <NavDropdown.Item> <LinkRouter to={'/signin'}>Sign In</LinkRouter> </NavDropdown.Item>
              <NavDropdown.Item> <LinkRouter to={'/signup'}>Sign Up</LinkRouter> </NavDropdown.Item>
            </NavDropdown>
          </NavButton>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
</VerticalNavBar>
</SideNav>
);
}
export default SideNavBar;

