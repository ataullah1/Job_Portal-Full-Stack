"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={scrollToTop}
        title="Press to go top"
        type="button"
        className={`bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center ease-in-out hover:scale-110 hover:bg-blue-600 hover:shadow-lg ${
          isVisible
            ? "opacity-100 translate-y-0 animate-[bounce_2s_ease-in-out_infinite]"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};
