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
    <div className="bg-slate-200 p-8">
      <div className="max-w-4xl mx-auto">
        {/* <h1 className="text-3xl font-bold text-center mb-8">CEO's Message</h1> */}
        <div className="">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-violet-800 to-blue-900 bg-opacity-80 p-4 mt-2 md:mt-6 rounded-lg shadow-lg text-white"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full"
                />
              </div>
              <h2 className="text-xl font-semibold text-center">
                {member.name}
              </h2>
              <h5 className="mb-2 text-center font-bold tracking-tight">
                <span className=" bg-gradient-to-r from-red-400 via-yellow-500 to-blue-500 text-transparent bg-clip-text">
                  {member.position}
                </span>
              </h5>
              {/* <p className="text-gray-600 text-center mb-4">
                {member.position}
              </p> */}
              <p className="text-gray-300 italic text-sm text-center p-4">
                "{member.message}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
