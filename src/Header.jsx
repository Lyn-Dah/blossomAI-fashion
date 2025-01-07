import React, { useState } from 'react';
import logo from './assets/images/blossomlogo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-green-950 to-current#c9c04d  text-white shadow-lg fixed w-full z-50 top-0 py-2 px-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Blossom AI Fashion Trendz Logo" className="h-12 w-12 mr-3"/>
          <h1 className="text-xl sm:text-2xl font-bold">Blossom AI Fashion Trendz</h1>
        </div> 
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <nav className={`lg:flex space-x-4 ${isOpen ? "block" : "hidden"} lg:block`}>
          <ul className="lg:flex  text-xl sm:text-2xl font-semibold space-y-4 lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0 text-green-950">
            <li><a href="#home" className="block lg:inline-block hover:text-gray-300 transition duration-200">Home</a></li>
            <li><a href="#gallery" className="block lg:inline-block hover:text-gray-300 transition duration-200">Gallery</a></li>
            <li><a href="#blog" className="block lg:inline-block hover:text-gray-300 transition duration-200">Blog</a></li>
            <li><a href="#contact" className="block lg:inline-block hover:text-gray-300 transition duration-200">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
