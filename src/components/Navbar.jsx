import React from "react";
import moon from "../assets/moon star.png";

const Navbar = () => {
  return (
    <nav className="flex font-600 justify-center py-2 space-x-20 bg-mainbg">
      <img className="w-[30px]" src={moon} alt="logo" />
      <h1 className="text-[24px] font-custom ">Hallaly</h1>
      <div className="cursor-pointer mt-2">
        <div className="w-8 h-[2px] bg-whiteish mb-1"></div>
        <div className="w-7 h-[2px] bg-whiteish mb-1"></div>
        <div className="w-6 h-[2px] bg-whiteish"></div>
      </div>
    </nav>
  );
};

export default Navbar;
