import React, { useState, useEffect } from "react";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Components/Layout/RootLayout.jsx";
import Home from "./Pages/Home.jsx";
import NewArrivals from "./Pages/NewArrivals.jsx";
import Mens from "./Pages/Mens.jsx";
import Womens from "./Pages/Womens.jsx";
import Kids from "./Pages/Kids.jsx";
import Sale from "./Pages/Sale.jsx";
import Brands from "./Pages/Brands.jsx";
import Adidas from "./Components/Common/Adidas.jsx";
import Converse from "./Components/Common/Converse.jsx";
import Newbalance from "./Components/Common/Newbalance.jsx";
import Nike from "./Components/Common/Nike.jsx";
import Cart from "./Pages/Cart.jsx";
import Profile from "./Pages/Profile.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";

import ShoppingBag from "./Components/Common/ShoppingBag.jsx";
import LoginModal from "./Components/Modals/LoginModal.jsx";
import UserLogIn from "./Components/Common/UserLogIn.jsx";
import UserSignIn from "./Components/Common/UserSignIn.jsx";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUserLogInOpen, setIsUserLogInOpen] = useState(false);
  const [isUserSignInOpen, setIsUserSignInOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const handleRequestClose = () => {
    setIsModalOpen(false);
  };

  const handleOpenUserLogIn = () => {
    setIsUserLogInOpen(true); // Function to open UserLogIn
  };

  const handleOpenUserSignIn = () => {
    setIsUserSignInOpen(true); // Function to open UserSignIn
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="newArrivals" element={<NewArrivals />} />
        <Route path="newArrivals/:id" element={<ProductDetail />} />
        <Route path="mens" element={<Mens />} />
        <Route path="mens/:id" element={<ProductDetail />} />
        <Route path="womens" element={<Womens />} />
        <Route path="womens/:id" element={<ProductDetail />} />
        <Route path="kids" element={<Kids />} />
        <Route path="kids/:id" element={<ProductDetail />} />
        <Route path="brands" element={<Brands />} />
        <Route path="brands/:id" element={<ProductDetail />} />
        <Route path="brands/adidas" element={<Adidas />} />
        <Route path="brands/adidas/:id" element={<ProductDetail />} />
        <Route path="brands/converse" element={<Converse />} />
        <Route path="brands/converse/:id" element={<ProductDetail />} />
        <Route path="brands/newbalance" element={<Newbalance />} />
        <Route path="brands/newbalance/:id" element={<ProductDetail />} />
        <Route path="brands/nike" element={<Nike />} />
        <Route path="brands/nike/:id" element={<ProductDetail />} />
        <Route path="sale" element={<Sale />} />
        <Route path="sale/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    )
  );

  return (
    <div className=" w-full">
      <RouterProvider router={router} />
      <LoginModal
        isOpen={isModalOpen}
        onRequestClose={handleRequestClose}
        handleOpenUserLogIn={handleOpenUserLogIn}
        handleOpenUserSignIn={handleOpenUserSignIn}
      />
      <UserLogIn
        isOpen={isUserLogInOpen}
        onRequestClose={() => setIsUserLogInOpen(false)}
      />
      <UserSignIn
        isOpen={isUserSignInOpen}
        onRequestClose={() => setIsUserSignInOpen(false)}
      />
    </div>
  );
};

export default App;
