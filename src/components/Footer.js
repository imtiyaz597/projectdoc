import React from "react";


const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-6 mt-10">
      <div className="container mx-auto px-4 sm:flex sm:justify-between sm:items-center">
        {/* Company Info */}
        <div className="mb-4 sm:mb-0">
          <h4 className="text-lg font-semibold mb-2">Edzest Training Co.</h4>
          <p className="text-sm">
            123 Main Street, Suite 100 <br />
            New York, NY 10001
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          {/* Social Media Icon Links */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-4 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Edzest Training Co. | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
