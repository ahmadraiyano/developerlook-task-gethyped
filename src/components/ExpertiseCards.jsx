import React, { use } from 'react';
import ExpertiseCard from './ExpertiseCard';



const ExpertiseCards = ({dataPromise}) => {
    const data = use(dataPromise)
    return (
        <div>
            {data.map(card=> <ExpertiseCard key={card.id} card={card}></ExpertiseCard>)}
        </div>
    );
};

export default ExpertiseCards;