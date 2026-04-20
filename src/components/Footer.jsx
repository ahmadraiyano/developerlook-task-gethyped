import React from 'react';
import { BsFire } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import badge from "../assets/badge.png"
import { GrLinkedinOption } from 'react-icons/gr';
import { IoLogoTiktok } from 'react-icons/io5';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='mt-80'>
            <div className='text-center'>
                <h2 className='font-bold text-4xl md:text-7xl lg:text-9xl'>Let's Get Hyped!</h2>
                <div className='flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mt-6'>
                    <button className=' h-12 rounded-xl btn btn-outline text-xl transition-transform duration-500 ease-in-out skew-0 hover:-skew-4'>Mail ons direct <span className='bg-black text-white p-1 rounded-md'><IoMdMail /></span></button>
                    <button className=" btn bg-orange-500 h-12 font-bold rounded-xl text-lg transition-transform duration-500 ease-in-out skew-0 hover:-skew-4">Get Results <span className="bg-amber-50 rounded-lg p-2 text-xl text-orange-500"><BsFire /></span></button>
                </div>
            </div>
            <div className='relative'>
                <div className='shape bg-[#EAE4D8] w-full rounded-2xl relative'>
                    <img
  className="absolute top-24 md:top-auto md:bottom-1 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-1 w-44 lg:w-72"
  src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3404e57460370b97757c_7719b29e960423bac19acd325c901392_gh-logo-blue.svg"
  alt="logo"
/>
                    <div className='absolute bottom-5 left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 md:right-10'>
                        <div className='flex flex-col sm:flex-row gap-5 lg:gap-20'>
                            <div className='flex flex-col justify-around gap-y-2 md:gap-y-0'>
                                <ul className='flex gap-2 rounded-2xl font-bold text-md lg:text-lg'>
                                    <li><a className="navLinks bg-white p-1 lg:p-2" href="#"><span>Expertises</span></a></li>
                                    <li><a className="navLinks bg-white p-1 lg:p-2" href="#"><span>Work</span></a></li>
                                    <li><a className="navLinks bg-white p-1 lg:p-2" href="#"><span>About</span></a></li>
                                    <li><a className="navLinks bg-white p-1 lg:p-2" href="#"><span>Contact</span></a></li>
                                </ul>
                                <div className='flex gap-4 items-center text-lg lg:text-2xl'>
                                    <p>Follow Us</p>
                                    <a className='bg-white rounded-full p-1 lg:p-2' href="#"><GrLinkedinOption /></a>
                                    <a className='bg-white rounded-full p-1 lg:p-2' href="#"><IoLogoTiktok /></a>
                                    <a className='bg-white rounded-full p-1 lg:p-2' href="#"><FaInstagram /></a>
                                    <a className='bg-white rounded-full p-1 lg:p-2' href="#"><FaYoutube /></a>
                                </div>
                                <div className='flex justify-between'>
                                    <p>©2026 Get Hyped</p>
                                    <p>©2026 Design by Dylan</p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <div className='mb-4'>
                                    <h3 className='font-bold text-md lg:text-xl'>Contact</h3>
                                    <p>info@gethyped.nl</p>
                                    <p>+31 6 1533 7496</p>
                                </div>
                                <div className='mb-4'>
                                    <h3 className='font-bold text-md lg:text-xl'>Address</h3>
                                    <p>Beltrumsestraat 6, <br /> 7141 AL Groenlo</p>
                                </div>
                                <div>
                                    <p>Privacyvoorwaarden</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <img className='absolute hidden md:block top-15 lg:top-8 right-15 w-48' src={badge} alt="badge" />
            </div>
        </div>
    );
};

export default Footer;