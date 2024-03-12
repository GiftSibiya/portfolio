// Imports
import React from "react";
import Image from "next/image";

// Files
import giftPic from "../../public/assets/images/GiftSibiya.jpg";

// Icons
import htmlIcon from "../../public/assets/icons/icons8-html-48.png";
import cssIcon from "../../public/assets/icons/icons8-css-48.png";
import JSIcon from "../../public/assets/icons/icons8-javascript-48.png";
import TSIcon from "../../public/assets/icons/icons8-typescript-48.png";
import cSharp from "../../public/assets/icons/icons8-c-48.png";
import reactIcon from "../../public/assets/icons/icons8-react-48.png";
import nextIcon from "../../public/assets/icons/icons8-nextjs-48.png";
import sqlIcon from "../../public/assets/icons/icons8-mysql-48.png";
import mongoIcon from "../../public/assets/icons/MongoDB-48.png";

const Header = () => {
  return (
    <div className="flex justify-center h-[750px] sm:h-[350px] sm:mt-[30px] ">
      <div className=" flex sm:flex-row flex-col sm:justify-between items-center w-[90%]">
        <div className="text-3xl font-bold  text-white w-[80vw] mt-[85px] sm:mt-0  sm:w-[50%]">
          <h1 className="text-center">Hi, I&apos;m Gift Sibiya</h1>
          <p className="mt-2 w-[80vw] sm:w-[50vw] text-center">
            Full-Stack JS / TS Mobile & Web Developer
          </p>
          <p className="lg:text-[20px] md:text-[15px] sm:text-[14px] text-[5vw] font-normal my-3 text-center">
            I am a full stack web & mobile developer with a background in
            Electrical Engineering based in Midrand, South Africa with extensive
            experience working and adapting to frontend and backend tech stacks
            from javascript to ASP.NET CRUD applications
          </p>
          <div className="flex justify-around rounded-md bg-white sm:p-5 py-3 mt-[20px] w-[100%] sm:w-[600px]">
            <Image
              src={htmlIcon}
              alt="html"
              className="size-5  sm:w-[40px] sm:h-[40px]  "
            ></Image>
            <Image
              src={cssIcon}
              alt="css"
              className="size-5 sm:w-[40px] sm:h-[40px]"
            ></Image>
            <Image
              src={JSIcon}
              alt="javascript"
              className="size-5 sm:w-[40px] sm:h-[40px]"
            ></Image>
            <Image
              src={TSIcon}
              alt="typescript"
              className="size-5 sm:w-[40px] sm:h-[40px]"
            ></Image>
            <Image
              src={cSharp}
              alt="c#"
              className="size-5 sm:w-[40px] sm:h-[40px]"
            ></Image>
            <Image
              src={reactIcon}
              alt="react"
              className="size-5 sm:w-[40px] sm:h-[40px]"
            ></Image>
            <Image
              src={nextIcon}
              alt="next"
              className="size-5 sm:w-[40px] sm:h-[40px]"
            ></Image>
            <Image
              src={sqlIcon}
              alt="sql"
              className="size-5 sm:w-[40px] sm:h-[40px]"
            ></Image>
            <Image
              src={mongoIcon}
              alt="mongo"
              className="size-5 sm:w-[40px] sm:h-[40px]"
            ></Image>
          </div>
        </div>
        <div className="text-3xl font-bold text-white">
          <Image
            src={giftPic}
            alt="Gift Sibiya"
            className=" rounded w-[250px] mt-2 sm:mb-[60px] h-[250px] object-cover"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Header;
