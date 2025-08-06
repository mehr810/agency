"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [soundIndicatorVisible, setSoundIndicatorVisible] = useState(false);

  // Handle user interaction to enable sound
  useEffect(() => {
    if (hasInteracted) return;

    const handleInteraction = () => {
      setHasInteracted(true);
      
      // Unmute the video if it's playing
      if (videoRef.current && !videoRef.current.paused) {
        try {
          videoRef.current.muted = false;
          setIsMuted(false);
          
          // Show sound indicator briefly
          setSoundIndicatorVisible(true);
          setTimeout(() => setSoundIndicatorVisible(false), 3000);
        } catch (e) {
          console.error("Error unmuting video:", e);
        }
      }
    };

    // Add event listeners for various interaction types
    const events = [
      "click", "dblclick", "mousedown", "mouseup", "mousemove", 
      "touchstart", "touchend", "touchmove", "touchcancel",
      "keydown", "keyup", "keypress",
      "scroll", "wheel"
    ];

    events.forEach(event => {
      document.addEventListener(event, handleInteraction, { once: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleInteraction);
      });
    };
  }, [hasInteracted]);

  // Attempt to automatically unmute when MEI allows it
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const handleCanPlay = () => {
      // Try unmuting if the browser allows it (high MEI)
      try {
        if (!hasInteracted && video.muted) {
          video.muted = false;
          setIsMuted(false);
          setSoundIndicatorVisible(true);
          setTimeout(() => setSoundIndicatorVisible(false), 3000);
        }
      } catch (e) {
        console.log("Automatic unmute not allowed yet");
      }
    };

    video.addEventListener("canplay", handleCanPlay);
    
    return () => {
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, [hasInteracted]);

  const media = [
    {
      type: "video",
      src: "/hero-video2.mp4",
      label: "Mighty Five: Reel",
      poster: "/fallback.jpg",
      title: "Mighty Five agency introduction video",
    },
  ];

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
      
      if (!videoRef.current.muted) {
        setSoundIndicatorVisible(true);
        setTimeout(() => setSoundIndicatorVisible(false), 3000);
      }
    }
  };

  return (
    <section className="w-full overflow-hidden mt-10">
      <div className="relative w-full bg-white py-2 sm:py-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.3, delay: 0.5, ease: "anticipate" }}
          className="relative w-full aspect-video sm:max-w-3xl md:max-w-5xl lg:max-w-none lg:px-0"
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-contain sm:object-cover rounded-lg shadow-lg"
            poster={media[0].poster}
            title={media[0].title}
          >
            <source src={media[0].src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Mute button - visible only when video is muted */}
          {isMuted && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.3 }}
              onClick={toggleMute}
              className="absolute bottom-4 right-4 bg-black bg-opacity-60 rounded-full p-2 z-10 group hover:bg-opacity-80 transition-all"
              aria-label="Unmute video"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-white group-hover:text-blue-300 transition-colors"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15.536 8.464a5 5 0 010 7.072M12 6a9 9 0 010 12m-5.5-8.5l-4 4m0-4l4 4" 
                />
              </svg>
              <span className="sr-only">Unmute</span>
            </motion.button>
          )}
          
          {/* Sound enabled indicator - shows briefly after unmute */}
          {!isMuted && soundIndicatorVisible && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 right-4 bg-green-500 text-white text-xs font-medium rounded-full px-3 py-1 z-10 flex items-center gap-2"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15.536 8.464a5 5 0 010 7.072M12 6a9 9 0 010 12" 
                />
              </svg>
              Sound On
            </motion.div>
          )}
        </motion.div>
      </div>
      
      {/* Instructional text that fades out after interaction */}
      {!hasInteracted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-gray-600 text-sm mt-4 px-4"
        >
          <p>Scroll, click, or interact anywhere to enable sound</p>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;