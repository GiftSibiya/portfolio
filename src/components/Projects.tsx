"use client";
import LeftProject from "@/custom modules/LeftProject";
import React from "react";

const Projects = () => {
  return (
    <div className="bg-gray-400 ">
      <LeftProject
        projectName="Testing Project"
        projectDescription="This project does many things"
        projectStack={["HTML", "CSS", "JavaScript", "TypeScript"]}
      />
    </div>
  );
};

export default Projects;
