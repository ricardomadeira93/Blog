import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:3000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {});
      setUserInfo(userInfo);
    });
  }, []);

  function logout() {
    fetch("http://localhost:3000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <div className="flex justify-between mb-14 content-center	mt-5">
      {/* Logo */}
      <Link to="/" className="font-bold text-3xl leading-1">
        Blog
      </Link>
      {/* Navigation */}
      <nav className="text-black flex gap-3.5 text-md font-semibold justify-center leading-9	 ">
        {username && (
          <>
            <Link to={"/create"}>Create a new article</Link>|
            <button onClick={logout}>Logout</button>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>|<Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
