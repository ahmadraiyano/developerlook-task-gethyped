import React from 'react';

const VidCard = ({vidLink}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
      <video src={vidLink}></video>
    </div>
    );
};

export default VidCard;