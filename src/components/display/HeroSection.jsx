import React from "react";
import schoolImg1 from "./../../assets/images/school1.jpg";
import schoolImg2 from "./../../assets/images/school2.jpg";
import logo from "./../../assets/images/logo.png";
import Typewriter from "typewriter-effect";
const HeroSection = () => {
  return (
    <div className="m-4 mt-10 sm:max-w-[75%] lg:max-w-[60%] flex justify-between mx-auto border-b-2 pb-4">
      <div className="flex-col mt-6 justify-center item-center">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Welcome To!").start();
          }}
        />
        <p className="text-4xl font-extrabold">Paramhansh Siksha Sansthan</p>
        <div className="text-sm font-semibold">
          Education, Training, Scholarship and Assistance
        </div>
        <div className="mt-4 text-white w-32 justify-center items-center text-sm bg-blue-700 p-2  rounded-lg cursor-pointer hover:bg-blue-900 shadow-md hover:shadow-xl transition-all ease-in-out duration-300">
          <p className="text-center">Donate</p>
        </div>
      </div>

      <div className="rounded-md p-2 shadow-md flex justify-center items-center">
        <img src={logo} className="h-32" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
