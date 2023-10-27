import React from "react";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
const Layout = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/";
  return (
    <>
      {!hideNavbar && <Sidebar />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
