import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeComponent from "./Component/HomeComponent";
import AboutComponent from "./Component/AboutComponent";
import ContactComponent from "./Component/ContactComponent";
import SignIn from "./Component/SignIn";
import SignUp from "./Component/SignUp";
import Header from "./Component/Header";
import Product from "./Component/Product";
import ProductDetail from "./Component/ProductDetail";
import ProfileComponent from "./Component/ProfileComponent";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/profile" element={<ProfileComponent />}>
            <Route index element={<h1>Profile</h1>} />
            <Route path="edit" element={<h1>Edit profile</h1>} />
            <Route path="course" element={<h1>Course profile</h1>} />
            <Route path="setting" element={<h1>Setting profile</h1>} />
          </Route>
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productID" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
