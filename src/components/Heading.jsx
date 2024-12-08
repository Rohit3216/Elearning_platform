import React, { useState } from "react";






function Heading() {
  // State to track the current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Dummy data for slides (can be expanded as needed)
  const slides = [
    {
      title: "Big sale. Even bigger skills.",
      description: "Make your Black Friday shopping count with courses as low as $9.99. Sale ends Nov 29.",
      image: "https://plus.unsplash.com/premium_photo-1681666713680-fb39c13070f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Learn new skills today!",
      description: "Black Friday deals on courses to help you upskill and grow.",
      image: "https://media.istockphoto.com/id/638620962/photo/sifting-through-streams-of-data.webp?a=1&b=1&s=612x612&w=0&k=20&c=ioi1MpgcJeKtncsX6gPWiHtiLW0uGAXnSZE2LE3-NrM=",
    },
    {
      title: "Upskill your career.",
      description: "Grab courses for just $9.99 and transform your future today!",
      image: "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
    },
  ];

  // Handlers for navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="flex justify-center">
      <div className="relative w-[90%]  text-white  flex items-center overflow-hidden border-2 border-red-700 gap-20">
        {/* Left Navigation */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 z-10"
        >
          &lt;
        </button>

        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out  "
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Slide effect
            width: `${slides.length * 100}%`, // Dynamic width for all slides
          }}
        >
          {slides.map((slide, index) => {
            console.log(index + 100)

            return <div
              key={index}
              className={`w-full flex-shrink-0 flex flex-col md:flex-row items-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-8 justify-center h-[400px] bg-blue-500`}  
            >
              {/* Text Content */}
              <div className="max-w-lg bg-white text-black p-8">
                <h1 className="text-4xl font-bold mb-2">{slide.title}</h1>
                <p className="text-lg">{slide.description}</p>
                <div>
                  <button className="w-28 h-10 bg-black text-white items-center">Learn more</button>
                </div>
              </div>
              {/* Image */}
              <div className="relative">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-72 h-72"
                />
              </div>
            </div>
          })}
        </div>

        {/* Right Navigation */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 z-10"
        >
          &gt;
        </button>
      </div>
    </section>
  );
}

export default Heading;
