import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

const ContentSection = () => {
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    const vid = videoRefs.current[index];
    if (vid) {
      vid.currentTime = 0;
      vid.play();
    }
  };

  const handleMouseLeave = (index) => {
    videoRefs.current[index]?.pause();
  };

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 640;

  const videoCardsData = [
    {
      borderColor: "border-[#FA5424]",
      bgColor: "bg-[#FA5424]",
      buttonColor: "bg-[#FC997B]",
      video:
        "https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4",
      title: "Van nul naar vol,",
      subtitle: "binnen 3 weken",
      label: "Bullit",
    },
    {
      borderColor: "border-[#0D8DFF]",
      bgColor: "bg-[#0D8DFF]",
      buttonColor: "bg-[#28AAFF]",
      video:
        "https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4",
      title: "Zacht in smaakt,",
      subtitle: "sterk in beeld",
      label: "Roasta",
    },
    {
      borderColor: "border-[#33C791]",
      bgColor: "bg-[#33C791]",
      buttonColor: "bg-[#73E2B6]",
      video:
        "https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4",
      title: "Content die echt",
      subtitle: "smaakt (en raakt)",
      label: "Loco",
    },
  ];

  return (
    <div className="w-full py-16 px-4 md:px-10 lg:px-16">
      {/* Header */}
      <div className="mb-16 max-w-4xl">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Content dat scoort.
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Wij vertellen jouw verhaal. Op een manier die écht past bij jouw
          doelgroep. Met creatieve content die werkt en het verschil maakt.
        </p>

        <button className="btn btn-outline flex items-center gap-2 hover:-skew-3 transition-all">
          Bekijk al ons werk
          <span className="bg-black text-white p-1 rounded">
            <FaArrowRight size={14} />
          </span>
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row md:justify-around gap-10">
        {videoCardsData.map((card, index) => (
          <div
            key={index}
            className={`${
              index === 0
                ? "md:mt-40"
                : index === 1
                ? "md:mt-20"
                : ""
            }`}
          >
            <div
              className={`w-full max-w-sm ${card.borderColor} border-8 rounded-[40px] aspect-[4/5] relative overflow-hidden cursor-pointer transition hover:-rotate-2 shadow-lg hover:shadow-2xl`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="w-full h-full object-cover rounded-[32px]"
                src={card.video}
                muted
                loop
                playsInline
                autoPlay={isMobile}
                preload="none"
              />

              <div
                className={`${card.bgColor} absolute bottom-6 left-6 p-4 rounded-xl text-white w-10/12`}
              >
                <p className="font-bold text-xl md:text-2xl leading-snug">
                  {card.title} <br /> {card.subtitle}
                </p>

                <button
                  className={`mt-3 px-3 py-1 rounded ${card.buttonColor} text-black font-semibold`}
                >
                  {card.label}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentSection;