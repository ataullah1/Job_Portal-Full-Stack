"use client";

import Image from "next/image";
import HeroImg from "@/public/images/hero.svg";
import React, { useState } from "react";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Implement search functionality
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="pt-16 md:pt-20 pb-8 md:pb-12 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="w-full min-h-[80vh] flex flex-col items-center justify-center">
        <div className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[3rem]">
          {/* content */}
          <div className="animate-fade-in-up">
            <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] xl:text-[64px] text-[#05264e] leading-tight font-extrabold">
              Find Your <span className="text-blue-600">Dream Job</span> <br />
              Today
            </h1>
            <p className="text-[#4f5e6f] text-[16px] md:text-[18px] mt-[1.5rem] leading-relaxed max-w-xl">
              Discover thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              applications from start to finish.
            </p>
            {/* search box */}
            <div className="mt-[2rem] flex w-full max-w-2xl shadow-lg rounded-lg overflow-hidden">
              <input
                className="flex-1 px-6 py-4 outline-none border-2 border-transparent focus:border-blue-500 transition-colors"
                placeholder="Search jobs (e.g. Frontend Developer)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
              />
              <button
                onClick={handleSearch}
                type="button"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
              >
                <svg
                  className="w-5 h-5"
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
                Search
              </button>
            </div>
            <div className="mt-6 flex gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                10k+ Jobs
              </span>
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                500+ Companies
              </span>
            </div>
          </div>
          {/* image */}
          <div className="hidden lg:block">
            <Image
              src={HeroImg}
              alt="Job search illustration"
              width={700}
              height={400}
              className="w-full h-auto drop-shadow-2xl rounded-2xl transform transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Hero;
