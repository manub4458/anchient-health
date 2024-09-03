"use client"
import { useState, useEffect } from 'react';

const testimonials = [
  { text: "Himalaya face wash, first time try it, feels good and complete, will give it more days to see the result.", author: "Vivek Dhanda" },
  { text: "I bought it from my college. Loved the product!", author: "Deepak" },
  { text: "Best product with the best service.", author: "Vivek Dhanda" },
  { text: "Tried their hemp shampoo! Best one for my scalp and dandruff!", author: "Riddhijit" },
  { text: "The founders are great. They provide personal service.", author: "Suhail" },
  { text: "Great service and quality products.", author: "Manoj" },
  { text: "I recommend it to all my friends.", author: "Ravi" },
  { text: "I recommend it to all my friends.", author: "Ravi" },
  { text: "I recommend it to all my friends.", author: "Ravi" },
  { text: "I recommend it to all my friends.", author: "Ravi" },
  { text: "I recommend it to all my friends.", author: "Ravi" },
  { text: "I recommend it to all my friends.", author: "Ravi" },
 

];

const ReviewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full h-[415.19px]  mx-auto">
      <h2 className="text-center text-2xl font-bold mb-8">HEMP OPINION!</h2>
      
      {/* Slider Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${-currentIndex * 25}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-1/4 p-4 flex-shrink-0 text-center"
            >
              <div className="mb-4">
                <div className="flex justify-center">
                  {Array(5).fill().map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .288l2.833 8.718H24l-7.167 5.167 2.833 8.718L12 17.846l-7.167 5.167 2.833-8.718L0 9.006h9.167z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="italic text-gray-600">{testimonial.text}</p>
              <p className="mt-4 font-semibold">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows Positioned at the Center Below the Slider */}
      <div className="flex justify-center items-center mt-8 space-x-4">
      <button
          onClick={goToPreviousSlide}
          className="p-2 rounded-full bg-transparent"
        >
          <svg
            className="w-4 h-4 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNextSlide}
          className="p-2 rounded-full bg-transparent"
        >
          <svg
            className="w-4 h-4 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ReviewSlider;
