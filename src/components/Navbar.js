import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Logo.png';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
  <Link to="/">
    <img src={Logo} alt="Logo" className="h-19 w-16 object-contain" />
  </Link>
</div>
        

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/training" className="hover:text-purple-600">Training</Link>
          <Link to="/mock-exam" className="hover:text-purple-600">Mock Exam</Link>
          <Link to="/about" className="hover:text-purple-600">About us</Link>
          <Link to="/contact" className="hover:text-purple-600">Contact us</Link>
          <Link to="/blogs" className="hover:text-purple-600">Blogs</Link>
        </nav>

        {/* Log In Button */}
        <Link
          to="/login"
          className="hidden md:block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Log in
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
