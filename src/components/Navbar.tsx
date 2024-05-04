// Imports
"use client";
import React from "react";

const Navbar = () => {
  let [openNav, setOpenNav] = React.useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <div className=" flex justify-center items-center h-[120px]">
      <div className=" flex justify-between items-center w-[80%] ">
        <div className="font-bold text-3xl text-white">Gift Sibiya</div>

        {/* MOBILE NAV MENU */}
        <div
          className="md:hidden flex flex-col gap-y-[5px] "
          onClick={toggleNav}
        >
          <div className="w-[20px] bg-white h-[2px] "></div>
          <div className="w-[20px] bg-white h-[2px] "></div>
          <div className="w-[20px] bg-white h-[2px] "></div>
        </div>
        <div className="hidden md:flex text-center justify-between lg:w-[400px] md:w-[400px] items-center">
          <a href="" className=" transition duration-600 ease-in-out hover:text-orange-500"> Home </a> 
          <a href="" className=" transition duration-600 ease-in-out hover:text-orange-500">About Me </a>
          <a href="" className=" transition duration-600 ease-in-out hover:text-orange-500">Projects </a> 
          <a href="" className="bg-orange-500 text-white font-bold p-2 rounded-md">Contact Me</a>
        </div>
      </div>
      {/* HAMBURGER MENU */}
      <div
        className={
          openNav
            ? " absolute md:hidden top-0 h-[200px] w-full bg-black rounded-b-2xl "
            : "hidden"
        }
      >
        <div className={"flex items-center justify-center flex-col"}>
          <div className="flex justify-between items-center w-[80%] mt-2">
            <h3 className="text-white p-2">Gift Sibiya</h3>
            <div
              className="md:hidden flex flex-col gap-y-[5px] "
              onClick={toggleNav}
            >
              <div className="w-[20px] bg-white h-[2px] "></div>
              <div className="w-[20px] bg-white h-[2px] "></div>
              <div className="w-[20px] bg-white h-[2px] "></div>
            </div>
          </div>
          <hr />
          <a href="" className="text-white p-2 ">
            Home{" "}
          </a>
          <a href="" className="text-white p-2 ">
            {" "}
            About Me
          </a>
          <a href="" className="text-white p-2 ">
            Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
