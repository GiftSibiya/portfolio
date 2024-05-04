// imports
import React from "react";
import Image from "next/image";

// Images
import setupPic from "../../public/assets/images/mySetup.jpg";

const About = () => {
  return (
    <div className=" sm:flex justify-around sm:h-[270px] h-[430px] mt-[80px]">
      <div className="flex items-center h-[100%] sm:flex sm:w-[100%] sm:items-center sm:justify-around">
        <div className="text-center text-white sm:mt-[20px] font-semibold sm:text-2xl text-4xl mt-[35px] z-[50]">
          About Me
        </div>
        <div className="text-center text-white z-[50] w-[700px] h-[200px]  text-2xl mt-[100px] sm:mt-[20px] ">
        I am a full stack web & mobile developer with a background in Electrical Engineering based in Midrand, 
        South Africa with extensive experience working and adapting to frontend and backend tech stacks from 
        javascript to ASP.NET CRUD applications.
        </div>
      </div>
      <Image src={setupPic} alt="my setup" 
      className="absolute object-cover  opacity-30 z-[-1] sm:h-[270px] sm:z-[0] ">
      </Image>
    </div>
  );
};
export default About;
