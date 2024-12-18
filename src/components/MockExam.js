import mockphotoImg from "../Assets/mockphoto.png";
import fulllengthImg from "../Assets/fulllength.png";
import minimockImg from "../Assets/minimock.png";
import PersonalizedImg from "../Assets/personalized.png";
import Contact from "./Contact"; // Assuming Contact.js is a valid component
import Footer from "./Footer"; // Assuming Footer.js is a valid component

const PMPPracticeMockExams = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between h-[70vh] px-6 md:px-16">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
            PMP® Practice <br />
            Mock Exams by{" "}
            <span className="text-purple-600">Edzest</span>
          </h1>
          <p className="text-gray-500 mt-4">
            Get Real Exam-Like Questions and Expert Insight
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg mt-4 hover:bg-blue-600 transition">
            Buy Now
          </button>
        </div>
        <div className="mt-8 md:mt-0">
          <img
            src={mockphotoImg}
            alt="PMP Training"
            className="rounded-lg shadow-lg max-h-96"
          />
        </div>
      </div>

      {/* What's Included Section */}
      <div className="bg-purple-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
            What's Included:
          </h1>

          {/* Section 1: Mini Mock Exams */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Mini Mock Exams
              </h2>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>
                  Shorter, targeted exams to evaluate your understanding of
                  specific topics.
                </li>
                <li>Perfect for pinpointing areas that need further revision.</li>
              </ul>
            </div>
            <div className="flex-1 flex justify-center mt-4 md:mt-0">
              <img
                src={minimockImg}
                alt="Mini Mock Exams"
                className="max-w-[250px]"
              />
            </div>
          </div>

          {/* Section 2: Full-Length Mock Exams */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-12">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Full-Length Mock Exams
              </h2>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>
                  A complete, real exam-like simulation with 200+ questions
                  covering all PMP® domains.
                </li>
                <li>
                  Experience the pressure of the actual exam and refine your
                  time management skills.
                </li>
              </ul>
            </div>
            <div className="flex-1 flex justify-center mt-4 md:mt-0">
              <img
                src={fulllengthImg}
                alt="Full-Length Mock Exams"
                className="max-w-[250px]"
              />
            </div>
          </div>

          {/* Section 3: Personalized Support */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                1:1 Personalized Support
              </h2>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>
                  After each mock exam, you’ll receive one-on-one support from
                  our expert trainers.
                </li>
                <li>
                  Get tailored feedback and strategies to improve your
                  performance and tackle areas of difficulty.
                </li>
              </ul>
            </div>
            <div className="flex-1 flex justify-center mt-4 md:mt-0">
              <img
                src={PersonalizedImg}
                alt="Personalized Support"
                className="max-w-[250px]"
              />
            </div>
          </div>

          {/* Buy Now Button */}
          <div className="text-center mt-10">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-600 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />

    </div>
  );
};

export default PMPPracticeMockExams;
