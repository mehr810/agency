"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { Playfair_Display } from "next/font/google";

// Fonts from Google
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
});

const HeroSection = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @font-face {
        font-family: 'BeautySalon';
        src: url('/fonts/BeautySalon Script Regular.ttf') format('truetype');
        font-weight: thin;
        font-style: normal;
      }
    `;
    document.head.appendChild(style);
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
    <section className="w-full overflow-hidden mt-8">
      {/* Top Text */}
      <div className="relative z-20 px-4 md:px-12 py-0 sm:py-4 bg-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`text-3xl sm:text-4xl md:text-6xl lg:text-[79px] font-thin leading-snug text-black ${playfair.className} drop-shadow`}
          style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.2)" }}
        >
          We like doing
          <br />
          <span
            className="italic block text-3xl sm:text-4xl md:text-6xl lg:text-[79px] pl-10 md:pl-20 lg:pl-28"
            style={{
              fontFamily: "BeautySalon, cursive",
              fontWeight: "thin",
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            impossible things
          </span>
        </motion.h1>
      </div>

      {/* Hero Media */}
      <div className="relative w-full bg-white py-0 sm:py-4">
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
