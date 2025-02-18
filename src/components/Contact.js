import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      await axios.post("https://full-stack-project-1-vwwb.onrender.com/api/contact", formData);
      
        setStatus("Form submitted successfully!");
      
      setFormData({ fullName: "", email: "", phoneNumber: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("Error submitting the form. Please try again.");
    }
  };

  return (
    <>
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 min-h-screen p-4">
      {/* Left Section */}
      <div className="bg-[#4748ac] text-white p-5 md:w-1/2 min-h-screen rounded-l-lg flex flex-col justify-between">
        <div>
          <h2 className="text-4xl font-family-sans-serif mb-4">Contact Us</h2>
          <p className="text-base mb-4 leading-relaxed">We’re here to help you! Feel free to reach out using any of the contact methods below.</p>
          <div className="space-y-2">
            <div className="flex flex-col pb-1">
              {/* <label className="text-sm uppercase font-bold tracking-wide mb-1">Phone</label> */}
              <div className="flex items-center mb-3 flex  space-x-3">
                <span className="text-xl">📞</span>
                <p className="text-base font-medium">+91 9673332684</p>
              </div>
            </div>
            <div className="flex flex-col pb-1">
              {/* <label className="text-sm uppercase font-bold tracking-wide mb-1">Website</label> */}
              <div className="flex items-center mb-3 space-x-3">
                <span className="text-xl">🌐</span>
                <a
                  href="http://www.edzest.org"
                  className="text-decoration-none text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.edzest.org
                </a>
              </div>
            </div>
            <div className="flex flex-col pb-1">
              {/* <label className="text-sm uppercase font-bold tracking-wide mb-1">Email</label> */}
              <div className="flex items-center mb-3 space-x-3">
                <span className="text-xl">📧</span>
                <a
                  href="mailto:contact@edzest.org"
                  className=" text-decoration-none text-white"
                >
                  contact@edzest.org
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              {/* <label className="text-sm uppercase font-bold tracking-wide mb-1">Location</label> */}
              <div className="flex items-start space-x-3">
                <span className="text-xl">📍</span>
                <p className="text-base font-medium">
                SY no. 42, Near J R Layout Haralur,
                 <br />
                 Bengaluru- 560102, Karnataka, India
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-xs italic">
            Need immediate assistance? Reach us by phone or email, and we’ll get back to you as soon as possible!
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-white p-5 md:w-1/2 rounded-r-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-base font-medium text-gray-700">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-[#4748ac] text-sm"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-700">
              E-Mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-[#4748ac] text-sm"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-base font-medium text-gray-700">
              Phone Number:
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-[#4748ac] text-sm"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-base font-medium text-gray-700">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-[#4748ac] text-sm"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#4748ac] text-white font-medium py-2 rounded-md hover:bg-[#3b3d8c] transition duration-200 text-sm"
          >
            Send
          </button>
        </form>
        {status && <p className="mt-3 text-center text-sm">{status}</p>}
      </div>
    </div>
    {/* <Footer /> */}
  </>
  );
};

export default Contact;
