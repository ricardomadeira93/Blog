import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between">
      <h1 className="">Blog</h1>
      <nav>
        <a className="text-black">Login</a>
        <a className="text-black">Register</a>
      </nav>
    </div>
  );
};

export default Header;
