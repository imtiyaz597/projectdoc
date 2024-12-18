import React from "react";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-6 mt-10">
      <div className="container mx-auto px-4 sm:flex sm:justify-between sm:items-center">
        {/* Company Info */}
        <div className="mb-4 sm:mb-0">
          <h4 className="text-lg font-semibold mb-2">Edzest education services.</h4>
          <p className="text-sm">
            SY no. 42, Near J R Layout Haralur,<br />
            Bengaluru- 560102, Karnataka, India
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          {/* Social Media Icon Links */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 flex items-center space-x-2"
          >
            <FaInstagram />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/company/edzest"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 flex items-center space-x-2"
          >
            <FaLinkedinIn />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.youtube.com/@edzest"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 flex items-center space-x-2"
          >
            <FaYoutube />
            <span>YouTube</span>
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-4 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Edzest education services. | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
