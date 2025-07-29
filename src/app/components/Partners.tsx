"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const logos = [
  { name: "BAT", logo: "/logos/image.png" },
  { name: "VELO", logo: "/logos/image2.png" },
  { name: "PediaSure", logo: "/logos/logo1.png" },
  { name: "UNICEF", logo: "/logos/logo3.webp" },
  { name: "Asset Avenue", logo: "/pertner-logos/Asset.png" },
  { name: "Atlas", logo: "/pertner-logos/Atlas.png" },
  { name: "Big Moe's Kitchen", logo: "/pertner-logos/Big-Moe's-Kitchen-Logo.png" },
  { name: "I Am Design", logo: "/pertner-logos/I-am-design.jpg" },
  { name: "Promethean", logo: "/pertner-logos/Promeathean.png" },
  { name: "Recession Proof Anchored", logo: "/pertner-logos/Recession.PNG" },
  { name: "Verdent", logo: "/pertner-logos/VERDENT.jpg" },
];

export default function PartnersSection() {
  const controls = useAnimation();
  const cardWidth = 320; // desktop card width

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

    const interval = setInterval(stepScroll, 3000);

    return () => clearInterval(interval);
  }, [controls]);

  const duplicatedLogos = [...logos, ...logos];

  return (
    <div>
      {/* Top Heading Section */}
      <section className="py-12 sm:py-16 bg-white text-center">
        <h3 className="text-sm sm:text-base md:text-lg text-gray-600 uppercase tracking-widest inline-block border-b-2 border-blue-300 pb-1">
          Know more about us
        </h3>
      </section>

      {/* Partners Section */}
      <section className="bg-white mt-10 sm:mt-16">
        <div className="max-w-7xl mx-auto flex items-start gap-4 relative px-4">
          {/* Vertical Side Text */}
          <div className="hidden sm:flex absolute left-16 sm:left-32 md:left-48 top-1/2 transform -translate-y-1/2 items-center">
            <div className="absolute h-[1px] w-20 sm:w-32 bg-gray-500 opacity-50 transform rotate-90 origin-left"></div>
            <p className="text-xs sm:text-sm tracking-widest text-gray-500 uppercase transform -rotate-90 origin-left whitespace-nowrap relative z-10 pl-4">
              Some of our clients
            </p>
          </div>

          {/* Main Heading */}
          <div className="flex-1 pl-0 sm:pl-40 md:pl-64">
            <div className="text-left mb-8 sm:mb-16">
              <h2 className="text-2xl sm:text-4xl md:text-6xl font-semibold leading-snug">
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
            className="flex gap-6 sm:gap-10 items-center py-6 sm:py-8"
            animate={controls}
            initial={{ x: 0 }}
          >
            {duplicatedLogos.map((partner, idx) => (
              <div
                key={idx}
                className="relative flex-shrink-0 w-56 h-36 sm:w-72 sm:h-44 md:w-80 md:h-52 bg-white shadow-xl rounded-2xl flex items-center justify-center p-4 sm:p-6"
              >
                <div className="w-full h-full relative">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
                <div className="absolute right-[-12px] top-4 bottom-4 sm:top-6 sm:bottom-6 w-[2px] bg-gradient-to-b from-gray-500 to-transparent opacity-70"></div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
