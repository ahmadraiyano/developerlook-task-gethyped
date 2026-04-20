import React, { forwardRef } from "react";
import { FaArrowRight } from "react-icons/fa";

const ExpertiseCard = forwardRef(({ card }, ref) => {
  const { heading, para, title, video, btnText, bg, id } = card;

  return (
    <div
      ref={ref}
      id="expertise"
      className={`flex flex-col md:flex-row ${bg} justify-between items-center md:items-end gap-6 sm:gap-8 md:gap-12 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 rounded-2xl sm:rounded-3xl md:rounded-4xl`}
    >
      {/* Left Content Section */}
      <div className="flex flex-col justify-around w-full md:w-6/12 gap-6 sm:gap-8 md:gap-12">
        {/* Badge and Heading */}
        <div className="w-full">
          <p className="badge bg-[#EAE4D8] text-base sm:text-lg md:text-2xl p-3 sm:p-4 md:p-5 mb-3 sm:mb-4 md:mb-6 font-semibold">
            Expertise
          </p>
          <h2 className="font-black text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight md:leading-snug">
            {heading}
          </h2>
        </div>

        {/* Title, Description, and Button */}
        <div className="w-full max-w-2xl">
          <h3 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug md:leading-tight mb-3 sm:mb-4 md:mb-6">
            {title}
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed mb-4 sm:mb-6 md:mb-8 text-gray-700">
            {para}
          </p>
          <button className="btn btn-outline h-11 sm:h-12 md:h-13 rounded-lg sm:rounded-xl text-base sm:text-lg md:text-xl transition-all duration-500 ease-in-out skew-0 hover:-skew-4 hover:shadow-lg flex items-center gap-2">
            {btnText}
            <span className="bg-black text-white p-1.5 rounded-md flex items-center justify-center">
              <FaArrowRight size={14} />
            </span>
          </button>
        </div>
      </div>

      {/* Right Content Section - Video and ID */}
      <div className="flex flex-col items-center md:items-end w-full md:w-5/12 gap-4 sm:gap-6 md:gap-8">
        {/* ID Number */}
        <p className="font-black text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#EAE4D8] leading-none">
          0{id}
        </p>

        {/* Video Container */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg border-4 sm:border-6 md:border-8 border-white rounded-2xl sm:rounded-3xl md:rounded-[44px] aspect-video sm:aspect-3.5/5 rotate-0 sm:rotate-2 md:rotate-3 shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src={video}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </div>
  );
});

ExpertiseCard.displayName = "ExpertiseCard";

export default ExpertiseCard;