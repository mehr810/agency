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
  linkedin: string;
  // instagram: string;

}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Mehr Haider",
    role: "Founder & CEO",
    image: "/team/mehr.webp",
    alt: "Mehr Haider - Founder & CEO",
    linkedin: "https://www.linkedin.com/in/mehr-haider",
    // instagram: "https://www.instagram.com/mehrhaider"

  },
  {
    id: 2,
    name: "Maheen",
    role: "Co-Founder",
    image: "/team/maheen.webp",
    alt: "Maheen - Co-Founder",
    linkedin: "https://www.linkedin.com/in/maheen",
    // instagram: "https://www.instagram.com/maheen"

  },
  {
    id: 3,
    name: "Asma",
    role: "Creative Director",
    image: "/team/asma.webp",
    alt: "Asma - Creative Director",
    linkedin: "https://www.linkedin.com/in/asma",
    // instagram: "https://www.instagram.com/asma"
  },
];

const AnimatedTeamProfiles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % teamMembers.length),
      6000 // 6 seconds
    );
    return () => clearInterval(interval);
  }, []);

  const currentMember = teamMembers[currentIndex];

  return (
    <div className="relative w-full max-w-md mr-auto px-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3 rounded-2xl p-4">
        {/* Animated part (image + text) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMember.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3 flex-1"
          >
            {/* Profile image */}
            <div className="flex-shrink-0 flex justify-center">
              <Image
                src={currentMember.image}
                alt={currentMember.alt}
                width={80}
                height={80}
                priority={true}  // Eager load + preload for LCP
                className="rounded-full shadow-md border-2 border-white w-16 h-16 sm:w-20 sm:h-20 object-cover"
              />
            </div>

            {/* Text + socials */}
            <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
              <p className="font-semibold text-gray-900 text-lg">
                {currentMember.name}
              </p>
              <p className="text-sm text-gray-500 mb-2">{currentMember.role}</p>

              {/* Social links under description */}
              <div className="flex gap-4 mt-1">
                {/* LinkedIn */}
                <div
                  onClick={() => window.open(currentMember.linkedin, "_blank")}
                  className="text-black hover:text-blue-600 transition-colors cursor-pointer"
                  role="link"
                  aria-label={`${currentMember.name} LinkedIn`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8 19H5V9h3v10zM6.5 7.8c-1 0-1.7-.8-1.7-1.7 0-1 .8-1.7 1.7-1.7s1.7.8 1.7 1.7c0 1-.8 1.7-1.7 1.7zM20 19h-3v-5.5c0-1.3-.5-2.2-1.7-2.2-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V19h-3s.1-9 0-10h3v1.4c.4-.7 1.2-1.7 3-1.7 2.1 0 3.7 1.4 3.7 4.3V19z" />
                  </svg>
                </div>

                {/* Instagram
                <div
                  onClick={() => window.open(currentMember.instagram, "_blank")}
                  className="text-black hover:text-pink-500 transition-colors cursor-pointer"
                  role="link"
                  aria-label={`${currentMember.name} Instagram`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2.2a2.8 2.8 0 110 5.6 2.8 2.8 0 010-5.6zM17.5 6a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                  </svg>
                </div> */}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>


        {/* Separator line */}
        <div className="hidden sm:block w-px h-10 bg-gray-500 mx-5"></div>

        {/* Static button (no animation) */}
        <a
          href="/contact"
          className="mt-3 sm:mt-0 sm:ml-2 inline-flex items-center justify-center bg-yellow-400 px-4 py-2 rounded-full text-black font-medium hover:bg-yellow-500 transition-colors duration-200 group w-full sm:w-auto"
        >
          <svg
            className="mr-2 group-hover:translate-x-1 transition-transform duration-200"
            width="24"
            height="24"
            viewBox="0 0 43 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.0849609"
              y="0.48999"
              width="42"
              height="42"
              rx="21"
              fill="white"
            />
            <path
              d="M28.8037 22.2087C28.9912 22.0004 29.085 21.7608 29.085 21.49C29.085 21.2192 28.9912 20.9796 28.8037 20.7712L24.8037 16.7712C24.5954 16.5837 24.3558 16.49 24.085 16.49C23.8141 16.49 23.5745 16.5837 23.3662 16.7712C23.1787 16.9796 23.085 17.2192 23.085 17.49C23.085 17.7608 23.1787 18.0004 23.3662 18.2087L25.6787 20.49H14.085C13.7933 20.49 13.5537 20.5837 13.3662 20.7712C13.1787 20.9587 13.085 21.1983 13.085 21.49C13.085 21.7817 13.1787 22.0212 13.3662 22.2087C13.5537 22.3962 13.7933 22.49 14.085 22.49H25.6787L23.3662 24.7712C23.1787 24.9796 23.085 25.2192 23.085 25.49C23.085 25.7608 23.1787 26.0004 23.3662 26.2087C23.5745 26.3962 23.8141 26.49 24.085 26.49C24.3558 26.49 24.5954 26.3962 24.8037 26.2087L28.8037 22.2087Z"
              fill="black"
            />
          </svg>
          Get in touch
        </a>
      </div>
    </div>
  );
};

export default AnimatedTeamProfiles;
