// Imports
import React from "react";
import Image from "next/image";

// Images
import htmlIcon from "../../public/assets/icons/icons8-html-48.png";
import cssIcon from "../../public/assets/icons/icons8-css-48.png";
import JSIcon from "../../public/assets/icons/icons8-javascript-48.png";
import TSIcon from "../../public/assets/icons/icons8-typescript-48.png";
import cSharp from "../../public/assets/icons/icons8-c-48.png";
import reactIcon from "../../public/assets/icons/icons8-react-48.png";
import nextIcon from "../../public/assets/icons/icons8-nextjs-48.png";
import sqlIcon from "../../public/assets/icons/icons8-mysql-48.png";
import mongoIcon from "../../public/assets/icons/MongoDB-48.png";

interface LeftProjectProps {
  projectName: string;
  projectDescription: string;
  projectStack: string[];
}

const LeftProject = ({
  projectName,
  projectDescription,
  projectStack,
}: LeftProjectProps) => {
  return (
    <div className="border-2 border-purple lg:w-[90%] h-[300px]">
      <div className="flex w-screen justify-between">
        <div>Left Side</div>
        <div className="w-[300px]">
          <h4>{projectName}</h4>
          <p className="text-sm">{projectDescription}</p>
          <div className="flex">
            {projectStack.map((stack) => {
              switch (stack) {
                case "HTML":
                  return <Image src={htmlIcon} alt="html"></Image>;
                case "CSS":
                  return <Image src={cssIcon} alt="CSS"></Image>;
                case "JavaScript":
                  return <Image src={JSIcon} alt="Javascript"></Image>;
                case "TypeScript":
                  return <Image src={TSIcon} alt="TypeScript"></Image>;
                case "C#":
                  return <Image src={cSharp} alt="C#"></Image>;
                case "React":
                  return <Image src={reactIcon} alt="React"></Image>;
                case "NextJS":
                  return <Image src={nextIcon} alt="NextJS"></Image>;
                case "SQL":
                  return <Image src={sqlIcon} alt="SQL"></Image>;
                case "MongoDB":
                  return <Image src={mongoIcon} alt="MongoDB"></Image>;
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftProject;
