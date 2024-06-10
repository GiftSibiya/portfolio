"use client";
// Imports
import React from "react";

// Custom Modules
import LeftProject from "@/modules/LeftProject";
import RightProject from "@/modules/RightProject";

// Images 

const Projects = () => {
  return (
    <div className="h-[3800px]">
      <div className="flex-col ">
        <h3 className="text-white text-center text-4xl mt-[40px] ">Projects</h3>

        {/* Mobile App Projects */}
        <hr className="mt-[30px] w-[90%] m-auto " />
        {/* Web Applications Projects */}
       
        <p className="text-white text-center text-lg mt-[20px] mb-[-100px]">
          Web Applications
        </p>

        <RightProject
          projectName="Driving School Hub"
          projectDescription=" A Custom built system for managing your driving school students, fleet and schedules."
          projectStack={["HTML", "CSS", "JavaScript", "TypeScript"]}
          imageString ={["drivngSchool"]}
          />
        <LeftProject
          projectName="e procure"
          projectDescription=" Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.    "
          projectStack={["HTML", "CSS", "JavaScript", "TypeScript"]}
          imageString ={["eProcure"]}
        />
        <RightProject
          projectName="Legend Task"
          projectDescription=" Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.    "
          projectStack={["HTML", "CSS", "JavaScript", "TypeScript"]}
          imageString ={["eProcure"]}
        />
        {/* -- */}
        <hr className="mt-[150px] w-[90%] mx-auto " />
        <p className="text-white text-center text-lg mt-[20px] mb-[140px]">
          Mobile Applications
        </p>
        
        <LeftProject
          projectName="Taxi Rank Finder"
          projectDescription=" Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries 
          for previewing layouts and visual mockups."
          projectStack={["React", "JavaScript", "Tailwind", "Firebase" ]}
          imageString ={["drivngSchoolGif"]}
        />
        <RightProject
          projectName="Artisan Finder"
          projectDescription=" Experience a groundbreaking software solution that streamlines the process of finding qualified, 
          talented, and capable individuals—all at your fingertips. Our innovative technology simplifies talent discovery with user-friendly 
          taps on the screen, offering a seamless and efficient approach to connecting with the best candidates for your needs"
          projectStack={["HTML", "Tailwind", "JavaScript", "React" ]}
          imageString ={["drivngSchoolGif"]}
        />
        <LeftProject
          projectName="Sneke"
          projectDescription=" Engage in a UI and front-end challenge for a food and snack app. A quick, e-commerce-ready template, 
          designed to elevate the user experience, perfect for culinary enthusiasts exploring delicious offerings."
          projectStack={["HTML", "CSS", "JavaScript", "TypeScript"]}
          imageString ={["drivngSchoolGif"]}
        />
        {/* -- */}
      </div>
    </div>
  );
};

export default Projects;
