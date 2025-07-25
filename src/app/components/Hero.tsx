"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Playfair_Display } from "next/font/google";

// Load Playfair Display via next/font/google
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
});

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Dynamically add the Charm font
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Charm:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const media: {
    type: "image" | "video";
    src: string;
    label: string;
    alt?: string;
    poster?: string;
    title?: string;
  }[] = [
    {
      type: "video",
      src: "/hero-video2.mp4",
      label: "Mighty Five: Reel",
      poster: "/fallback.jpg",
      title: "Mighty Five agency introduction video",
    },
    {
      type: "image",
      src: "/ecomaid.jpg",
      label: "Client: EcoMaid",
      alt: "EcoMaid Background Image",
    },
    {
      type: "image",
      src: "/ecomaid.jpg",
      label: "Client: GreenClean",
      alt: "GreenClean Background Image",
    },
  ];

  return (
    <section className="w-full overflow-hidden">
      {/* Top Text Section */}
      <div className="relative z-20 px-15 py-16 bg-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`text-4xl md:text-[79px] font-thin leading-snug text-black ${playfair.className}`}
        >
          We like doing
          <br />
          <span
            className="italic font-normal"
            style={{ fontFamily: "'Charm', cursive", fontWeight: 400 }}
          >
            — impossible things
          </span>
        </motion.h1>
      </div>

      {/* Hero Media Section */}
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 z-0">
          {media[activeIndex].type === "image" ? (
            <Image
              src={media[activeIndex].src}
              alt={media[activeIndex].alt ?? "Hero Background"}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="w-full h-full object-cover"
              poster={media[activeIndex].poster}
              title={media[activeIndex].title ?? "Background Video"}
            >
              <source src={media[activeIndex].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Content overlay */}
        <div className="relative z-10 flex h-full flex-col justify-between p-10 text-white">
          {/* Optional Overlay Title (empty here) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-semibold"
          ></motion.div>

          {/* Featured Navigation */}
          <div className="relative">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="absolute -top-8 left-0 px-2 text-xl font-semibold uppercase tracking-wide text-white"
            >
              Featured Stories
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border-t border-b border-white/20 pt-6 pb-4 flex items-end justify-between"
            >
              {/* Dynamic Left Label */}
              <motion.div
                whileHover={{ x: 5 }}
                className="text-4xl font-serif"
              >
                {media[activeIndex].label}
              </motion.div>

              {/* Navigation Numbers */}
              <motion.div className="flex items-center text-2xl font-medium">
                {media.map((_, index, arr) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setActiveIndex(index)}
                    className={`cursor-pointer ${index === activeIndex ? "font-bold" : "opacity-50"}`}
                  >
                    {`0${index + 1}`}
                    {index < arr.length - 1 && (
                      <span className="mx-2 text-white">/</span>
                    )}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
