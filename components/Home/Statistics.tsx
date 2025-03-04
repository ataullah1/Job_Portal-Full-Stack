import React from "react";

const Statistics = () => {
  const stats = [
    {
      number: "10K+",
      label: "Active Jobs",
      description: "Opportunities waiting for you",
    },
    {
      number: "500+",
      label: "Companies",
      description: "Top employers hiring now",
    },
    {
      number: "8K+",
      label: "Candidates",
      description: "Successfully placed",
    },
    {
      number: "95%",
      label: "Success Rate",
      description: "In job placement",
    },
  ];

  return (
    <div className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-blue-100 text-lg">Making a difference in careers worldwide</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-xl font-semibold mb-2">{stat.label}</div>
              <div className="text-blue-100">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;