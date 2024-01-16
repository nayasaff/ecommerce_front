
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import Product from "./Pages/Product";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/product/:productId" element={<Product/>} />
      </Routes>
    </Router>
  ); 
}

export default App;
