import React from "react";
import './whychooseus.css';
import trainerImg from '../Assets/Trainer.png';
import elearningImg from '../Assets/elearning.png';
import personalisedsupportImg from '../Assets/personalisedsupport.png';
import flexibleImg from '../Assets/flexible.png';
import applicationImg from '../Assets/application.png';

const benefits = [
  {
    title: "Expert Trainers",
    description:
      "Learn from industry professionals with years of practical experience, bringing real-world insights into every session to ensure you're ready for any challenge.",
    imgSrc: trainerImg, // Assuming you have imported or defined these images
  },
  {
    title: "Comprehensive Materials",
    description:
      "Access a wide range of updated study materials including PDF guides, mock exams, and video tutorials, designed to support your learning at every stage.",
    imgSrc: elearningImg,
  },
  {
    title: "Personalised Support",
    description:
      "Receive one-on-one mentoring to address your specific needs, with personalized guidance to help you overcome challenges and stay on track.",
    imgSrc: personalisedsupportImg,
  },
  {
    title: "Flexible Learning",
    description:
      "Enjoy the convenience of live online sessions paired with on-demand recorded videos, allowing you to learn at your own pace and schedule.",
    imgSrc: flexibleImg,
  },
  {
    title: "Application Support",
    description:
      "Get expert help with your certification application process, ensuring you meet all the requirements and submit your application smoothly and accurately.",
    imgSrc: applicationImg,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="hero-container">
      <h1 className="section-header">Why Choose Us</h1>
      {benefits.map((benefit, index) => (
        <div key={index} className="hero-item">
          <div className="text-section">
            <h2>{String(index + 1).padStart(2, "0")}</h2>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
          <div className="image-section">
            <img
              src={benefit.imgSrc}
              alt={benefit.title}
              className="circle-image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyChooseUs;
