import React from "react";

const MissionCard = ({ icon, missionName, customClass }) => {
  return (
    <div
      className={`${customClass} border-2 w-full sm:w-48 rounded-xl text-white mt-4 flex-col justify-center items-center p-6`}
    >
      {icon}
      <div className="text-[10px] font-semibold mt-2 text-center">
        {missionName}
      </div>
    </div>
  );
};

export default MissionCard;
