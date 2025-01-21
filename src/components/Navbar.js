import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="h-18 w-18 ml-4 object-contain" // Reduced logo size
              style={{height:'90px',width:'90px'}}

            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/training" className="hover:text-[#4748ac]">Training</Link>
          <a 
            href="https://cards.edzest.org/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#4748ac]"
          >
            Flashcards
          </a>
          <Link to="/mock-exam" className="hover:text-[#4748ac]">Mock Exam</Link>
          <Link to="/about" className="hover:text-[#4748ac]">About us</Link>
          <Link to="/contact" className="hover:text-[#4748ac]">Contact us</Link>
          {/* Log In Button for Desktop */}
          <a
            href="https://exams.edzest.org/learn/account/signin"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#4748ac] text-white rounded hover:bg-[#3737ac]"
          >
            Log in
          </a>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-[#4748ac]">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <nav className="space-y-4">
            <Link to="/training" className="block text-gray-700 hover:text-[#4748ac]">Training</Link>
            <a 
              href="https://cards.edzest.org/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block text-gray-700 hover:text-[#4748ac]"
            >
              Flashcards
            </a>
            <Link to="/mock-exam" className="block text-gray-700 hover:text-[#4748ac]">Mock Exam</Link>
            <Link to="/about" className="block text-gray-700 hover:text-[#4748ac]">About us</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-[#4748ac]">Contact us</Link>
            {/* Log In Button for Mobile */}
            <a
              href="https://exams.edzest.org/learn/account/signin"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-[#4748ac] text-white rounded text-center hover:bg-[#4748ac]"
            >
              Log in
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;