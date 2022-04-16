import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import SideNavBar from "./components/SideNavBar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import CustomizedSnackbars from "./components/SnackBar";
import { connect } from "react-redux";
import UserActions from "./redux/actions/UserActions";
import React, { useEffect } from "react";
// import DetailsProducts from "./pages/DetailsProducts";
import Details from "./pages/Details";
import Admin from "./pages/Admin";
import WalletUser from "./pages/WalletUser";
import Footer from './components/Footer';

function App(props) {
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      const token = localStorage.getItem("token");
      props.verifiedToken(token);
    }
  }, []);
  return (
    <BrowserRouter>
      <NavBar />
      <SideNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/basket" element={<Cart />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/wallet" element={<WalletUser />} />
      </Routes>
      <Footer />
      <CustomizedSnackbars />
    </BrowserRouter>
  );
}

const mapDispatchToProps = {
  verifiedToken: UserActions.verifiedToken,
};
const mapStateToProps = (state) => {
  return {
    user: state.UserReducer.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
