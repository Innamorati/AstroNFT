import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from './pages/Home'
import Products from './pages/Products'

function App() {
  return (
  <BrowserRouter>

  <NavBar/>

  <Routes>
  <Route path="/home" element={<Home/>}/>
  <Route path="/products" element={<Products/>}/>
  </Routes>


  </BrowserRouter>
  );
}

export default App;
