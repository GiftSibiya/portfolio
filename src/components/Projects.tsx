"use client";
// Imports
import React from "react";

// Custom Modules
import LeftProject from "@/modules/LeftProject";
import RightProject from "@/modules/RightProject";

const Projects = () => {
  return (
    <div>
      <div className="flex-col">
        <h3 className="text-white text-center text-4xl mt-[30px]">Projects</h3>

        {/* Mobile App Projects */}
        <p className="text-white text-center text-lg mt-[20px]">
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
        {/* Mobile App Projects */}
        <p className="text-white text-center text-lg mt-[20px]">
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
        {/* Website */}
        <p className="text-white text-center text-lg mt-[20px]">Websites</p>

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
      </div>
    </div>
  );
};

export default Projects;
