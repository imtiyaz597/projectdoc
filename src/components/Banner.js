import React from "react";
import pmiLogo from "../Assets/pmilogo.png"; // Make sure the path to your image is correct
import './Banner.css';
const Announcement = () => {
  return (
    <section className="bg-green-100 py-8 px-4 md:px-16 flex flex-col md:flex-row items-center justify-center text-center md:text-center">
      {/* Logo */}
      <div className="mb-4 md:mb-0 md:mr-6">
        <img
          src={pmiLogo}
          alt="PMI Logo"
          className="w-20 h-20 md:w-32 md:h-32 object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-4">
          Next PMP® training batch starting from{" "}
          <span className="text-purple-600">11th Jan</span>
        </h2>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          Learn from an Authorized Training Partner, <br />
          <span className="font-semibold text-gray-800">
            ATP of Project Management Institute (PMI)
          </span>
        </p>

        {/* Button */}
        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
          Join Now
        </button>
      </div>
    </section>
  );
};

export default Announcement;
