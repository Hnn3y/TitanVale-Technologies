import React, { useState } from "react";

const Onboarding = ({ slides, onFinish }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    } else {
      onFinish();
    }
  };

  const prevSlide = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen bg-gray-800 text-white p-6">
      
      {/* Image */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={slides[current].image}
          alt={slides[current].title}
          className="w-64 h-64 object-contain"
        />
      </div>

      {/* Text */}
      <div className="text-center">
        <h2 className="text-xl font-bold">{slides[current].title}</h2>
        <p className="text-sm text-gray-300 mt-2">{slides[current].description}</p>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between w-full mt-6">
        {/* Prev button */}
        <Button
          variant="outlined"
          onClick={prevSlide}
          disabled={current === 0}
          className="text-white border-gray-400"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </Button>

        {/* Dots */}
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-blue-400" : "bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Next button */}
        <Button
          variant="contained"
          onClick={nextSlide}
          className="bg-blue-500 hover:bg-blue-600"
        >
          {current === slides.length - 1 ? "Finish" : <FontAwesomeIcon icon={faChevronRight} />}
        </Button>
      </div>
    </div>
  );
};

export default Onboarding;