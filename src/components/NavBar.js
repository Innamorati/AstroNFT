import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import {
  LogoAstroNFT,
  LogoText,
  NavBarAstroNFT,
  NavBarButtons,
  NavIconButtons,
  DropdownSign,
  SignButton,
  NavButton
} from "../styles/StyleNavBar";
import {
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { connect } from "react-redux";
import UserActions from "../redux/actions/UserActions";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const NavBar = (props) => {
  const Logout = () => {
    props.userLogout(props.user.user.email);
  };


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
          <LinkRouter to={"/home"}>
            <NavButton >Home</NavButton>
          </LinkRouter>
          <LinkRouter to={"/products"}>
            <NavButton >Products</NavButton>
          </LinkRouter>
          <LinkRouter to={"/contact"}>
            <NavButton >Contact</NavButton>
          </LinkRouter>
          {props.user.user?.admin === true ?
            <LinkRouter to={'/admin'}>
              <NavButton activeClassName="any">
                admin page
              </NavButton>
            </LinkRouter> : ""}
          <NavIconButtons>
            <LinkRouter to={"/basket"}>
              <ShoppingCartIcon style={{ color: "black" }} />
            </LinkRouter>
            <DropdownSign>
              <DropdownButton
                id="dropdown-button-drop"
                title={
                  props.user?.user ?
                    <img style={{ height: "3rem", width: "3rem", borderRadius: "3rem", }} src={props.user.user.image} />
                    :
                    <AccountCircleIcon style={{ height: "3rem", width: "3rem", color: "lightgray" }} />
                  // <img src={process.env.PUBLIC_URL + "/assets/user.jpg"} />

                }
              >
                {props.user.user ? (
                  <Dropdown.Item>
                    {" "}
                    <SignButton onClick={Logout}>Logout</SignButton>
                  </Dropdown.Item>
                ) : (
                  <>
                    <Dropdown.Item>
                      <LinkRouter to={"/signin"}>
                        {" "}
                        <SignButton>Sign In</SignButton>{" "}
                      </LinkRouter>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <LinkRouter to={"/signup"}>
                        {" "}
                        <SignButton>Sign Up</SignButton>{" "}
                      </LinkRouter>
                    </Dropdown.Item>
                  </>
                )}
              </DropdownButton>
            </DropdownSign>
          </NavIconButtons>
        </NavBarButtons>
      </NavBarAstroNFT>
    </>
  );
};
const mapDispatchToProps = {
  userLogout: UserActions.userLogout,
};
const mapStateToProps = (state) => {
  return {
    user: state.UserReducer.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
