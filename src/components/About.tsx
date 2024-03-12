// imports
import React from "react";
import Image from "next/image";

// Images
import setupPic from "../../public/assets/images/mySetup.jpg";

const About = () => {
  return (
    <div className=" sm:flex justify-around  border-2 sm:h-[270px] h-[430px] mt-[200px]">
      <div className=" sm:flex sm:w-[100%] sm:items-center sm:justify-around">
        <div className="text-center text-white sm:mt-[20px] font-semibold sm:text-2xl text-4xl mt-[35px] z-[50]">
          About Me
        </div>
        <div className="text-center text-white sm:mt-[20px] font-semibold text-2xl mt-[60px] z-[50]">
          Stuff Here
        </div>
      </div>
      <Image
        src={setupPic}
        alt="my setup"
        className="h-[130px] sm:h-[270px] object-cover absolute top-[1050px] sm:z-[0] sm:top-[680px] opacity-40 z-[-1]"
      ></Image>
    </div>
  );
};
export default About;
