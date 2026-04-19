import React from "react";
import Card from "./Card";
import VidCard from "./VidCard";

const Hero = () => {
  const vidLink = 'https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4'
  const vidLink2 = 'https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4'

  const cardInfo = [
    {
      stat: "10M+",
      title: "Organische views",
      para: "Groei door slimme content",
      bg: "bg-[#0D8DFF]"
    },
    {
      stat: "30+",
      title: "Merken geholpen",
      para: "Van start-up tot multinational",
      bg: "bg-[#33C791]"
    }
  ]

  return (
    <div className="w-full min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-16 lg:py-20">
      {/* Text Content Section */}
      <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 max-w-5xl">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight sm:leading-snug md:leading-snug lg:leading-tight mb-4 sm:mb-6 md:mb-8">
          Get Hyped. Get <br className="hidden sm:block" /> Noticed. Get Results.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 leading-relaxed">
          Klaar met gokken op content <br className="hidden sm:block" />
          die niets oplevert?
        </p>
      </div>

      {/* Cards Grid Container */}
      <div className="w-full">
        {/* Mobile Layout (xs - sm) */}
        <div className="sm:hidden grid grid-cols-1 gap-6">
          <div className="flex justify-center">
            <Card cardInfo={cardInfo[0]} />
          </div>
          <div className="flex justify-center">
            <VidCard vidLink={vidLink} />
          </div>
          <div className="flex justify-center">
            <Card cardInfo={cardInfo[1]} />
          </div>
          <div className="flex justify-center">
            <VidCard vidLink={vidLink2} />
          </div>
        </div>

        {/* Tablet Layout (md - lg) */}
        <div className="hidden sm:grid md:hidden grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          <div className="-rotate-6 hover:rotate-0 transition-transform duration-500 ease-in-out">
            <Card cardInfo={cardInfo[0]} />
          </div>
          <div className="rotate-6 hover:rotate-0 transition-transform duration-500 ease-in-out">
            <VidCard vidLink={vidLink} />
          </div>
          <div className="-rotate-6 hover:rotate-0 transition-transform duration-500 ease-in-out">
            <Card cardInfo={cardInfo[1]} />
          </div>
          <div className="rotate-6 hover:rotate-0 transition-transform duration-500 ease-in-out">
            <VidCard vidLink={vidLink2} />
          </div>
        </div>

        {/* Desktop Layout (lg+) */}
        <div className="hidden md:flex justify-between gap-4 lg:gap-6 flex-wrap">
          <div className="-rotate-10 hover:rotate-0 transition-transform duration-500 ease-in-out flex-1 min-w-[200px] flex justify-center">
            <Card cardInfo={cardInfo[0]} />
          </div>
          <div className="rotate-10 hover:rotate-0 transition-transform duration-500 ease-in-out flex-1 min-w-[200px] flex justify-center">
            <VidCard vidLink={vidLink} />
          </div>
          <div className="-rotate-10 hover:rotate-0 transition-transform duration-500 ease-in-out flex-1 min-w-[200px] flex justify-center">
            <Card cardInfo={cardInfo[1]} />
          </div>
          <div className="rotate-10 hover:rotate-0 transition-transform duration-500 ease-in-out flex-1 min-w-[200px] flex justify-center">
            <VidCard vidLink={vidLink2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;