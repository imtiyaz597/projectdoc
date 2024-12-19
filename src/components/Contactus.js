import React, { useState } from "react";
import Footer from "./Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Send form data to the backend
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to save data");
        }
        return response.text();
      })
      .then((message) => {
        alert(message); // Show success message
        setFormData({ name: "", email: "", message: "" }); // Clear form fields
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <div className="bg-blue-900 text-center text-gray-800">
      {/* Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
        {/* Address Box */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <div className="flex justify-center">
            <div className="bg-blue-300 rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-8 h-8 text-blue-700"
              >
                <path d="M4.5 3a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V3zm3 6.8a1.5 1.5 0 0 0 1 0V11a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H9.5l-2-2.2V7H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2.5v.8z" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-bold mt-4">OUR MAIN OFFICE</h3>
          <p className="text-sm mt-2">
            SY no. 42, Near J R Layout Haralur, <br /> Bengaluru- 560102,
            Karnataka, India
          </p>
        </div>

        {/* Phone Number */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <div className="flex justify-center">
            <div className="bg-blue-300 rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-8 h-8 text-blue-700"
              >
                <path d="M2 4.5v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-bold mt-4">PHONE NUMBER</h3>
          <p className="text-sm mt-2">
            9673332684 <br /> 9241561334
          </p>
        </div>

        {/* Email */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <div className="flex justify-center">
            <div className="bg-blue-300 rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-8 h-8 text-blue-700"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm14 0H2v8h12V4z" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-bold mt-4">EMAIL</h3>
          <p className="text-sm mt-2 text-blue-500 hover:underline cursor-pointer">
            contact@edzest.org
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-blue-200 py-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter a valid email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded"
          />
          <textarea
            name="message"
            placeholder="Enter your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded"
          ></textarea>
          <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;
