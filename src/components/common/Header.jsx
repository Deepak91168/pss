import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const Header = () => {
  return (
    <div className="flex justify-around py-2 lg: max-w-[75%] mx-auto border-b-2">
      <div className=" flex">
        <div className="flex items-center px-2">
          <div className="p-1 border-2 rounded-full">
            <RiWhatsappFill className="text-lg text-[#25D366]" />
          </div>
          <p className="text-sm text-gray-500 px-2 cursor-pointer transition-all ease-in-out duration-500 hover:underline">
            +91-1234567890
          </p>
        </div>
        <div className="flex items-center">
          <div className="p-1 border-2 rounded-full">
            <BiLogoGmail className="text-lg text-red-600" />
          </div>
          <p className="text-sm text-gray-500 px-2 cursor-pointer transition-all ease-in-out duration-500 hover:underline">
            paramhansshikshansansthann@gmail.com
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="p-2 rounded-full border-2 hover:shadow-lg">
          <FaInstagram className="text-md cursor-pointer transition-all ease-in-out duration-500 " />
        </div>
        <div className="p-2 rounded-full border-2 hover:shadow-lg">
          <FaFacebook className="text-md  cursor-pointer transition-all ease-in-out duration-500" />
        </div>
        <div className="p-2 rounded-full border-2 hover:shadow-lg">
          <FaXTwitter className="text-md cursor-pointer transition-all ease-in-out duration-500 " />
        </div>
        <div className="p-2 rounded-full border-2 hover:shadow-lg">
          <FaLinkedin className="text-md cursor-pointer transition-all ease-in-out duration-500 " />
        </div>
      </div>
    </div>
  );
};

export default Header;
