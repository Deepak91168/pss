import React from "react";
import FounderImage1 from "../assets/images/c1.png";
import FounderImage2 from "../assets/images/c2.png";
import FounderImage3 from "../assets/images/c3.png";
const About = () => {
  const teamMembers = [
    {
      name: "Rhagevendra",
      position: "Founder and Manager",
      image: FounderImage1,
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      name: "Jane Smith",
      position: "COO",
      image: FounderImage2, // Replace with actual image path
      message:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      name: "David Johnson",
      position: "CFO",
      image: FounderImage2, // Replace with actual image path
      message:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white w-full md:w-1/2 flex justify-center items-center">
        <div className="p-4 md:px-10 lg:px-12">
          <div className="w-full flex justify-center items-center">
            <img
              src={FounderImage1}
              className="h-36 w-36 rounded-full"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-center mt-4">
            <div>
              <h1 className="text-lg sm:text-2xl">Rhagevndra</h1>
            </div>
            <div className="text-transparent text-md sm:text-xl bg-clip-text bg-gradient-to-r from-blue-900 via-blue-600 to-teal-700 font-bold">
              Founder
            </div>
          </div>
          <div className="mt-4 bg-white text-gray-800 rounded-lg shadow-lg">
            <p className="p-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. unchanged. It was popularised in the
              1960s with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/2">
        <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-100 w-full flex justify-center items-center p-4">
          <div className="md:px-10 lg:px-12">
            <div className="w-full flex justify-center items-center">
              <img
                src={FounderImage1}
                className="h-24 w-24 rounded-full"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
              <div>
                <h1 className="text-lg sm:text-2xl">Rhagevndra</h1>
              </div>
              <div className="text-transparent text-md sm:text-xl bg-clip-text bg-gradient-to-r from-blue-900 via-blue-600 to-teal-700 font-bold">
                Founder
              </div>
            </div>
            <div className="mt-2 bg-white text-gray-800 rounded-lg shadow-lg">
              <p className="p-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                ies, but also the leap into ies, but also the leap into It was
                ies, but also the leap into ies, but also the leap into It was
                ies, but also the leap into ies, but also the leap into It was
                ies, but also the leap into ies, but also the leap intoIt was
                ies, but also the leap into ies, but also the leap into
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 w-full flex justify-center items-center p-4">
          <div className="md:px-10 lg:px-12">
            <div className="w-full flex justify-center items-center">
              <img
                src={FounderImage1}
                className="h-24 w-24 rounded-full"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
              <div>
                <h1 className="text-lg sm:text-2xl">Rhagevndra</h1>
              </div>
              <div className="text-transparent text-md sm:text-xl bg-clip-text bg-gradient-to-r from-blue-900 via-blue-600 to-teal-700 font-bold">
                Founder
              </div>
            </div>
            <div className="mt-2 bg-white text-gray-800 rounded-lg shadow-lg">
              <p className="p-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. electronic typesetting, remaining essentially
                unchanged.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
