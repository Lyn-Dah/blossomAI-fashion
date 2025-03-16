import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "./assets/images/blossomlogo.jpg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-green-950 to-current text-white shadow-lg fixed w-full z-50 top-0 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Blossom AI Fashion Trendz Logo"
            className="h-14 w-14 mr-3 rounded-full shadow-md"
          />
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide">
            Blossom AI Fashion Trendz
          </h1>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none transition-transform transform duration-300 ease-in-out hover:scale-110"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="#34C759"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`lg:flex items-center transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          } lg:block`}
        >
          <ul className="lg:flex text-lg sm:text-xl font-semibold space-y-6 lg:space-y-0 lg:space-x-6 mt-6 lg:mt-0 text-green-950">
            {["home", "gallery", "blog", "contact"].map((section, index) => (
              <li key={index}>
                <ScrollLink
                  to={section}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70} // Adjust for fixed header
                  onClick={closeMenu} // Close menu on mobile
                  activeClass="border-b-2 border-white font-bold"
                  className="block lg:inline-block hover:text-white transition duration-200 cursor-pointer px-2 pb-1"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
