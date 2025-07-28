"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { Playfair_Display, League_Spartan } from "next/font/google";

// Fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
});

const spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-spartan",
});

const HeroSection = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Charm:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const media = [
    {
      type: "video",
      src: "/hero-video2.mp4",
      label: "Mighty Five: Reel",
      poster: "/fallback.jpg",
      title: "Mighty Five agency introduction video",
    },
  ];

  return (
    <section className="w-full overflow-hidden">
      {/* Top Text */}
      <div className="relative z-20 px-4 md:px-12 py-10 md:py-16 bg-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`text-3xl sm:text-4xl md:text-6xl lg:text-[79px] font-thin leading-snug text-black ${playfair.className}`}
        >
          We like doing
          <br />
          <span
            className={`italic font-normal ${spartan.className}`}
            style={{ fontWeight: 400 }}
          >
            — impossible things
          </span>
        </motion.h1>
      </div>

      {/* Hero Media */}
      <div className="relative w-full bg-white py-4 sm:py-10">
        <div className="relative mx-auto w-full aspect-video sm:max-w-3xl md:max-w-5xl lg:max-w-7xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="w-full h-full object-contain sm:object-cover"
            poster={media[0].poster}
            title={media[0].title}
          >
            <source src={media[0].src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
