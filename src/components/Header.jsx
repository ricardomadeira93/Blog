import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between mb-14 content-center	mt-5">
      {/* Logo */}
      <h1 className="font-bold text-3xl leading-1">Blog</h1>
      {/* Navigation */}
      <nav className="text-black flex gap-3.5 text-md font-semibold justify-center leading-9	 ">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </div>
  );
};

export default Header;
