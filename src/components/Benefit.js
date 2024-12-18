import React from "react";

const Benefits = () => {
  const benefits = [
    {
      title: "Career Advancement",
      description:
        "Certified project managers are in high demand, with increased opportunities for higher-level roles and leadership positions.",
      icon: "📈", // Replace with real icons/images
    },
    {
      title: "Industry Recognition",
      description:
        "PMP® certification is globally recognized and demonstrates your expertise in project management, making you a standout professional in any industry.",
      icon: "🌐",
    },
    {
      title: "Higher Salary Potential",
      description:
        "PMP® certification holders earn 20-25% more on average than their non-certified counterparts, according to PMI’s Salary Survey.",
      icon: "💰",
    },
    {
      title: "Better Job Security",
      description:
        "Certified professionals are often the first choice during hiring or promotions and are more likely to retain their positions during organizational restructuring.",
      icon: "🔒",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Benefits of PMP® Certification
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-start bg-gray-50 p-6 rounded-lg shadow-sm"
          >
            <div className="text-6xl mb-4">{benefit.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
