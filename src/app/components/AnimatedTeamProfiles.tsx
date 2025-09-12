"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  alt: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Mehr Haider",
    role: "Founder & CEO",
    image: "/team/mehr.webp",
    alt: "Mehr Haider - Founder & CEO"
  },
  {
    id: 2,
    name: "Maheen",
    role: "Co-Founder",
    image: "/team/maheen.webp",
    alt: "Maheen - Co-Founder"
  },
  {
    id: 3,
    name: "Asma",
    role: "Creative Director",
    image: "/team/asma.webp",
    alt: "Asma - Creative Director"
  }
];

const AnimatedTeamProfiles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 6000); // 6 seconds

    return () => clearInterval(interval);
  }, []);

  const currentMember = teamMembers[currentIndex];

  return (
    <div className="relative w-fit">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMember.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex items-center gap-4"
        >
          {/* Main profile image */}
          <div className="relative">
            <Image
              src={currentMember.image}
              alt={currentMember.alt}
              width={80}
              height={80}
              className="rounded-full shadow-md border-2 border-white"
            />
          </div>

          {/* Text content */}
          <div className="pr-2">
            <p className="font-semibold text-gray-900">{currentMember.name}</p>
            <p className="text-sm text-gray-500">{currentMember.role}</p>
          </div>

          {/* Contact button */}
          <a
            href="/contact"
            className="ml-2 inline-flex items-center bg-yellow-400 px-4 py-2 rounded-full text-black font-medium hover:bg-yellow-500 transition-colors duration-200 group"
          >
            {/* SVG icon */}
            <svg 
              className="mr-2 group-hover:translate-x-1 transition-transform duration-200" 
              width="40" 
              height="40" 
              viewBox="0 0 43 43" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.0849609" y="0.48999" width="42" height="42" rx="21" fill="white"/>
              <path d="M28.8037 22.2087C28.9912 22.0004 29.085 21.7608 29.085 21.49C29.085 21.2192 28.9912 20.9796 28.8037 20.7712L24.8037 16.7712C24.5954 16.5837 24.3558 16.49 24.085 16.49C23.8141 16.49 23.5745 16.5837 23.3662 16.7712C23.1787 16.9796 23.085 17.2192 23.085 17.49C23.085 17.7608 23.1787 18.0004 23.3662 18.2087L25.6787 20.49H14.085C13.7933 20.49 13.5537 20.5837 13.3662 20.7712C13.1787 20.9587 13.085 21.1983 13.085 21.49C13.085 21.7817 13.1787 22.0212 13.3662 22.2087C13.5537 22.3962 13.7933 22.49 14.085 22.49H25.6787L23.3662 24.7712C23.1787 24.9796 23.085 25.2192 23.085 25.49C23.085 25.7608 23.1787 26.0004 23.3662 26.2087C23.5745 26.3962 23.8141 26.49 24.085 26.49C24.3558 26.49 24.5954 26.3962 24.8037 26.2087L28.8037 22.2087Z" fill="black"/>
            </svg>
            Get in touch
          </a>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedTeamProfiles;
