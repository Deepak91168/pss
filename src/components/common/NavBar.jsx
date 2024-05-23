import React from "react";
import { Link } from "react-router-dom";
import { FcDonate } from "react-icons/fc";
import { BiSolidDonateHeart } from "react-icons/bi";
import { useLocation } from "react-router-dom";
const NavBar = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const checkPath = (path) => {
    return path === pathName;
  };
  const activePath = (path) => {
    if (checkPath(path)) {
      return "text-black shadow-md";
    } else {
      return "text-gray-600";
    }
  };
  return (
    <nav className=" bg-white mt-2">
      <div className="flex justify-around  mx-auto xl:max-w-[75%]">
        <div className="flex justify-center items-center p-2">
          {/* <div>
            <img src="" alt="logo" />
          </div> */}
          <div>
            <h1 className="font-bold">PSS Foundation</h1>
          </div>
        </div>
        <ul className="flex w-[60%] text-gray-600 justify-center space-x-6 items-center  p-2 rounded-lg">
          <li className={checkPath("/") ? "text-black" : "text-gray-600"}>
            <Link to="/">Home</Link>
          </li>
          <li
            className={
              checkPath("/mission")
                ? "text-black"
                : "text-gray-500 hover:text-black transition-all ease-in-out duration-300"
            }
          >
            <Link to="/mission">Mission</Link>
          </li>
          <li
            className={
              checkPath("/news")
                ? "text-black"
                : "text-gray-500 hover:text-black transition-all ease-in-out duration-300"
            }
          >
            <Link to="/news">News</Link>
          </li>
          <li
            className={
              checkPath("/about")
                ? "text-black"
                : "text-gray-500 hover:text-black transition-all ease-in-out duration-300"
            }
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className={
              checkPath("/contact")
                ? "text-black"
                : "text-gray-500 hover:text-black transition-all ease-in-out duration-300"
            }
          >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex right-0 text-white justify-center items-center text-sm bg-blue-700 p-4 py-2 rounded-lg cursor-pointer hover:bg-blue-900 shadow-md hover:shadow-xl transition-all ease-in-out duration-300">
          <p>Donate</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
