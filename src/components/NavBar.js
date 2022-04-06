import React from 'react'
import { Link as LinkRouter } from 'react-router-dom';
// import { Title } from '../styles/StyleNavBar';
import { LogoAstroNFT, LogoText, NavBarAstroNFT, NavBarButtons, NavButton, NavIconButtons, DropdownSign } from '../styles/StyleNavBar';
import { DropdownButton, SplitButton, ButtonGroup, Dropdown } from 'react-bootstrap';

const NavBar = () => {

  return (
    <>
      <NavBarAstroNFT>
        <LogoAstroNFT>
          <LinkRouter to={'/home'}>
            <img src={process.env.PUBLIC_URL + '/assets/logo.jpg'} alt='logo' />
          </LinkRouter>
          <LinkRouter to={'/home'}>
            <LogoText>AstroNFT</LogoText>
          </LinkRouter>
        </LogoAstroNFT>
        {/* <Title>hola me llamo franco</Title> */}
        <NavBarButtons>
          <LinkRouter to={'/products'}>
            <NavButton>
              Products
            </NavButton>
          </LinkRouter>
          <LinkRouter to={'/contact'}>
            <NavButton>
              Contact
            </NavButton>
          </LinkRouter>
          <NavIconButtons>
            <LinkRouter to={'/products'}><img src={process.env.PUBLIC_URL + '/assets/shopping-cart.jpg'} /></LinkRouter>
            <DropdownSign>
              <DropdownButton id="dropdown-button-drop" title={<img src={process.env.PUBLIC_URL + '/assets/user.jpg'} />} >
                <Dropdown.Item> <LinkRouter to={'/signin'}>Sign In</LinkRouter> </Dropdown.Item>
                <Dropdown.Item> <LinkRouter to={'/signup'}>Sign Up</LinkRouter> </Dropdown.Item>
              </DropdownButton>
            </DropdownSign>
          </NavIconButtons>
        </NavBarButtons>
      </NavBarAstroNFT>


    </>
  );
}

export default NavBar;
