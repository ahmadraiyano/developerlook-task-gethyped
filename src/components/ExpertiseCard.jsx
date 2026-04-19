import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ExpertiseCard = ({ card }) => {
  const { heading, para, title, video, btnText, bg, id } = card;
  return (
    <div
      id="expertise"
      className={`flex ${bg} justify-between p-20 rounded-4xl`}
    >
      <div className="flex flex-col justify-around">
        <div>
          <p className="badge bg-[#EAE4D8] text-2xl p-5 mb-4">Expertise</p>
          <h2 className="font-bold text-9xl">{heading}</h2>
        </div>
        <div className="w-xl">
          <h3 className="font-semibold text-4xl">{title}</h3>
          <p className="text-3xl mb-4">{para}</p>
          <button className="btn btn-outline text-xl">
            {btnText}
            <span className="bg-black text-white p-1 rounded-md">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="font-semibold text-9xl text-[#EAE4D8]">0{id}</p>
        <div className="w-full max-w-sm mx-auto border-8 border-white rounded-[44px] aspect-3.5/5 rotate-3">
          <video
            className="w-full h-full object-cover rounded-[36px]"
            src={video}
            autoPlay
            muted
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default ExpertiseCard;
