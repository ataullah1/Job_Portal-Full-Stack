import React from "react";
import { Heading } from "../../paths";

const HowItWorks = () => {
  const steps = [
    {
      icon: (
        <svg
          className="w-12 h-12 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
      title: "Create Account",
      description: "Sign up for free and create your professional profile",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
      title: "Search Jobs",
      description: "Browse through thousands of job opportunities",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Apply Jobs",
      description: "Submit your applications with just a few clicks",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      title: "Get Hired",
      description: "Land your dream job and start your new career",
    },
  ];

  return (
    <div className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading
          mainHeading="How It Works"
          subHeading="Follow these simple steps to find your perfect job"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="flex flex-col items-center">
                <div className="mb-6 p-4 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300 z-20">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute z-10 top-16 left-full w-full h-0.5 transform -translate-x-1/2">
                  <div className="h-full bg-gradient-to-r from-blue-300 to-blue-500 group-hover:from-blue-400 group-hover:to-blue-600 transition-colors duration-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
