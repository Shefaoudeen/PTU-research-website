import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Banner from "./Banner";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
