import React from "react";
import { PTU2 } from "../assets";

const Login = () => {
  return (
    <div className="h-screen flex w-screen">
      <div className="w-1/2 h-full">
        <img src={PTU2} className="w-full h-full object-cover" />
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <div className="flex flex-col gap-6 text-center">
          <h1 className="text-3xl font-semibold tracking-widest">
            <span className="text-4xl text-blue-600">C</span>ontent{" "}
            <span className="text-4xl text-blue-600">M</span>anagement{" "}
            <span className="text-4xl text-blue-600">S</span>ystem
          </h1>
          <h1 className="text-xl font-medium">SIGN IN</h1>
          <div>
            <label className="text-xl">Username : </label>
            <input
              type="text"
              className="bg-blue-200 p-2 rounded-md"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="text-xl">Password : </label>
            <input
              type="text"
              className="bg-blue-200 p-2 rounded-md"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <input
              type="submit"
              className="bg-blue-400 text-white px-6 py-2 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
