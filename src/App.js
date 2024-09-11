import "./App.css";
import React from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Cart from "./Component/Cart";
import Products from "./Component/Products";
import ErrorPage from "./Component/ErrorPage";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Component/Footer";
import SingleProduct from "./Component/SingleProduct";





export default function App() {



  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}
