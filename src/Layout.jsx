import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="p-3 max-w-[700px] my-0 mx-auto box-border">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
