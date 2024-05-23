import React from "react";

const Quote = ({ author, description }) => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="rounded-lg max-w-2xl text-center p-4">
        <p className="text-xl font-semibold italic text-white">{description}</p>
        <p className=" text-md font-medium text-slate-200">— {author}</p>
      </div>
    </div>
  );
};

export default Quote;
