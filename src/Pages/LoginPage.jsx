import React from "react";
import { useState } from "react";
import { Link, Navigate, redirect } from "react-router-dom";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    } else {
      alert("Wrong Credentials");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <form onSubmit={login}>
        <h1 className="text-center text-2xl font-bold mb-5 text-black">
          Login Page
        </h1>
        <input
          className="block mb-1 w-full py-1 px-1.5 border-2  bg-white border-b-1 border-black rounded-md"
          type="text"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          placeholder="Username"
        />
        <input
          className="block mb-1 w-full py-1 px-1.5 border-2  bg-white border-b-1 border-black rounded-md"
          type="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          placeholder="Password"
        />
        <div className="mt-2">
          <button className="w-full block bg-slate-900 border-2 text-white rounded-lg h-9 hover:last-hidden hover:bg-slate-700 duration-500 ">
            Login
          </button>
          <Link to="/register">
            <button className=" text-center w-full block bg-slate-900 border-2 text-white rounded-lg h-9 hover hover:bg-slate-700 duration-500">
              Register
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
