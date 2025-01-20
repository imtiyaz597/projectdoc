import React, { useState } from "react";
import "./Contact.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("Please fill in all required fields!");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: `${formData.email}`,
      message: `${formData.message}`,     
    };

     console.log(payload)

    fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to save data");
        }
        return response.text();
      })
      .then((message) => {
        alert(message);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="container mx-auto px-6 py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Get in Touch<br />Send us a message<br />
        and we’ll get back to you shortly.
      </h2>

      <div className="max-w-lg mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className={`w-full ${isSubmitting ? "bg-gray-400" : "bg-indigo-500 hover:bg-indigo-600"} text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>     
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
