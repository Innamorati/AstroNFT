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
import Error404 from "./pages/Error404";
import Details from "./pages/Details";
import Admin from './pages/Admin';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <SideNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details" element={<Details />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <CustomizedSnackbars />
    </BrowserRouter>
  );
}

export default App;
