import React from "react";
import { Link as LinkRouter } from "react-router-dom";
// import { Title } from '../styles/StyleNavBar';
import { LogoAstroNFT, LogoText, NavBarAstroNFT, NavBarButtons, NavButton, NavIconButtons, DropdownSign, SignButton } from '../styles/StyleNavBar';
import { DropdownButton, SplitButton, ButtonGroup, Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import UserActions from '../redux/actions/UserActions';

const NavBar = (props) => {

  const Logout = () => {
    props.userLogout(props.user.user.email)
  }

  // console.log(props.user.user.email ?)
  return (
    <>
      <NavBarAstroNFT>
        <LogoAstroNFT>
          <LinkRouter to={"/home"}>
            <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="logo" />
          </LinkRouter>
          <LinkRouter to={"/home"}>
            <LogoText>AstroNFT</LogoText>
          </LinkRouter>
        </LogoAstroNFT>
        <NavBarButtons>
          <LinkRouter to={'/home'}>
            <NavButton>
              Home
            </NavButton>
          </LinkRouter>
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
            <LinkRouter to={'/products'}>
              <img src={process.env.PUBLIC_URL + '/assets/shopping-cart.jpg'} />
            </LinkRouter>
            <DropdownSign>
              <DropdownButton id="dropdown-button-drop"
                title={props.user ?
                  props.user.user ?
                    <img style={{ height: '3rem', width: '3rem', borderRadius: '3rem' }} src={props.user.user.image} /> :
                    <img src={process.env.PUBLIC_URL + '/assets/user.jpg'} /> :
                  <img src={process.env.PUBLIC_URL + '/assets/user.jpg'} />}>
                {props.user.user ? <Dropdown.Item> <SignButton onClick={Logout}>Log Out</SignButton></Dropdown.Item> :
                  <><Dropdown.Item><LinkRouter to={'/signin'}> <SignButton>Sign In</SignButton> </LinkRouter></Dropdown.Item>
                    <Dropdown.Item><LinkRouter to={'/signup'}> <SignButton>Sign Up</SignButton> </LinkRouter></Dropdown.Item></>
                }

              </DropdownButton>
            </DropdownSign>
          </NavIconButtons>
        </NavBarButtons>
      </NavBarAstroNFT>


    </>
  );
}
const mapDispatchToProps = {
  userLogout: UserActions.userLogout,
}
const mapStateToProps = (state) => {
  return {
    user: state.UserReducer.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

