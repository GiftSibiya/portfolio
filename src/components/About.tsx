// imports
import React from "react";
import Image from "next/image";

// Images
import setupPic from "../../public/assets/images/mySetup.jpg";

const About = () => {
  return (
    <div className="flex justify-around h-[270px] mt-[80px]">
      <div className="flex items-center justify-between h-[100%] w-[90%]">
        <div className=" text-white font-semibold text-4xl z-[50]">
          About Me
        </div>
        <div className="text-center  text-white z-[50] w-[700px] text-xl ">
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
