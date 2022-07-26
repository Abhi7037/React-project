import React from "react";
import Header from "./shared/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./shared/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Rent from "./components/Product/Rent";
import Purchase from "./components/Product/Purchase";
import Admin from "./components/Admin";
import AddProperty from "./components/AddProperty";
import EditProperty from "./components/EditProperty";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Rent" element={<Rent/>} />
        <Route path="/Purchase" element={<Purchase/>} />
        <Route path="/Admin" element={<Admin/>} />
        <Route path="/AddProperty" element={<AddProperty/>} />
        <Route path="/EditProperty" element={<EditProperty/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
