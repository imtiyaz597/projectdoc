import React from "react";
import trainingpageimageimg from "../Assets/Trainingpageimage.png";
import pmilogoimg from "../Assets/pmilogo.png";
import liveTrainingImg from "../Assets/Livetraining.png";
import recordedVideosImg from "../Assets/recordedvideos.png";
import flashcardsImg from "../Assets/flashcard.png";
import personalizedsupportimg from "../Assets/personalizedsupport.png";
import mockExamImg from "../Assets/mockexam.png";
import applicationSupportImg from "../Assets/Applicationsupport.png";
import FAQ from "./FAQ"; 
import Contact from "./Contact"; 
import Footer  from "./Footer";


const Hero = () => {
  return (
    <>
      {/* Section 1: Hero Section */}
      <section className="bg-gray-100 w-full">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 md:px-12 lg:px-24">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
              PMP<span className="text-gray-900">®</span> Exam Prep <br />
              by <span className="text-[#4748ac]">Edzest</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Edzest’s PMP® exam prep program integrates practical insights, proven
              methodologies, and expert guidance, giving you a clear path to
              certification.
            </p>
            <div>
            <a
  href="https://exams.edzest.org/learn/PMP--exam-prep-March--25-batch"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-[#4748ac] hover:bg-[3636ac] text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
>
  Enroll Now
</a>

            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={trainingpageimageimg}
              alt="Instructor presenting online"
              className="w-full max-w-md md:max-w-lg lg:max-w-full object-cover rounded-md shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Banner Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
              6 Exclusive Batches a year to help <span className="text-pink-600">PMP®</span> aspirants pass <br />
              on their <span className="text-pink-600">First Attempt</span>
            </h2>
            <p className="text-gray-600">
              Learn from an Authorised Training Partner, ATP of Project Management Institute (PMI).
            </p>
            <a
  href="https://exams.edzest.org/learn/PMP--exam-prep-March--25-batch"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-[#4748ac] hover:bg-[#3737ac] text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
>
  Enroll Now
</a>

          </div>
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img
              src={pmilogoimg}
              alt="PMI Training"
              className="w-32 md:w-48 lg:w-56 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Us */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why choose our training program?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex items-center space-x-6">
              <img
                src={liveTrainingImg}
                alt="Live Training"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  40 hrs. of live training
                </h3>
                <p className="text-gray-600 mt-2">
                  Learn directly from PMI Authorized Instructors of PMP® in
                  interactive live sessions.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <img
                src={recordedVideosImg}
                alt="Recorded Videos"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  60 hrs. of Recorded Videos
                </h3>
                <p className="text-gray-600 mt-2">
                  Access recorded versions of live classes anytime.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <img
                src={flashcardsImg}
                alt="Flashcards"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Flashcards and E-Book
                </h3>
                <p className="text-gray-600 mt-2">
                  Get access to PMP® flashcards and an e-book for quick and easy revision.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <img
                src={personalizedsupportimg}
                alt="Personalized Support"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Personalized Support
                </h3>
                <p className="text-gray-600 mt-2">
                  Receive individualized guidance and support to ensure success.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <img
                src={mockExamImg}
                alt="Mock Exams"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Mock Exams
                </h3>
                <p className="text-gray-600 mt-2">
                  Practice with PMP® mock exams to boost your confidence and exam readiness.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <img
                src={applicationSupportImg}
                alt="Application Support"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Application Support
                </h3>
                <p className="text-gray-600 mt-2">
                  Get help with your PMP® application to make the process seamless.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center my-8">
          <a
              href="https://exams.edzest.org/learn/PMP--exam-prep-March--25-batch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#4748ac] hover:bg-[#3737ac] text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </section>
      {/* Training Overview Section */}
<section className="py-12 bg-purple-50">
  <div className="container mx-auto px-4 bg-red shadow-lg rounded-lg p-8">
    <h2 className="text-4xl font-bold text-center text-black-800 mb-12">Training Overview</h2>
    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
      Empower your project management journey with Edzest's 8-week training program.
      Designed for professionals aiming to excel in the PMP® exam, our program blends
      structured learning, real-world insights, and rigorous exam preparation.
    </p>

    <ul className="text-gray-900 text-lg leading-relaxed space-y-4">
      <li>
        <strong>Weeks 1 & 2:</strong> Master the fundamentals with project initiation,
        traditional methodologies, and agile frameworks.
      </li>
      <li>
        <strong>Weeks 3 to 5:</strong> Advance your skills in setting performance targets,
        integrating plans, leading teams, and evaluating project progress.
      </li>
      <li>
        <strong>Weeks 6 & 7:</strong> Comprehensive revision to bridge knowledge gaps and refine
        your preparation.
      </li>
      <li>
        <strong>Week 8:</strong> Final review with hands-on practice mocks to boost confidence
        and exam readiness.
      </li>
    </ul>

    <p className="text-gray-700 text-lg mt-6 leading-relaxed">
      Join our live weekend sessions (10:30 AM to 2:30 PM IST) for expert-led training,
      tailored mock exams, and interactive discussions that pave the way to PMP® success.
    </p>
  </div>
</section>
{/* FAQ Section */}
<FAQ />
{/* Contact Section */}
<Contact />
<Footer />
    </>
  );
};

export default Hero;
