"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @font-face {
        font-family: 'Montserrat';
        src: url('/fonts/Montserrat-Bold.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
      }

      @font-face {
        font-family: 'Montserrat';
        src: url('/fonts/Montserrat-Bold.ttf') format('truetype');
        font-weight: 700;
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
    <section className="w-full overflow-hidden mt-10">
      {/* Top Text */}
  {/* <div className="relative z-20 px-4 md:px-15 py-0 sm:py-4 bg-white">
    <div className="overflow-hidden">
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-6xl lg:text-[69px] leading-snug text-black drop-shadow"
        style={{
          fontFamily: "Montserrat",
          fontWeight: 700,
        }}
      >
        <span className="block overflow-hidden">
          <motion.span
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="block"
          >
            We like doing
          </motion.span>
        </span>
        <span className="block overflow-hidden">
          <motion.span
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.3, delay: 0.2, ease: "easeOut" }}
            className="italic block pl-10 md:pl-22 lg:pl-28 text-3xl sm:text-4xl md:text-3xl lg:text-[69px]"
            style={{
              fontFamily: "Montserrat",
              fontWeight: 700,
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            impossible things
          </motion.span>
        </span>
      </motion.h1>
    </div>
  </div> */}

      {/* Hero Media */}
      <div className="relative w-full bg-white py-2 sm:py-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.3, delay: 0.5, ease: "anticipate" }}
          className="relative w-full aspect-video sm:max-w-3xl md:max-w-5xl lg:max-w-none lg:px-0"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="w-full h-full object-contain sm:object-cover rounded-lg shadow-lg"
            poster={media[0].poster}
            title={media[0].title}
          >
            <source src={media[0].src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
