import React from 'react';
import { Link } from 'react-router-dom';
import {VerticalNavBar} from '../styles/StyleNavBar';
import { Navbar, Offcanvas, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SideNavBar = () => {
return(
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
        <Offcanvas.Title id="offcanvasNavbarLabel">AstroNFT</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Products</Nav.Link>
          <Nav.Link href="#action2">Contact</Nav.Link>
          <NavDropdown title={<img src={process.env.PUBLIC_URL+'/assets/user.jpg'}/>} id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Sign In</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Sign Up</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
</VerticalNavBar>
);
}
export default SideNavBar;

