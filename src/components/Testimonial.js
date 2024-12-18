import React from "react";

const testimonials = [
    {
      name: "John Doe",
      role: "Project Manager",
      feedback:
        "The PMP certification training at Edzest helped me gain a comprehensive understanding of project management. The hands-on approach and real-world examples made the learning process engaging.",
      image: "john-doe.jpg", // Assuming you have an image named john-doe.jpg
    },
    {
      name: "Jane Smith",
      role: "Business Analyst",
      feedback:
        "The support provided throughout the course was exceptional. The personalized guidance and resources helped me achieve my certification smoothly.",
      image: "jane-smith.jpg",
    },
    {
      name: "Michael Brown",
      role: "Software Engineer",
      feedback:
        "Edzest's innovative teaching methods and flexible learning schedule made the preparation for PMP certification seamless.",
      image: "michael-brown.jpg",
    },
    {
      name: "Emily Davis",
      role: "Team Lead",
      feedback:
        "The course structure and interactive sessions allowed me to grasp difficult concepts efficiently. I highly recommend Edzest for PMP certification training.",
      image: "emily-davis.jpg",
    },
    {
      name: "William Wilson",
      role: "Senior Consultant",
      feedback:
        "Outstanding experience! The tailored support and updated study materials made a huge difference in my certification journey.",
      image: "william-wilson.jpg",
    },
  ];
  
  const Testimonials = () => {
    return (
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          What Our Students Say
        </h2>
        <div className="flex overflow-x-auto space-x-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 bg-white p-6 rounded-lg shadow-lg border border-gray-200"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full w-24 h-24 object-cover mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 italic text-center">{testimonial.role}</p>
              <p className="text-gray-600 mt-4 text-center">{testimonial.feedback}</p>
              <button className="mt-4 px-4 py-2 bg-[#4748ac] text-white rounded hover:bg-[#37378c] block mx-auto">
                View Full Review
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;
