import { useState } from 'react';
import { Lightbulb, HelpCircle, Home } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: <Lightbulb className="w-16 h-16" />,
      title: "Welcome to iService!",
      description: "Your one-stop platform to find trusted professionals for any job — big or small.",
      iconColor: "text-blue-500",
      accentColor: "bg-blue-500"
    },
    {
      icon: <HelpCircle className="w-16 h-16" />,
      title: "Book at your convenience",
      description: "Let's make your life easier — one service at a time.",
      iconColor: "text-blue-400",
      accentColor: "bg-blue-400"
    },
    {
      icon: <Home className="w-16 h-16" />,
      title: "Work done hassle-free!",
      description: "Get instant access to skilled experts, book effortlessly, and track your tasks.",
      iconColor: "text-blue-500",
      accentColor: "bg-blue-500"
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const navigate = useNavigate();

  const handleFinish = () => {
    navigate("/welcome"); // or any route you want
  };
  

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Status Bar */}

        {/* Slideshow Content */}
        <div className="relative h-[600px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                index === currentSlide
                  ? 'translate-x-0 opacity-100'
                  : index < currentSlide
                  ? '-translate-x-full opacity-0'
                  : 'translate-x-full opacity-0'
              }`}
            >
              {/* Icon Circle */}
              <div className="flex justify-center pt-12 pb-8">
                <div className="relative w-64 h-64 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center">
                  <div className={`${slide.iconColor} transform hover:scale-110 transition-transform duration-300`}>
                    {slide.icon}
                  </div>
                  {/* Decorative elements */}
                  {index === 0 && (
                    <>
                      <div className="absolute top-8 left-12 w-2 h-8 bg-blue-400 rounded-full transform -rotate-12"></div>
                      <div className="absolute top-12 left-8 w-2 h-6 bg-blue-400 rounded-full transform -rotate-45"></div>
                      <div className="absolute top-6 left-20 w-2 h-4 bg-blue-400 rounded-full transform rotate-12"></div>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <div className="absolute top-16 left-16 text-4xl text-blue-300 transform -rotate-12">?</div>
                      <div className="absolute top-20 right-20 text-3xl text-blue-300 transform rotate-12">?</div>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <div className="absolute bottom-16 right-24 w-8 h-8 bg-blue-400 rounded"></div>
                      <div className="absolute bottom-20 right-16 w-6 h-6 bg-blue-400" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
                      <div className="absolute bottom-12 left-20 w-12 h-2 bg-gray-800"></div>
                      <div className="absolute bottom-10 left-16 w-20 h-2 bg-gray-800"></div>
                    </>
                  )}
                </div>
              </div>

              {/* Text Content */}
              <div className="px-8 text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  {slide.title}
                </h1>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {slide.description}
                </p>
              </div>

              {/* Pagination Dots */}
              <div className="absolute bottom-32 left-0 right-0 flex justify-center gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide ? `${slide.accentColor} w-8` : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  ></button>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="absolute bottom-12 left-0 right-0 px-8">
                <div className="flex justify-between items-center">
                  {currentSlide > 0 ? (
                    <button
                      onClick={prevSlide}
                      className="text-blue-500 font-semibold hover:text-blue-600 transition-colors"
                    >
                      Back
                    </button>
                  ) : (
                    <div></div>
                  )}
                  
                  {currentSlide < slides.length - 1 ? (
                    <button
                      onClick={nextSlide}
                      className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors shadow-lg"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      onClick={handleFinish}
                      className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors shadow-lg"
                    >
                      Get Started
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;