"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [canHoverUnmute, setCanHoverUnmute] = useState(false);

  // Autoplay muted + intersection
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video
      .play()
      .then(() => setCanHoverUnmute(true))
      .catch(() => console.warn("Autoplay muted until interaction"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!video) return;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // First gesture unmute
  useEffect(() => {
    const handleUserInteraction = () => {
      const video = videoRef.current;
      if (!video) return;
      video.muted = false;
      setIsMuted(false);
      video.play().catch((err) =>
        console.warn("Play with sound blocked:", err)
      );
    };

    window.addEventListener("click", handleUserInteraction, { once: true });
    window.addEventListener("touchstart", handleUserInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);

  // Hover unmute (desktop)
  useEffect(() => {
    if (!canHoverUnmute) return;
    const video = videoRef.current;
    if (!video) return;

    const handleMouseEnter = () => {
      video.muted = false;
      setIsMuted(false);
    };
    video.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      video.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [canHoverUnmute]);

  return (
    <motion.section
      className="relative w-full sm:h-screen overflow-hidden pt-10 sm:pt-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Mobile: normal flow, Desktop: absolute fill */}
      <video
        ref={videoRef}
        className="w-full h-auto object-contain sm:absolute sm:inset-0 sm:w-full sm:h-full sm:object-cover sm:object-center"
        playsInline
        loop
        autoPlay
        muted={isMuted}
      >
        <source src="/hero-video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.section>
  );
};

export default HeroSection;
