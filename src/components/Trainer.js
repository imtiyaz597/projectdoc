import React, { useState } from "react";
import trainerImg from "../Assets/Trainerimage.png";

export default function TrainerProfile() {
  const [activeTab, setActiveTab] = useState("training");

  // Define tab content dynamically
  const tabs = [
    {
      id: "training",
      label: "Training",
      heading: "Training Programs",
      link: "mailto:trainer@example.com",
      linkText: "Send an email",
      description:
        "Learn from comprehensive training programs designed to help you succeed in certification and develop practical project management skills.",
    },
    {
      id: "experience",
      label: "Experience",
      heading: "Trainer's Experience",
      link: "https://linkedin.com/in/trainer",
      linkText: "Connect on LinkedIn",
      description:
        "Over 10 years of industry experience helping professionals achieve their career goals through expert guidance and mentoring.",
    },
    {
      id: "education",
      label: "Education",
      heading: "Educational Background",
      link: "mailto:trainer@example.com",
      linkText: "Send an email",
      description:
        "Certified PMP® instructor with formal education in project management and leadership, ensuring the highest quality training.",
    },
  ];

  // Find the active tab's content
  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-purple-50 p-8">
      {/* Content Section */}
      <div className="custom-light-purple rounded-lg shadow-lg p-8 w-full lg:w-1/2">

        <h1 className="text-4xl font-bold text-black mb-4">About the trainer</h1>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full font-semibold ${
                activeTab === tab.id
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div>
          <h2 className="text-2xl font-bold mb-2">{activeContent.heading}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">{activeContent.description}</p>

          {/* Tab Link */}
          <a
            href={activeContent.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 font-semibold underline"
          >
            {activeContent.linkText}
          </a>
        </div>
      </div>

      {/* Trainer Image */}
      <div className="relative w-48 h-48 lg:w-64 lg:h-64 mt-8 lg:mt-0 lg:ml-8">
        <div className="w-full h-full rounded-full bg-purple-600 flex justify-center items-center">
          <img
            src={trainerImg}
            alt="Trainer"
            className="w-44 h-44 lg:w-60 lg:h-60 object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
