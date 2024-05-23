// src/components/FAQ.jsx
import React, { useState } from "react";

const FAQ = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        {faqData.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow mb-4">
            <div
              className="p-4 cursor-pointer flex justify-between items-center"
              onClick={() => handleToggle(index)}
            >
              <span className="text-sm font-medium">{item.question}</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {activeIndex === index && (
              <div className="p-4 border-t text-sm border-gray-200">
                <p className="text-gray-700">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
