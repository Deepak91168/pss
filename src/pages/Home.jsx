import React from "react";
import HeroSection from "../components/display/HeroSection";
import MissionCard from "../components/layout/MissionCard";
import { BiSolidDonateHeart } from "react-icons/bi";
import { IoSchool } from "react-icons/io5";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaWheelchair } from "react-icons/fa";
import { MdSportsMartialArts } from "react-icons/md";
import { MdConstruction } from "react-icons/md";
import PercentageBar from "../components/charts/PercentageBar";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="flex flex-col flex-wrap sm:flex-row justify-center items-center mx-auto p-2 sm:p-2 md:max-w-[75%]">
        <MissionCard
          customClass={"flex justify-center bg-yellow-700 item-center"}
          icon={<IoSchool className="text-4xl" />}
          missionName="Bulding world class Infracture for education and Training"
        />
        <MissionCard
          customClass={"flex justify-center bg-pink-700 item-center"}
          icon={<MdSportsMartialArts className="text-4xl" />}
          missionName="Focuses on overall personality development of individual"
        />
        <MissionCard
          customClass={"flex justify-center bg-blue-700 item-center"}
          icon={<LiaChalkboardTeacherSolid className="text-4xl" />}
          missionName="Provide high quality education both online and offline"
        />
        <MissionCard
          customClass={"flex justify-center bg-cyan-800 item-center"}
          icon={<BiSolidDonateHeart className="text-4xl" />}
          missionName="Even a small donation can change lives of many famalies"
        />
        <MissionCard
          customClass={"flex justify-center bg-yellow-600 item-center"}
          icon={<FaWheelchair className="text-4xl" />}
          missionName="Training, Employment and Education for differently abled"
        />
        <MissionCard
          customClass={"flex justify-center bg-red-600 item-center"}
          icon={<MdConstruction className="text-4xl" />}
          missionName="Develop real-world skills and secure employment opportunities"
        />
      </div>
      <div className="text-center text-2xl font-bold mt-6">
        Our Achievements
        <div className="w-full ">
          <hr className="w-[150px] border-[0.5px] mx-auto mt-2" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center md:max-w-[75%] mx-auto mt-4 m-2">
        <div className="border-2 flex m-2 justify-center items-center text-center p-4 space-x-2 rounded-xl">
          <PercentageBar percent={90.1} />
          <div className="">
            <div className="text-xl font-bold">Basic Education</div>
            <div className="text-[12px] p-2 w-[200px]">
              Students Completed high school after enrolling into PSS Foundation
            </div>
          </div>
        </div>
        <div className="border-2 flex m-2 justify-center items-center text-center p-4 space-x-2 rounded-xl">
          <PercentageBar percent={96.9} />
          <div className="">
            <div className="text-xl font-bold">High School</div>
            <div className="text-[12px] p-2 w-[200px]">
              Students Completed high school after enrolling into PSS Foundation
            </div>
          </div>
        </div>
        <div className="border-2 flex m-2 justify-center items-center text-center p-4 space-x-2 rounded-xl">
          <PercentageBar percent={94.35} />
          <div className="">
            <div className="text-xl font-bold">intermediate</div>
            <div className="text-[12px] p-2 w-[200px]">
              Students Completed high school after enrolling into PSS Foundation
            </div>
          </div>
        </div>
        <div className="border-2 flex m-2 justify-center items-center text-center p-4 space-x-2 rounded-xl">
          <PercentageBar percent={92.01} />
          <div className="">
            <div className="text-xl font-bold">Graduation</div>
            <div className="text-[12px] p-2 w-[200px]">
              Potential students who can complete there graduation with PSS
              Foundation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
