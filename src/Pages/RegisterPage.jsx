import React, { useState } from "react";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("registration sucessful");
    } else {
      alert("registration failed");
    }
  }

  return (
    <div>
      <form onSubmit={register} action="">
        <h1 className="text-center text-2xl font-bold mb-5 text-black">
          Register Page
        </h1>
        <input
          className="block mb-1 w-full py-1 px-1.5 border-2  bg-white border-b-1 border-black rounded-md"
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          className="block mb-1 w-full py-1 px-1.5 border-2  bg-white border-b-1 border-black rounded-md"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <div className="mt-2">
          <button className=" text-center w-full block bg-slate-900 border-2 text-white rounded-lg h-9 hover hover:bg-slate-700 duration-500">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
