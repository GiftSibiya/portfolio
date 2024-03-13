// Imports
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#18392B] flex flex-col items-center sm:h-[290px] h-[350px]">
      <hr className="w-[50%] my-[30px]" />
      <div className="flex flex-col items-center justify-between sm:flex-row border-2 w-[90%]">
        {/* Brand Section */}
        <div className="">
          <div className=" text-white text-2xl ">Gift Sibiya</div>
          {/* Annotations */}
          <p className=" text-gray-300 text-sm">
            Full-Stack JS / TS Mobile & Web Developer
          </p>
          <p className=" text-gray-300 text-sm ">
            Kerriebos Street, Ebony Park, Midrand, South Africa
          </p>
          <p className=" text-gray-300 text-sm ">Made In Next.JS V14.1.3</p>
          {/* -- */}
        </div>
        {/* -- */}
        {/* Bottom Nav Section */}
        <div className=" flex flex-col items-center justify-center  h-[100px] w-[400px]">
          {" "}
          <div className="flex mb-[20px]">
            <a href="" className="text-white p-2 text-center ">
              Home{" "}
            </a>
            <a href="" className="text-white p-2 text-center ">
              {" "}
              About Me
            </a>
            <br />
            <a href="" className=" text-white p-2 text-center ">
              Projects
            </a>
          </div>
          <div className="">
            <a href="" className="text-white p-2 text-center ">
              Contact Me
            </a>
            <a
              href=""
              className="text-white p-2 bg-orange-500 rounded-lg  text-center"
            >
              Download CV
            </a>
          </div>
        </div>
        {/* -- */}
      </div>
      <div className="">
        <div className="mb-[10px] text-gray-300 ">Copyright © 2024</div>
      </div>
    </div>
  );
};

export default Footer;
