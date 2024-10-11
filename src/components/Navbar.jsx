import React from "react";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-blue-600 text-white py-4 flex items-center justify-between px-6">
      <div className="logo place-content-center">
        <h2 className="text-2xl font-semibold">
          Foodie <span className="text-orange-400">App</span>
        </h2>
      </div>
      <div className="hidden sm:block bg-white rounded">
        <input type="text" placeholder="search here..."  className=" md:w-[400px] sm:w-[200px] py-1 px-3 rounded-l text-black "/>
        <button className="py-1 px-3 bg-slate-400 rounded-r">Search</button>
      </div>
      <div className="cart flex gap-6 text-lg">
        <button className="font-semibold  ">Sign in</button>
        <div className="flex items-center justify-center">
          <FaCartPlus  className="cursor-pointer font-semibold"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
