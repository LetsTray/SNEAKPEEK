import React from "react";
import Navbar from "../Common/Navbar";
import Header from "../Common/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
