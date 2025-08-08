"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const logos = [
  { name: "BAT", logo: "/logos/image.png" },
  { name: "VELO", logo: "/logos/image2.png" },
  { name: "PediaSure", logo: "/logos/logo1.png" },
  { name: "UNICEF", logo: "/logos/logo3.webp" },
  { name: "Asset Avenue", logo: "/pertner-logos/Asset.png" },
  { name: "Atlas", logo: "/pertner-logos/Atlas.png", width: 220, height: 200 },
  { name: "Big Moe's Kitchen", logo: "/pertner-logos/Big-Moe's-Kitchen-Logo.png", width: 240, height: 140 }, 
  { name: "I Am Design", logo: "/pertner-logos/I-am-design.png", width: 240, height: 140 },
  { name: "Promethean", logo: "/pertner-logos/Promeathean.png" },
  { name: "Recession Proof Anchored", logo: "/pertner-logos/Recession.webp", width: 220, height: 130 }, 
  { name: "Verdent", logo: "/pertner-logos/VERDENT.JPG" },
  { name: "aroma", logo: "/pertner-logos/aroma-land.webp" },
  { name: "banners", logo: "/pertner-logos/banners.webp" },
  { name: "cabanit", logo: "/pertner-logos/cabanit.webp" },
  { name: "fish chips", logo: "/pertner-logos/fish-chips.webp" },
  { name: "kings", logo: "/pertner-logos/kings-pointe.webp", width: 180, height: 200 },
  { name: "zen", logo: "/pertner-logos/zen-living.webp" },
  { name: "dance again", logo: "/pertner-logos/dance-again.webp", width: 200, height: 230 }, 
];

export default function PartnersSection() {
  const controls = useAnimation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto-scroll
  useEffect(() => {
    if (isDragging) return;

    let index = 0;
    const scrollLoop = () => {
      index++;
      controls.start({
        x: `-${index * 220}px`, // scroll step
        transition: { duration: 0.7, ease: "easeInOut" },
      });

      if (index >= logos.length) {
        setTimeout(() => {
          controls.set({ x: 0 });
          index = 0;
        }, 800);
      }
    };

    const interval = setInterval(scrollLoop, 3000);
    return () => clearInterval(interval);
  }, [controls, isDragging]);

  // Mouse drag
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

  // Touch drag
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

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
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

        {/* Logos */}
        <div
          ref={scrollRef}
          className="overflow-x-scroll w-full cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => setIsDragging(false)}
        >
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
            {[...logos, ...logos].map((partner, idx) => {
              const width = partner.width || 200; // default width
              const height = partner.height || 120; // default height

              return (
                <motion.div
                  key={idx}
                  className="relative flex-shrink-0 hover:scale-[1.03] transition-transform duration-300"
                  whileHover={{ y: -10 }}
                  style={{
                    width,
                    height,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                  {/* Divider */}
                  <div className="absolute right-[-12px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-gray-300 to-transparent opacity-70"></div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
