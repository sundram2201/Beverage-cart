import React from "react";
import Home from "./Home";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";

const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='cart' element={<Cart />} />
            <Route />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
};

export default App;
