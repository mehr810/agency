"use client";

import React, { useState } from "react";
import clsx from "clsx";

const services = [
  {
    title: "24/7 Call Center",
    description:
      "Reliable, around-the-clock customer support to keep your business always connected.",
  },
  {
    title: "Social Media Management",
    description:
      "End-to-end management of your social presence—content, scheduling, engagement, and growth.",
  },
  {
    title: "Paid Social Media Advertising",
    description:
      "Targeted ad campaigns designed to boost reach, engagement, and conversions.",
  },
  {
    title: "Service Design",
    description:
      "We design seamless, intuitive services that elevate user experience and drive loyalty.",
  },
  {
    title: "Lead Generation",
    description:
      "Smart, data-driven strategies to attract, capture, and convert high-quality leads.",
  },
  {
    title: "Virtual Assistant",
    description:
      "Flexible, remote support to handle tasks, scheduling, and communication efficiently.",
  },
];

const ServicesSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-white text-black py-12 px-6 md:px-12 font-sans overflow-x-hidden">
      <div className="max-w-[1800px] mx-auto">
        {/* Just the "Services" Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl sm:text-4xl md:text-8xl font-semibold tracking-widest uppercase">
            Services
          </h2>
        </div>
      </div>

      {/* Services Cards */}
      <div className="relative border border-gray-300 rounded-2xl py-10 px-6 w-full overflow-hidden">
        {/* Decorative Lines Right */}
        <div className="absolute top-8 bottom-8 right-6 z-0 hidden lg:block">
          <div className="w-[2px] h-20 bg-gray-300 mb-6"></div>
          <div className="w-[2px] h-20 bg-gray-300"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 z-10 relative">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={clsx(
                "relative border border-gray-200 rounded-2xl transition-all duration-300 transform group",
                "w-full h-[320px] hover:scale-105 flex flex-col justify-center px-8",
                hovered === index &&
                  "bg-[#FFDE21] text-black shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
              )}
            >
              {/* SVG Decoration */}
              <svg
                className="absolute right-0 top-0 h-full w-[80px] z-0 pointer-events-none hidden sm:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 80 320"
                preserveAspectRatio="none"
              >
                <path
                  d="M80,0 Q60,160 0,320"
                  stroke="#d1d5db"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M0,0 Q20,160 80,320"
                  stroke="#d1d5db"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>

              {/* Card Content */}
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-wide mb-3">
                  {service.title}
                </h3>
                <p
                  className={clsx(
                    "text-base md:text-lg leading-snug",
                    hovered === index ? "text-black" : "text-gray-700"
                  )}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

export const ServicesCard = () => {
  return <ServicesSection />;
};
