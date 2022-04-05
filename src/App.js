import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from "./pages/Contact";
import SideNavBar from "./components/SideNavBar";

function App() {
  return (
    <BrowserRouter>

      <NavBar />
      <SideNavBar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
