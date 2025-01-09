import React, { useState } from "react";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("All Posts");

  const tabs = [
    "All Posts",
    "Personal Development",
    "Corporate Training",
    "Supply Chain",
    "Project Management",
  ];

  const blogs = [
    {
      id: 1,
      title:
        "Brainstorming in projects: How to utilize the maximum benefit of a team’s diversity?",
      author: "Amit Kumar",
      date: "Apr 30",
      readTime: "5 min read",
      description:
        "How often do we find ourselves sitting in a meeting room wondering what’s happening...",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Choosing the Right Project Management Approach",
      author: "Amit Kumar",
      date: "Jan 11",
      readTime: "3 min read",
      description:
        "One of the most important decisions a Project Manager must make is...",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
     

      {/* Tabs */}
      <div className="flex justify-center space-x-4 py-4 bg-white shadow-sm mt-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 rounded-lg ${
              selectedTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Blog Posts */}
      <div className="max-w-4xl mx-auto mt-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex bg-white shadow-md rounded-lg mb-4 overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-1/4 object-cover"
            />
            <div className="p-4 flex flex-col">
              <h3 className="text-lg font-bold text-gray-800 hover:text-blue-600 cursor-pointer">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-500">
                {blog.author} · {blog.date} · {blog.readTime}
              </p>
              <p className="text-gray-600 mt-2">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
