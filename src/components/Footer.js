import React from "react";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-6 border-t shadow-md">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <h4 className="text-lg font-semibold mb-3">Edzest Education Services (OPC) Pvt. Ltd.</h4>
            <p className="text-sm leading-relaxed">
              SY no. 42, Near J R Layout Haralur,<br />
              Bengaluru- 560102, Karnataka, India
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-blue-500">About Us</Link></li>
              <li><Link to="/privacypolicy" className="hover:text-blue-500">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-blue-500">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Help & Support</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-blue-500">Contact Us</Link></li>
              <li><Link to="/refund-policy" className="hover:text-blue-500">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 border-t pt-4">
          <div className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Edzest Education Services. | All Rights Reserved</div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 text-2xl hover:opacity-75"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/edzest"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 text-2xl hover:opacity-75"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.youtube.com/@edzest"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 text-2xl hover:opacity-75"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;