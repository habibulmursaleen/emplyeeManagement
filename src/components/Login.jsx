import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/table");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <h2 className="text-3xl font-base mb-6">LOG IN</h2>
      <form className="w-full max-w-md">
        <div className="mb-4">
          <input
            className="appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <input
            className="appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="mb-4">
          <button
            className="w-full shadow bg-green-500 hover:bg-green-400 focus:shadow-outline-green focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
            onClick={handleSubmit}
          >
            LOG IN
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
