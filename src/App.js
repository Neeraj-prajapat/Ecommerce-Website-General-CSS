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
import Login from "./Component/Login";
import Register from "./Component/Register";
import AdminLayouts from "./Component/Layouts/AdminLayouts";
import AdminUsers from "./Component/Layouts/AdminUsers";
import AdminContacts from "./Component/Layouts/AdminContacts";
import AdminUpdate from "./Component/Layouts/AdminUpdate";
import Unauthorized from "./Component/Layouts/Unauthorized";





export default function App() {



  return (
      <BrowserRouter>
        <Navbar />
        <Routes>``
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/admin" element= {<AdminLayouts/>}>
            <Route path="users" element= {<AdminUsers/>}/>
            <Route path="contacts" element= {<AdminContacts/>}/>
            <Route path="/admin/users/:id/edit" element= {<AdminUpdate/>}/>
          </Route>
          <Route path="/unauthorized" element={<Unauthorized />} />                {/* Unauthorized page route */}
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}



