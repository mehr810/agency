"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const logos = [
  { name: "BAT", logo: "/logos/image.png" },
  { name: "VELO", logo: "/logos/image2.png" },
  { name: "PediaSure", logo: "/logos/logo1.png" },
  { name: "UNICEF", logo: "/logos/logo3.webp" },
  { name: "Asset Avenue", logo: "/pertner-logos/Asset.png" },
  { name: "Atlas", logo: "/pertner-logos/Atlas.png" },
  { name: "Big Moe's Kitchen", logo: "/pertner-logos/Big-Moe's-Kitchen-Logo.png" },
  { name: "I Am Design", logo: "/pertner-logos/I-am-design.png" },
  { name: "Promethean", logo: "/pertner-logos/Promeathean.png" },
  { name: "Recession Proof Anchored", logo: "/pertner-logos/Recession.PNG" },
  { name: "Verdent", logo: "/pertner-logos/VERDENT.jpg" },
];

export default function PartnersSection() {
  const controls = useAnimation();
  const cardWidth = 300;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    if (isDragging) return;

    let index = 0;
    const totalSteps = logos.length;

    const scrollLoop = () => {
      index++;
      controls.start({
        x: `-${index * cardWidth}px`,
        transition: { duration: 0.7, ease: "easeInOut" },
      });

      if (index >= totalSteps) {
        setTimeout(() => {
          controls.set({ x: 0 });
          index = 0;
        }, 800);
      }
    };

    const interval = setInterval(scrollLoop, 3000);
    return () => clearInterval(interval);
  }, [controls, isDragging]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  // Touch drag handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => setIsDragging(false);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Animated Heading */}
        <motion.div
          className="text-left mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-snug">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
              We help businesses
            </span>
            <br />
            all around the world to grow.
          </h2>
        </motion.div>

        {/* Scrollable Logos */}
        <div
          ref={scrollRef}
          className="overflow-x-scroll w-full cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Hide scrollbar */}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          <motion.div
            className="flex gap-6 sm:gap-10 items-center py-6 sm:py-8"
            animate={controls}
            initial={{ x: 0 }}
          >
            {[...logos, ...logos].map((partner, idx) => (
              <motion.div
                key={idx}
                className="relative flex-shrink-0 p-4 sm:p-6 rounded-xl hover:scale-[1.03] transition-transform duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="w-[260px] h-[190px] relative flex items-center justify-center bg-white shadow-md rounded-xl">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Divider */}
                <div className="absolute right-[-12px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-gray-300 to-transparent opacity-70"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
