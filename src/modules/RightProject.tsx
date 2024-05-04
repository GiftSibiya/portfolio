"use client";
// Imports
import React from "react";
import Image from "next/image";

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
import tailwindIcon from "../../public/assets/icons/icons8-tailwind-css-48.png";
import firebaseIcon from "../../public/assets/icons/icons8-firebase-48.png";

const iconStyle = ` w-[50px] h-[50px] transition duration-600 ease-in-out hover:scale-150`;

interface RightProjectProps {
  projectName: string;
  projectDescription: string;
  projectStack: string[];
}

const RightProject = ({
  projectName,
  projectDescription,
  projectStack,
}: RightProjectProps) => {
  return (
    <div className="flex justify-center items-center h-[350px] my-[250px]">
      <div className="flex border-2 flex-col-reverse sm:flex-row justify-between  w-[90%] ">
        <div className="sm:flex sm:flex-col sm:items-center sm:justify-center sm:w-[50%] w-400px">
          <h4 className="text-white text-2xl text-center">{projectName}</h4>
          <p className="text-sm text-white my-[20px] text-center">
            {projectDescription}
          </p>
          <div className="flex items-center border-2 h-[100px] sm:w-[80%] justify-between ">
            {projectStack.map((stack) => {
              switch (stack) {
                case "HTML":
                  return (
                    <Image src={htmlIcon} alt="html" className={iconStyle}></Image>);
                case "CSS":
                  return (
                    <Image src={cssIcon} alt="CSS" className={iconStyle}></Image>);
                case "JavaScript":
                  return (
                    <Image src={JSIcon} alt="Javascript" className={iconStyle}></Image>);
                case "TypeScript":
                  return (
                    <Image src={TSIcon} alt="TypeScript" className={iconStyle}></Image>);
                case "C#":
                  return (
                    <Image src={cSharp} alt="C#" className={iconStyle}></Image>);
                case "React":
                  return (
                    <Image src={reactIcon} alt="React" className={iconStyle}></Image>);
                case "NextJS":
                  return (
                    <Image src={nextIcon} alt="NextJS" className={iconStyle}></Image>);
                case "SQL":
                  return (
                    <Image src={sqlIcon} alt="SQL" className={iconStyle}></Image>);
                case "MongoDB":
                  return (
                    <Image src={mongoIcon} alt="MongoDB" className={iconStyle}></Image>);
                case "Firebase":
                  return (
                    <Image src={firebaseIcon} alt="Firebase" className={iconStyle}></Image>);
                case "Tailwind":
                  return (
                    <Image src={tailwindIcon} alt="Tailwind" className={iconStyle} ></Image>);
                default:
                  return null;
              }
            })}
          </div>
        </div>
        <div className=" w-full sm:w-[50%] border-2 sm:h-[350px] h-[350px] ">
          Right Side Is Here
        </div>
      </div>
    </div>
  );
};

export default RightProject;
