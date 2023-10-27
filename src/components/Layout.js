import React from "react";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/";
  return (
    <>
      {!hideNavbar && <Sidebar />}
      <Outlet />
    </>
  );
};

export default Layout;
