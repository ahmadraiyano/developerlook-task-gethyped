import React from "react";
import Card from "./Card";
import VidCard from "./VidCard";

const Hero = () => {
    const vidLink = 'https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4'
    const vidLink2 = 'https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4'
  return (
    <div>
      <div>
        <h1 className="font-bold text-8xl">
          Get Hyped. Get <br /> Noticed. Get Results.
        </h1>
        <p className="text-3xl font-semibold">
          Klaar met gokken op content <br />
          die niets oplevert?
        </p>
      </div>
      <div className="flex justify-between mt-10 mb-30">
        <div className="-rotate-10 hover:rotate-0  transition-transform duration-500 ease-in-out">
          <Card></Card>
        </div>
        <div className="rotate-10 hover:rotate-0  transition-transform duration-500 ease-in-out">
          <VidCard vidLink={vidLink}></VidCard>
        </div>
        <div className="-rotate-10 hover:rotate-0  transition-transform duration-500 ease-in-out">
          <Card></Card>
        </div>
        <div className="rotate-10 hover:rotate-0  transition-transform duration-500 ease-in-out">
          <VidCard vidLink={vidLink2}></VidCard>
        </div>
      </div>
    </div>
  );
};

export default Hero;
