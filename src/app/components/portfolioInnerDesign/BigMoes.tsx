"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Pause } from "lucide-react";
import { Inter } from "next/font/google";
import { motion, Variants } from 'framer-motion';

const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.4, ease: 'easeOut' },
  }),
};


const inter = Inter({ subsets: ["latin"], weight: ["100", "400", "700"] });

const colors = [
  { hex: "#C7171F" },
  { hex: "#000000" },
  { hex: "#F9E90D" },
  { hex: "#FFFFFF" },
];

//creative images
const creatives = [
  "/images/pageimage/bigmoes-image1.png",
  "/images/pageimage/bigmoes-image2.png",
  "/images/pageimage/bigmoes-image3.png",
  "/images/pageimage/bigmoes-image4.png",
  "/images/pageimage/bigmoes-image5.png",
  "/images/pageimage/bigmoes-image6.png",
  "/images/pageimage/bigmoes-image-7.png",
  "/images/pageimage/bigmoes-image8.png",
  "/images/pageimage/bigmoes-image9.png",
];

function BigMoes() {
  // ✅ video state + ref
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <main className={`${inter.className}`}>
      <section className="w-full flex flex-col items-end justify-center py-8 md:py-16">
        {/* Top Gray Line - Always at top */}
        <motion.div
          className="w-full flex order-1 px-4 md:px-0"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '100%', opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="ml-[calc((50%+5px))] h-[1px] bg-gray-400 flex-1" />
        </motion.div>

        {/* Heading and Toggle Buttons - Second on mobile, third on desktop */}
        <motion.div
          className="w-full mt-8 md:mt-12 flex flex-col items-center justify-center px-4 md:px-10 order-2 md:order-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-8 w-full max-w-4xl">
            {/* Centered Heading */}
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-[#4B4B4B] lg:text-left md:mr-12 text-center">
              Big moe&apos;s
            </h2>

            {/* Centered Toggle Buttons Group */}
            <div className="flex flex-col items-center lg:items-start gap-2 text-[#4B4B4B] md:mr-15 mt-4 md:mt-0">
              <div className="flex gap-2 flex-wrap justify-center">
                {['Branding', 'Social Media'].map((text, i) => (
                  <motion.button
                    key={i}
                    className="px-3 py-1 md:px-4 md:py-2 border border-gray-400 rounded-full transition text-sm md:text-base"
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                  >
                    {text}
                  </motion.button>
                ))}
              </div>
              <div className="mt-2 flex justify-center">
                <motion.button
                  className="px-3 py-1 md:px-4 md:py-2 border border-gray-400 rounded-full transition text-sm md:text-base"
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  custom={2}
                >
                  Creatives
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Image Row - Third and fourth on mobile, second on desktop */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-end w-full px-4 md:px-0 gap-6 md:gap-0 order-3 md:order-2">
          {/* Big Image - Third on mobile */}
          <motion.div
            className="relative w-full md:w-[700px] h-auto md:h-[400px] rounded-none overflow-hidden shadow-lg order-1"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Image
              src="/images/Rectangle-9.png"
              alt="Big Image"
              width={700}
              height={400}
              className="w-full h-auto md:h-full object-cover rounded-none"
              priority
            />
          </motion.div>

          {/* Small Image - Fourth on mobile */}
          <motion.div
            className="relative w-full md:w-[320px] h-[200px] md:h-[180px] rounded-b-none overflow-hidden shadow-xl md:translate-y-39 order-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          >
            <Image
              src="/images/Rectangle-91.png"
              alt="Small Image"
              fill
              className="object-cover object-left rounded-none"
              sizes="(max-width: 768px) 100vw, 320px"
            />

            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/30 to-transparent z-10" />

            {/* Check Out Button */}
            <motion.div
              className="absolute bottom-4 left-4 md:left-1 z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.5 }}
            >
              <Link href="/portfolio/verdent" 
              prefetch={true}  // Enables auto-prefetch on viewport/hover
              className="block">
                <button
                  className="flex items-center justify-center gap-2 px-3 bg-[#FFDE21] text-black rounded-full hover:bg-[#FFE55C] transition-colors font-medium shadow-lg cursor-pointer"
                  style={{ width: "140px", height: "34px" }}
                >
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 11L11 1M11 1H3M11 1V9"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  Check Out
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Gray Line - Always at bottom */}
        <motion.div
          className="w-full flex mt-6 md:mt-2 order-4 px-4 md:px-0"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '100%', opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
        >
          <div className="ml-[calc((100%-1040px))] h-[1px] bg-gray-400 flex-1" />
        </motion.div>
      </section>

      <section className="w-full flex flex-col items-center text-center space-y-10 py-12">
        {/* Primary Logo Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4 uppercase tracking-wide">
            Primary Logo
          </h2>
          <Image
            src="/images/Big-moes-logo.webp"
            alt="Primary Logo"
            width={150}
            height={150}
            className="mx-auto"
          />
        </div>

        {/* Color Palette */}
        <div className="w-full max-w-2xl">
          <h2 className="text-lg font-semibold mb-6 uppercase tracking-wide">
            Color Palette
          </h2>
          <div className="flex justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-10 flex-nowrap overflow-x-auto pb-2">
            {colors.map((c, i) => (
              <div key={i} className="flex flex-col items-center flex-shrink-0">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border shadow-md"
                  style={{ backgroundColor: c.hex }}
                />
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-mono text-center px-1">
                  {c.hex}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Web Design Section */}
        <div className="w-full max-w-4xl">
          <h2 className="text-lg text-[#4B4B4B] font-semibold mb-10 uppercase tracking-wide">
            Responsive Web Design
          </h2>
          <Image
            src="/images/Big-moes-web.png"
            alt="Responsive Web Design Preview"
            width={1265}
            height={566}
            className="mx-auto rounded-lg shadow-md"
          />
        </div>

        {/* Social Media Creatives */}
        <div className="w-full max-w-6xl">
          <h2 className="text-lg text-[#4B4B4B] font-semibold mb-6 uppercase tracking-wide">
            Social Media Creatives
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {creatives.map((img, i) => (
              <div
                key={i}
                className="w-full h-96 relative rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={img}
                  alt={`Creative ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Visual Narratives (custom video) */}
        <div className="w-full max-w-4xl">
          <h2 className="text-lg font-semibold mb-6 uppercase tracking-wide">
            Visual Narratives
          </h2>

          <div className="relative w-full rounded-lg shadow-md overflow-hidden">
            <video
              ref={videoRef}
              src="/images/pageimage/Big-moes.mp4"
              className="w-full rounded-lg"
              loop
            />

            <button
              onClick={togglePlay}
              className="absolute top-3 left-3 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition cursor-pointer"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-black" />
              ) : (
                <Play className="w-6 h-6 text-black" />
              )}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BigMoes;
