import React from "react";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      image: "/images/a1.jpg",
      quote:
        "Found my dream job through this platform. The process was smooth and professional.",
      company: "Tech Solutions Inc.",
    },
    {
      name: "Michael Chen",
      role: "Marketing Manager",
      image: "/images/a2.jpg",
      quote:
        "Incredible platform! Got multiple interviews within weeks of signing up.",
      company: "Digital Marketing Pro",
    },
    {
      name: "Emily Davis",
      role: "UX Designer",
      image: "/images/a3.jpg",
      quote:
        "The job search process was seamless. Highly recommend to all job seekers!",
      company: "Creative Design Co.",
    },
  ];

  return (
    <div className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600">
            Hear from professionals who found their perfect match
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-blue-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                {testimonial.quote}
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
