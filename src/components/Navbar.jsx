import React, { useState, useEffect } from "react";
import { BsFire } from "react-icons/bs";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show sticky nav when scrolling up AND page is scrolled down
      if (currentScrollY < lastScrollY && currentScrollY > 100) {
        setIsSticky(true);
      } 
      // Hide sticky nav when scrolling down OR at the top
      else if (currentScrollY > lastScrollY || currentScrollY === 0) {
        setIsSticky(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const links = <>
    <li><a className="navLinks" href="#"><span>Expertises</span></a></li>
    <li><a className="navLinks" href="#"><span>Work</span></a></li>
    <li><a className="navLinks" href="#"><span>About</span></a></li>
    <li><a className="navLinks" href="#"><span>Contact</span></a></li>
  </>

  return (
    <>
      {/* Main Navbar */}
      <div className="max-lg:collapse lg:mb-48 w-full rounded-md py-4">
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
        <label
          htmlFor="navbar-1-toggle"
          className="fixed inset-0 hidden max-lg:peer-checked:block"
        ></label>
        <div className="collapse-title navbar">
          <div className="navbar-start">
            
            <img src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3404e57460370b97757c_7719b29e960423bac19acd325c901392_gh-logo-blue.svg" alt="logo" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal rounded-xl font-bold bg-white text-lg">
              {links}
            </ul>
          </div>
          <div className="navbar-end ">
            <button className=" hidden lg:flex btn bg-[#FCB8FA] h-12 font-bold rounded-xl text-lg transition-transform duration-500 ease-in-out skew-0 hover:-skew-4">Get Results <span className="bg-amber-50 rounded-lg p-2  text-xl text-orange-500"><BsFire /></span></button>
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
          </div>
        </div>

        <div className="collapse-content lg:hidden z-1">
          <ul className="menu">
            {links}
            <button className="btn bg-[#FCB8FA] h-12 font-bold rounded-xl text-lg transition-transform duration-500 ease-in-out skew-0 hover:-skew-4">Get Results <span className="bg-amber-50 rounded-lg p-2 hover:p-1 text-xl text-orange-500"><BsFire /></span></button>
          </ul>
        </div>
      </div>

      {/* Sticky Navbar (appears on scroll up) */}
      <div
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out transform ${
          isSticky ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-11/12 mx-auto rounded-md py-4">
          <div className="navbar">
            <div className="navbar-start">
              
              <img src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3404e57460370b97757c_7719b29e960423bac19acd325c901392_gh-logo-blue.svg" alt="logo" />
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal rounded-xl font-bold bg-white text-lg">
                {links}
              </ul>
            </div>
            <div className="navbar-end">
              <button className="hidden lg:flex btn bg-[#FCB8FA] h-12 font-bold rounded-xl text-lg transition-transform duration-500 ease-in-out skew-0 hover:-skew-4">Get Results <span className="bg-amber-50 rounded-lg p-2 text-xl text-orange-500"><BsFire /></span></button>
              <label htmlFor="sticky-navbar-toggle" className="btn btn-ghost lg:hidden">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;