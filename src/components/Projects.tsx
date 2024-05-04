"use client";
// Imports
import React from "react";

// Custom Modules
import LeftProject from "@/modules/LeftProject";
import RightProject from "@/modules/RightProject";

const Projects = () => {
  return (
    <div className="h-[3800px]">
      <div className="flex-col ">
        <h3 className="text-white text-center text-4xl mt-[40px] ">Projects</h3>

        {/* Mobile App Projects */}
        <hr className="mt-[30px] w-[90%] m-auto " />

        <p className="text-white text-center text-lg mt-[20px] mb-[140px]">
          Mobile Applications
        </p>

        <LeftProject
          projectName="Testing Project"
          projectDescription=" Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.    "
          projectStack={["HTML", "CSS", "JavaScript", "TypeScript"]}
        />
        <RightProject
          projectName="Testing Project"
          projectDescription=" Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.    "
          projectStack={["HTML", "CSS", "JavaScript", "TypeScript"]}
        />
        <LeftProject
          projectName="Testing Project"
          projectDescription=" Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.    "
          projectStack={["HTML", "CSS", "JavaScript", "TypeScript"]}
        />
        {/* -- */}
        {/* Web Applications Projects */}
        <hr className="mt-[150px] w-[90%] mx-auto " />

        <p className="text-white text-center text-lg mt-[20px] mb-[-100px]">
          Web Applications
        </p>

        <RightProject
          projectName="Testing Project"
          projectDescription=" Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.    "
          projectStack={["HTML", "CSS", "JavaScript", "TypeScript"]}
        />
        <LeftProject
          projectName="Testing Project"
          projectDescription=" Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.    "
          projectStack={["HTML", "CSS", "JavaScript", "TypeScript"]}
        />
        <RightProject
          projectName="Testing Project"
          projectDescription=" Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.    "
          projectStack={["HTML", "CSS", "JavaScript", "TypeScript"]}
        />

        {/* -- */}
      </div>
    </div>
  );
};

export default Projects;
