"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current;
      if (!video) return;

      const rect = video.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // If video is mostly out of view vertically, pause or mute it
      if (rect.bottom < 100 || rect.top > windowHeight - 100) {
        video.muted = true;
        video.pause();
      } else {
        video.muted = false;
        video.play().catch(() => {});
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const media = {
    src: "/hero-video2.mp4",
    poster: "/fallback.jpg",
    title: "Mighty Five agency introduction video",
  };

  return (
    <section className="w-full overflow-hidden mt-10">
      {/* Heading */}
      <div className="relative z-20 px-4 md:px-15 sm:py-4 bg-white">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-[69px] leading-snug text-black drop-shadow"
            style={{ fontFamily: "Montserrat", fontWeight: 700 }}
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
                className="block pl-10 md:pl-22 lg:pl-28 text-3xl sm:text-4xl md:text-3xl lg:text-[69px]"
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
      </div>

    {/* Video */}
<div className="relative w-full bg-white py-2 sm:py-4">
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative w-full aspect-video sm:max-w-3xl md:max-w-5xl lg:max-w-none lg:px-0"
  >
    <video
      ref={videoRef}
      autoPlay
      playsInline
      loop
      preload="auto"
      muted // 🔈 Optional: ensures autoplay works on all devices
      className="w-full h-full object-contain sm:object-cover rounded-lg shadow-lg"
      poster={media.poster}
      title={media.title}
    >
      <source src={media.src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </motion.div>
</div>
</section>
  );
};

export default HeroSection;
 