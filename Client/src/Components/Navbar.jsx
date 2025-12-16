import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between item-center py-5 mx-8 sm:mx-20 xl:mx-32  ">
      <h1
        onClick={() => navigate("/")}
        className=" logo text-xl sm:text-2xl font-black tracking-tight cursor-pointer text-gray-900 hover:text-primary transition-colors duration-200 ">BLOGHUB </h1>
      <button
        onClick={() => navigate("/blog")}
        className="flex item-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5 hover:scale-102"
      >
        Login
        <img src={assets.arrow} alt="arrow" className="w-3" />
      </button>
    </div>
  );
}

export default Navbar;
