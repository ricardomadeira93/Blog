import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between mb-14 content-center	mt-5">
      <h1 className="font-bold text-3xl leading-1">Blog</h1>
      <nav className="text-black flex gap-3.5 text-md font-semibold justify-center leading-9	 ">
        <a>Login</a>
        <a>Register</a>
      </nav>
    </div>
  );
};

export default Header;
