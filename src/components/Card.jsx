import React from "react";

const Card = ({cardInfo}) => {
  console.log(cardInfo)
  return (
    <div className={`w-96 mx-auto border-8 p-10 ${cardInfo.bg} border-white rounded-[44px] aspect-3.5/5 rotate-3 flex flex-col justify-between`}>
      <div>
        <p className="font-bold text-7xl">{cardInfo.stat}</p>
      </div>
      <div>
        <h2 className="font-semibold text-3xl">{cardInfo.title}</h2>
        <div className="divider m-0"></div>
        <p className="font-semibold text-xl">{cardInfo.para}</p>
      </div>
          
        </div>
  );
};

export default Card;
