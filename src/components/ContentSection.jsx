import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

const ContentSection = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);

  const handleMouseEnter = (ref) => {
    ref.current?.play();
  };

  const handleMouseLeave = (ref) => {
    ref.current?.pause();
  };
  return (
    <div className="mt-20">
      <div className="w-4/12 ml-20">
        <h2 className="text-8xl font-semibold">Content dat scoort.</h2>
        <div className="w-full text-2xl font-semibold">
          <p className="my-4">
            Wij vertellen jouw verhaal. Op een manier die écht past bij jouw
            doelgroep. Met creatieve content die werkt en het verschil maakt.
          </p>
          <button className="btn btn-outline text-xl transition-transform duration-500 ease-in-out skew-0 hover:-skew-4">
            Bekijk al ons werk{" "}
            <span className="bg-black text-white p-1 rounded-md">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="mt-60">
          <div
            className="w-full max-w-md mx-auto border-8 border-[#FA5424] rounded-[44px] aspect-4/5 rotate-0 hover:-rotate-3"
            onMouseEnter={() => handleMouseEnter(videoRef1)}
            onMouseLeave={() => handleMouseLeave(videoRef1)}
          >
            <video
              ref={videoRef1}
              className="w-full h-full object-cover rounded-[36px]"
              src="https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4"
              muted
              loop
            />
            <div className="bg-[#FA5424] absolute p-4 rounded-2xl bottom-8 left-8 text-white w-10/12">
              <p className="font-bold text-3xl">
                Van nul naar vol, <br /> binnen 3 weken
              </p>
              <button className="btn btn-outline border-0 bg-[#FC997B] mt-4">
                Bullit
              </button>
            </div>
          </div>
        </div>
        <div className="mt-30">
          <div
            className="w-full max-w-md mx-auto border-8 border-[#0D8DFF] rounded-[44px] aspect-4/5 rotate-0 hover:-rotate-3"
            onMouseEnter={() => handleMouseEnter(videoRef2)}
            onMouseLeave={() => handleMouseLeave(videoRef2)}
          >
            <video
              ref={videoRef2}
              className="w-full h-full object-cover rounded-[36px]"
              src="https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4"
              muted
              loop
            />
            <div className="bg-[#0D8DFF] absolute p-4 rounded-2xl bottom-8 left-8 text-white w-10/12">
              <p className="font-bold text-3xl">
                Zacht in smaakt, <br /> sterk in beeld
              </p>
              <button className="btn btn-outline border-0 bg-[#28AAFF] mt-4">
                Roasta
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className="w-full max-w-md mx-auto border-8 border-[#33C791] rounded-[44px] aspect-4/5 rotate-0 hover:-rotate-3 relative"
            onMouseEnter={() => handleMouseEnter(videoRef3)}
            onMouseLeave={() => handleMouseLeave(videoRef3)}
          >
            <video
              ref={videoRef3}
              className="w-full h-full object-cover rounded-[36px]"
              src="https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4"
              muted
              loop
            />
            <div className="bg-[#33C791] absolute p-4 rounded-2xl bottom-8 left-8 text-white w-10/12">
              <p className="font-bold text-3xl">
                Content die echt <br /> smaakt (en raakt)
              </p>
              <button className="btn btn-outline border-0 bg-[#73E2B6] mt-4">
                Loco
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
