import React from "react";
import { BsFire } from "react-icons/bs";

const Navbar = () => {

   
    
    
    const links = <>
        <li><a className="navLinks" href="#"><span>Expertises</span></a></li>
        <li><a className="navLinks" href="#"><span>Work</span></a></li>
        <li><a className="navLinks" href="#"><span>About</span></a></li>
        <li><a className="navLinks" href="#"><span>Contact</span></a></li>
    </>
  return (
    <div className="max-lg:collapse lg:mb-48 w-full rounded-md py-4">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>
      <div className="collapse-title navbar">
        <div className="navbar-start">
          <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <img src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3404e57460370b97757c_7719b29e960423bac19acd325c901392_gh-logo-blue.svg" alt="logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal rounded-xl font-bold bg-white text-lg">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn bg-[#FCB8FA] h-12 font-bold rounded-xl text-lg transition-transform duration-500 ease-in-out skew-0 hover:-skew-4">Get Results <span className="bg-amber-50 rounded-lg p-2 hover:p-1 text-xl text-orange-500"><BsFire /></span></button>
        </div>
      </div>

      <div className="collapse-content lg:hidden z-1">
        <ul className="menu">
          {links}
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
