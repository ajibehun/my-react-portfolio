import React from "react";
import Navbar from "./navbar";
import "../styles/mains.scss";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <main>{children}</main>
    </>
  );
};

export default Layout;
