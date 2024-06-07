import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Banner from "./Banner";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Banner title={"Directorate of Academic Research"} desc = {"Puducherry Technological University ,"} additional={"Puducherry- 605014"}/>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
