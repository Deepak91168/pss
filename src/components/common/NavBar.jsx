import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Popup from "../display/PopUp";
import logo from "../../assets/images/logo.png";
const NavBar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const location = useLocation();
  const pathName = location.pathname;

  const checkPath = (path) => {
    return path === pathName;
  };

  const activePath = (path) => {
    if (checkPath(path)) {
      return "text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-400 to-teal-700 font-bold";
    } else {
      return "text-gray-600 hover:text-blue-600 transition-all ease-in-out duration-300 font-semibold";
    }
  };

  return (
    <nav className="bg-white shadow-md relative px-4">
      <div className="flex justify-between items-center mx-auto xl:max-w-[60%] bg-white">
        <div className="flex items-center p-2">
          <div className="flex justify-center items-center">
            <div>
              <img
                src={logo}
                className="h-16 w-16 object-contain"
                alt="Paramhansh Siksha Sansthan Logo"
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-800 w-full">
                PSS Foundation
              </h1>
            </div>
          </div>
        </div>
        <ul className="flex justify-center space-x-6 items-center p-2 rounded-lg">
          <li className={activePath("/")}>
            <Link to="/">Home</Link>
          </li>
          <li className={activePath("/mission")}>
            <Link to="/mission">Mission</Link>
          </li>
          <li className={activePath("/news")}>
            <Link to="/news">News</Link>
          </li>
          <li className={activePath("/about")}>
            <Link to="/about">About</Link>
          </li>
          <li className={activePath("/contact")}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div
          onClick={openPopup}
          className="flex text-white justify-center items-center text-sm bg-blue-700 p-4 py-2 rounded-lg cursor-pointer hover:bg-blue-900 shadow-md hover:shadow-xl transition-all ease-in-out duration-300"
        >
          <p>Donate</p>
        </div>
        <Popup isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    </nav>
  );
};

export default NavBar;
