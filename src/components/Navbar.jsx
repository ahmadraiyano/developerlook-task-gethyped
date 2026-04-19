import React, { useRef, useState, useEffect } from "react";
import { BsFire } from "react-icons/bs";
import gsap from "gsap";

const AnimatedNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const navRef = useRef(null);
  const lastScrollRef = useRef(0);

  // Desktop navbar scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const isScrollingDown = currentScroll > lastScrollRef.current;
      lastScrollRef.current = currentScroll;

      if (currentScroll > 100) {
        // Scrolling down - hide navbar
        if (isScrollingDown) {
          gsap.to(navRef.current, {
            yPercent: -120,
            duration: 0.4,
            ease: "power2.inOut",
          });
        }
        // Scrolling up - show navbar
        else {
          gsap.to(navRef.current, {
            yPercent: 0,
            duration: 0.4,
            ease: "power2.inOut",
          });
        }
      } else {
        // At top - always show
        gsap.to(navRef.current, {
          yPercent: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      // Animate out
      gsap.to(menuRef.current, {
        yPercent: -107,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          setIsMenuOpen(false);
        },
      });
    } else {
      // Animate in
      setIsMenuOpen(true);
      gsap.fromTo(
        menuRef.current,
        { yPercent: -120 },
        {
          yPercent: 0,
          duration: 0.6,
          ease: "power2.inOut",
        }
      );
    }
  };

  const handleNavLinkClick = () => {
    // Close menu when link is clicked
    gsap.to(menuRef.current, {
      yPercent: -120,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        setIsMenuOpen(false);
      },
    });
  };

  return (
    <>
      {/* Main Desktop Navbar */}
      <nav ref={navRef} className="fixed top-5 left-0 right-0 w-full z-40 bg-transparent">
        <div className="w-11/12 mx-auto">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="shrink-0">
              <img
                src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3404e57460370b97757c_7719b29e960423bac19acd325c901392_gh-logo-blue.svg"
                alt="logo"
                className=""
              />
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-4 bg-white text-black rounded-2xl p-1">
              <a
                href="#expertises"
                className=" font-semibold hover:bg-gray-400 rounded-lg p-4"
              >
                Expertises
              </a>
              <a
                href="#work"
                className=" font-semibold hover:bg-gray-400 rounded-lg p-4"
              >
                Work
              </a>
              <a
                href="#about"
                className=" font-semibold hover:bg-gray-400 rounded-lg p-4"
              >
                About
              </a>
              <a
                href="#contact"
                className=" font-semibold hover:bg-gray-400 rounded-lg p-4"
              >
                Contact
              </a>
            </div>

            {/* Desktop CTA Button */}
            <button className="hidden lg:flex items-center gap-2 px-6 py-3 bg-[#FCB8FA] text-gray-900 font-bold rounded-xl transition-transform duration-500 ease-in-out skew-0 hover:-skew-4">
              Get Results
              <span className="bg-amber-50 rounded-lg p-1.5 text-lg text-orange-500">
                <BsFire />
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              ref={toggleRef}
              onClick={handleMenuToggle}
              className={`lg:hidden p-3 rounded-lg ${isMenuOpen? "bg-[#FCB8FA]" : "bg-white"} transition-colors text-black drop-shadow-md`}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ?
                (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                ):
                 (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Page Menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 top-16 z-30 lg:hidden bg-[#FCB8FA] translate-y-full overflow-hidden"
        style={{ height: "calc(100vh)" }}
      >
        <div className="h-full flex flex-col items-center justify-evenly px-4">
          {/* Navigation Links */}
          <nav className="text-center space-y-4">
            <a
              href="#expertises"
              onClick={handleNavLinkClick}
              className="block text-3xl font-bold text-black bg-white p-2 rounded-xl"
            >
              Expertises
            </a>
            <a
              href="#work"
              onClick={handleNavLinkClick}
              className="block text-3xl font-bold text-black bg-white p-2 rounded-xl"
            >
              Work
            </a>
            <a
              href="#about"
              onClick={handleNavLinkClick}
              className="block text-3xl font-bold text-black bg-white p-2 rounded-xl"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={handleNavLinkClick}
              className="block text-3xl font-bold text-black bg-white p-2 rounded-xl"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <button
            onClick={handleNavLinkClick}
            className=" px-8 sm:px-10 py-4 sm:py-5 bg-black text-white font-bold rounded-2xl text-xl  transition-transform duration-500 ease-in-out skew-0 hover:-skew-4 flex items-center gap-3"
          >
            Get Results
            <span className="bg-amber-50 rounded-lg p-2 text-2xl sm:text-3xl text-orange-500">
              <BsFire />
            </span>
          </button>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute top-32 right-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </>
  );
};

export default AnimatedNavbar;