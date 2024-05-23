// src/components/ImageCarousel.jsx
import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import school1 from "../../assets/images/school1.jpg";
import school2 from "../../assets/images/school2.jpg";
import Quote from "./Quote";
const images = [
  logo, // replace with your image paths
  school1,
  school2,
];
const quote = [
  {
    description:
      "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
  },
  {
    description:
      "The best way to find yourself is to lose yourself in the service of others.",
    author: "Mahatma Gandhi",
  },
  {
    description:
      "The best way to find yourself is to lose yourself in the service of others.",
    author: "Mahatma Gandhi",
  },
];
const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="overflow-hidden border-2 rounded-lg shadow-md relative">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-64 object-cover filter brightness-50"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Quote
            author={quote[currentIndex].author}
            description={quote[currentIndex].description}
          />
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white m-2 p-2 text-sm rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white m-2 p-2 text-sm rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
