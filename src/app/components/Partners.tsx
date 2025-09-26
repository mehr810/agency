"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const logos = [
  { name: "BAT", logo: "/logos/image.png" },
  { name: "VELO", logo: "/logos/image2.png" },
  { name: "PediaSure", logo: "/logos/logo1.png" },
  { name: "UNICEF", logo: "/logos/logo3.webp" },
  { name: "Asset Avenue", logo: "/pertner-logos/assetavenue-logo-1.png" },
  { name: "Atlas", logo: "/pertner-logos/Atlas.png", width: 220, height: 200 },
  { name: "Big Moe's Kitchen", logo: "/pertner-logos/Big-Moe's-Kitchen-Logo.png", width: 240, height: 140 },
  { name: "I Am Design", logo: "/pertner-logos/I-am-design.png", width: 240, height: 140 },
  { name: "Promethean", logo: "/pertner-logos/Promeathean.png" },
  { name: "Recession Proof Anchored", logo: "/pertner-logos/Recession.webp", width: 220, height: 130 },
  { name: "Verdent", logo: "/pertner-logos/verdent-Logo.png" },
  { name: "aroma", logo: "/pertner-logos/aroma-land.webp" },
  { name: "banners", logo: "/pertner-logos/banners.webp" },
  { name: "cabanit", logo: "/pertner-logos/cabanit.webp" },
  { name: "Mood-Logo", logo: "/pertner-logos/Mood-Logo.png" },
  { name: "juiceTV", logo: "/pertner-logos/juiceTV.png" },
  { name: "fish chips", logo: "/pertner-logos/fish-chips.webp" },
  { name: "kings", logo: "/pertner-logos/kings-pointe.webp", width: 180, height: 200 },
  { name: "zen", logo: "/pertner-logos/zen-living.webp" },
  { name: "dance again", logo: "/pertner-logos/dance-again.webp", width: 200, height: 230 },
];

export default function PartnersSection() { 
  const controls = useAnimation();

  // Calculate total width of one logos set (needed for infinite scroll)
  const totalWidth = logos.reduce((acc, logo) => acc + (logo.width || 200) + 40, 0); // 40 = gap approx

  useEffect(() => {
    controls.start({
      x: [0, -totalWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 90, // adjust speed here
          ease: "linear",
        },
      },
    });
  }, [controls, totalWidth]);

  return (
    <section>
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
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-6 sm:gap-10 items-center py-6 sm:py-8"
            animate={controls}
            initial={{ x: 0 }}
            style={{ willChange: "transform" }}
          >
            {[...logos, ...logos].map((partner, idx) => {
              const width = partner.width || 250; // default width
              const height = partner.height || 170; // default height

              return (
                <motion.div
                  key={idx}
                  className="relative flex-shrink-0"
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
                  {/* <div className="absolute right-[-12px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-gray-600 to-transparent opacity-70"></div> */}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
