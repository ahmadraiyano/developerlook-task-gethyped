import React from 'react';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';

const Section = () => {
    return (
        <div>
            <div className='w-8/12 ml-20'>
                <h2 className='text-6xl font-semibold'>
                    Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
                </h2>
            </div>
            <div className='flex justify-between items-end'>
                <div className='w-3/12'>
                    <img className='rounded-3xl'  src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril.webp" alt="person" />
                </div>
                <div className='w-5/12 text-2xl font-semibold'>
                    <p>We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie. Nooit meer content zonder resultaat.</p>
                    <button className='btn btn-outline text-xl'>Leer ons kennen <span className='bg-black text-white p-1 rounded-md'><FaArrowRight /></span></button>
                </div>
                <div className='w-3/12 flex justify-center'>
                    <a href="#expertise" className='btn btn-outline text-orange-400 text-xl'><FaArrowDown /></a>
                </div>
            </div>
        </div>
    );
};

export default Section;