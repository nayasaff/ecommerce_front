
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import { Navigate } from "react-router-dom";
import Orders from "./Pages/Orders";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace={true} />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/product/:productId" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/orders" element={<Orders/>}/>
      </Routes>
    </Router>
  ); 
}

export default App;
