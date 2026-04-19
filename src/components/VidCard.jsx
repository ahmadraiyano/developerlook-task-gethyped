import React from 'react';

const VidCard = ({vidLink}) => {
    return (
        <div className=" w-96 mx-auto border-8 border-white rounded-[44px] aspect-3.5/5 rotate-3">
          <video
            className="w-full h-full object-cover rounded-[36px]"
            src={vidLink}
            autoPlay
            muted
            loop
          />
        </div>
    );
};

export default VidCard;