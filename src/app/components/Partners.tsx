"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const logos = [
  { name: "BAT", logo: "/logos/image.png" },
  { name: "VELO", logo: "/logos/image2.png" },
  { name: "GSK", logo: "/logos/logo.png" },
  { name: "PediaSure", logo: "/logos/logo1.png" },
  { name: "UNICEF", logo: "/logos/logo3.webp" },
  { name: "Toyota", logo: "/logos/logo4.webp" },
  { name: "Toyota", logo: "/logos/logo5.webp" },
  { name: "Toyota", logo: "/logos/logo6.webp" },
  { name: "Toyota", logo: "/logos/logo7.webp" },
];

export default function PartnersSection() {
  const controls = useAnimation();
  const cardWidth = 240; // width + gap

  useEffect(() => {
    const totalSteps = logos.length;
    let currentIndex = 0;

    const stepScroll = () => {
      currentIndex += 1;

      controls.start({
        x: `-${currentIndex * cardWidth}px`,
        transition: { duration: 0.7, ease: "easeInOut" },
      });

      if (currentIndex >= totalSteps) {
        setTimeout(() => {
          controls.set({ x: 0 });
          currentIndex = 0;
        }, 800);
      }
    };

    const interval = setInterval(stepScroll, 2500);

    return () => clearInterval(interval);
  }, [controls]);

  const duplicatedLogos = [...logos, ...logos];

  return (
    <div>
      {/* Top Heading Section */}
      <section className="py-12 bg-white text-center">
        <h3 className="text-sm md:text-base text-gray-600 uppercase tracking-widest inline-block border-b-2 border-blue-300 pb-1">
          Know more about us
        </h3>
      </section>

      {/* Partners Section */}
      <section className="bg-white mt-12">
        <div className="max-w-7xl mx-auto flex items-start gap-4 relative px-4">
          {/* Vertical Side Text */}
          <div className="absolute left-32 md:left-48 top-1/2 transform -translate-y-1/2 flex items-center">
            <div className="absolute h-[1px] w-32 bg-gray-500 opacity-50 transform rotate-90 origin-left"></div>
            <p className="text-sm tracking-widest text-gray-500 uppercase transform -rotate-90 origin-left whitespace-nowrap relative z-10 pl-4">
              Some of our clients
            </p>
          </div>

          {/* Main Heading */}
          <div className="flex-1 pl-40 md:pl-58">
            <div className="text-left mb-12">
              <h2 className="text-3xl md:text-5xl font-semibold leading-snug">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600 font-bold">
                  We help businesses
                </span>
                <br />
                all around the world to grow.
              </h2>
            </div>
          </div>
        </div>

        {/* Scrolling Logos */}
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-8 items-center py-6"
            animate={controls}
            initial={{ x: 0 }}
          >
            {duplicatedLogos.map((partner, idx) => (
              <div
                key={idx}
                className="relative flex-shrink-0 w-56 h-36 bg-white shadow-lg rounded-xl flex items-center justify-center"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={80}
                  className="object-contain"
                />
                <div className="absolute right-[-16px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-gray-500 to-transparent opacity-70"></div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
