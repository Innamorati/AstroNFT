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
  NavButton,
} from "../styles/StyleNavBar";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import UserActions from "../redux/actions/UserActions";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});
const NavBar = (props) => {
  const Logout = () => {
    props.userLogout(props.user.user.email);
  };
  // const primary = red[500];

  console.log(props.user);
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
            <NavButton>Home</NavButton>
          </LinkRouter>
          <LinkRouter to={"/products"}>
            <NavButton>Products</NavButton>
          </LinkRouter>
          <LinkRouter to={"/contact"}>
            <NavButton>Contact</NavButton>
          </LinkRouter>
          {props.user.user?.admin === true ? (
            <>
              <LinkRouter to={"/admin"}>
                <NavButton activeClassName="any">Admin</NavButton>
              </LinkRouter>
              <LinkRouter to={"/wallet"}>
                <NavButton activeClassName="any">Wallet</NavButton>
              </LinkRouter>
            </>
          ) : (
            ""
          )}
          <NavIconButtons>
            <LinkRouter to={"/basket"}>
              <Badge
                anchorOrigin={{ vertical: "top", horizontal: "left" }}
                badgeContent={
                  props.user?.user ? props.user?.user?.basket?.length : 0
                }
                color="primary"
                showZero
              >
                <ShoppingCartIcon style={{ color: "black" }} />
              </Badge>
            </LinkRouter>
            <DropdownSign>
              <DropdownButton
                id="dropdown-button-drop"
                title={
                  props.user?.user ? (
                    <img
                      style={{
                        height: "3rem",
                        width: "3rem",
                        borderRadius: "3rem",
                      }}
                      src={props.user.user.image}
                    />
                  ) : (
                    <AccountCircleIcon
                      style={{
                        height: "3rem",
                        width: "3rem",
                        color: "lightgray",
                      }}
                    />
                  )
                }
              >
                {props.user.user ? (
                  <Dropdown.Item>
                    <SignButton onClick={Logout}>Logout</SignButton>
                  </Dropdown.Item>
                ) : (
                  <>
                    <Dropdown.Item>
                      <LinkRouter to={"/signin"}>
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
