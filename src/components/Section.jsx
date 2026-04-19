import React from 'react';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';

const SectionResponsive = () => {
    return (
        <div className='w-full py-16 sm:py-20 md:py-24 lg:py-30 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
            {/* Heading Section */}
            <div className='w-full mb-12 sm:mb-16 md:mb-20 lg:mb-24'>
                <h2 className='text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight sm:leading-snug md:leading-snug lg:leading-tight max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl'>
                    Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
                </h2>
            </div>

            {/* Mobile Layout (xs - sm) */}
            <div className='sm:hidden flex flex-col gap-8'>
                {/* Image */}
                <div className='w-full flex justify-center'>
                    <img 
                        className='rounded-2xl w-full max-w-sm object-cover' 
                        src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril.webp" 
                        alt="person" 
                    />
                </div>

                {/* Text Content */}
                <div className='w-full'>
                    <p className='text-base sm:text-lg font-medium text-gray-700 leading-relaxed mb-6'>
                        We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie. Nooit meer content zonder resultaat.
                    </p>
                    <button className='w-full sm:w-auto h-12 rounded-xl btn btn-outline text-base sm:text-lg transition-transform duration-500 ease-in-out skew-0 hover:-skew-4 flex items-center justify-center gap-2'>
                        Leer ons kennen 
                        <span className='bg-black text-white p-1.5 rounded-md'>
                            <FaArrowRight size={14} />
                        </span>
                    </button>
                </div>

                {/* Scroll Arrow */}
                <div className='w-full flex justify-center mt-4'>
                    <a href="#expertise" className='btn btn-outline text-orange-400 text-xl p-3'>
                        <FaArrowDown />
                    </a>
                </div>
            </div>

            {/* Tablet Layout (sm - md) */}
            <div className='hidden sm:flex md:hidden flex-col gap-8 lg:gap-12'>
                {/* Image and Text Row */}
                <div className='flex flex-col sm:flex-row gap-6 sm:gap-8 items-start'>
                    {/* Image */}
                    <div className='w-full sm:w-5/12 flex justify-center sm:justify-start'>
                        <img 
                            className='rounded-2xl sm:rounded-3xl w-full max-w-sm object-cover' 
                            src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril.webp" 
                            alt="person" 
                        />
                    </div>

                    {/* Text Content */}
                    <div className='w-full sm:w-7/12'>
                        <p className='text-lg sm:text-xl md:text-2xl font-medium text-gray-700 leading-relaxed mb-6'>
                            We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie. Nooit meer content zonder resultaat.
                        </p>
                        <button className='h-12 sm:h-13 rounded-xl btn btn-outline text-lg sm:text-xl transition-transform duration-500 ease-in-out skew-0 hover:-skew-4 flex items-center justify-center sm:justify-start gap-2'>
                            Leer ons kennen 
                            <span className='bg-black text-white p-1.5 rounded-md'>
                                <FaArrowRight />
                            </span>
                        </button>
                    </div>
                </div>

                {/* Scroll Arrow */}
                <div className='w-full flex justify-center sm:justify-start mt-4'>
                    <a href="#expertise" className='btn btn-outline text-orange-400 text-xl p-3'>
                        <FaArrowDown />
                    </a>
                </div>
            </div>

            {/* Desktop Layout (md+) */}
            <div className='hidden md:flex flex-col gap-12 lg:gap-16'>
                {/* Main Content Row */}
                <div className='flex justify-between items-end gap-6 lg:gap-8'>
                    {/* Image - Left */}
                    <div className='w-3/12 flex justify-start'>
                        <img 
                            className='rounded-3xl w-9/12 object-cover shadow-lg hover:shadow-2xl transition-shadow duration-300' 
                            src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril.webp" 
                            alt="person" 
                        />
                    </div>

                    {/* Text Content - Center */}
                    <div className='w-4/12'>
                        <p className='text-2xl lg:text-3xl font-semibold text-gray-800 leading-relaxed mb-6'>
                            We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie. Nooit meer content zonder resultaat.
                        </p>
                        <button className='h-12 rounded-xl btn btn-outline text-lg lg:text-xl transition-transform duration-500 ease-in-out skew-0 hover:-skew-4 flex items-center gap-2'>
                            Leer ons kennen 
                            <span className='bg-black text-white p-1.5 rounded-md'>
                                <FaArrowRight />
                            </span>
                        </button>
                    </div>

                    {/* Scroll Arrow - Right */}
                    <div className='w-3/12 flex justify-end'>
                        <a href="#expertise" className='btn btn-outline text-orange-400 text-2xl p-3 hover:bg-orange-50 transition-colors duration-300'>
                            <FaArrowDown />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionResponsive;