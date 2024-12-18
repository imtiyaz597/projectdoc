import React from 'react';
import { Link } from 'react-router-dom';
import  heroImage from '../Assets/Hero.png'
const Hero = () => {
  return (
    <section className="container mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center">
      {/* Text Content */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-4">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-800">
          Get <span className="text-purple-600">PMP®</span> certified &<br /> Manage projects <span className="italic">better</span>
        </h1>
        <p className="text-gray-600">
          Your trusted partner in mastering project management with a focused approach to PMP® certification.
        </p>
        <Link
          to="/courses"
          className="inline-block mt-4 px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Explore Courses
        </Link>
      </div>

      {/* Hero Image */}
      <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg">
          <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
