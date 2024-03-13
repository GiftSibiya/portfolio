// Imports
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col mt-[25px] items-center md:h-[430px]">
      <div className="flex sm:flex-row flex-col w-[90%] justify-between ">
        {/* Left Form Section */}
        <div className="flex flex-col justify-center p-2 border-2 md:w-[700px] md:h-[350px]">
          <h4 className="text-gray-300 text-2xl">Drop Me a message</h4>
          <hr className="w-[200px] border-orange-500 border-2 rounded-lg " />
          <p className="my-[10px] text-gray-300">
            Get in touch with me for on mobile or web products you have in mind
            and you will be one of my satisfied clients. <br />
            <span className="text-orange-500">
              It&apos;s more than software, it&apos;s your sollution to the
              world
            </span>
          </p>
          <p>Whatsapp</p>
          <p>email</p>
          <p>Location</p>
        </div>
        {/* -- */}
        {/* Text Form Container */}
        <div className="flex flex-col items-center justify-center border-2 md:w-[500px] md:h-[350px]">
          {/* name Input */}
          <div className="flex flex-col items-center sm:w-[250px] md:w-[350px]">
            <label className="text-gray-300 text-center"> Name </label>
            <input
              type="text"
              className=" p-2 rounded-lg text-center sm:w-[220px] md:w-[320px]"
              placeholder="Enter Your Name"
            ></input>
          </div>
          {/* -- */}
          {/* Email Input */}
          <div className="flex flex-col items-center sm:w-[250px] md:w-[350px]">
            <label className="text-gray-300 text-center"> Email </label>
            <input
              type="text"
              className=" p-2 rounded-lg text-center sm:w-[220px] md:w-[320px] "
              placeholder="Enter your Email."
            ></input>
          </div>
          {/* -- */}
          {/* Password Input */}
          <div className="flex flex-col items-center sm:w-[250px] md:w-[350px] ">
            <label className="text-gray-300 text-center"> Name </label>
            <textarea
              className=" p-2 rounded-lg h-[150px] sm:w-[220px] md:w-[320px]"
              placeholder="Enter Message Here."
            ></textarea>
          </div>
          {/* -- */}
        </div>
        {/* -- */}
      </div>
      {/* Socials Container */}
      <div className="h-[50px] w-[80%] border-2 mt-3"></div>
      {/* -- */}
    </div>
  );
};

export default Contact;
