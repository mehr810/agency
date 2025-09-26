"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion';

const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.4, ease: 'easeOut' },
  }),
};


// Big left image
const bigImage = "/images/pageimage/bigimage.png";

// Right side 2x2 grid images
const rightGridImages = [
  "/images/pageimage/verdent-image1.png",
  "/images/pageimage/verdent-image2.png",
  "/images/pageimage/verdent-image3.png",
  "/images/pageimage/verdent-image4.png",
];

// Bottom row 4 images
const bottomImages = [
  "/images/pageimage/verdent-image5.png",
  "/images/pageimage/verdent-image6.png",
  "/images/pageimage/verdent-image7.png",
  "/images/pageimage/verdent-image8.png",
];

function Verdent() {
  return (
    <main>
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
              Verdent
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
              src="/images/Rectangle-91.png"
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
              src="/images/Rectangle-107.png"
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
              <Link href="/portfolio/assetavenue" className="block">
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
      {/* Primary Logo Section */}

      <section className="w-full flex flex-col items-center text-center py-16 space-y-12">
        <div>
          <h2 className="text-lg text-[#4B4B4B] font-semibold mb-4 uppercase tracking-wide">
            Primary Logo
          </h2>
          <Image
            src="/pertner-logos/verdent-Logo.png" // replace with your Verdent logo path
            alt="Verdent Logo"
            width={567}
            height={141}
            className="mx-auto"
          />
        </div>

        {/* Gray line */}
        <div className="w-full flex">
          <div className="mx-auto w-3/4 h-[1px] bg-gray-300" />
        </div>

        {/* Brand Image */}
        <div className="w-full max-w-4xl">
          <Image
            src="/images/pageimage/verdent-brand.png" alt="Verdent Brand"
            width={900}
            height={500}
            className="mx-auto rounded-lg shadow-md"
          />
        </div>

        {/* Gray line */}
        <div className="w-full flex">
          <div className="mx-auto w-3/4 h-[1px] bg-gray-300" />
        </div>

        {/* Fonts Section */}
        <div className="w-full max-w-2xl">
          <h2 className="text-lg text-[#4B4B4B] font-semibold mb-8 uppercase tracking-wide">
            Fonts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Main Heading Font */}
            <div>
              <p className="text-sm text-gray-600 mb-2">Main Heading</p>
              <p className="text-2xl font-serif text-[#4B4B4B] font-extrabold">EB Garamond</p>
              <p className="text-lg mt-1 text-[#4B4B4B]">AA</p>
            </div>

            {/* Sub Heading Font */}
            <div>
              <p className="text-sm text-gray-600 mb-2">Sub Heading</p>
              <p className="text-2xl font-sans text-[#4B4B4B] font-extrabold">Montserrat</p>
              <p className="text-lg mt-1 text-[#4B4B4B]">Aa</p>
            </div>
          </div>
        </div>
        {/* Gray line */}
        <div className="w-full flex">
          <div className="mx-auto w-3/4 h-[1px] bg-gray-300" />
        </div>
      </section>

      {/* VerdentGallery */}
      <section className="w-full flex flex-col items-center py-10 space-y-12">
        <h2 className="text-lg font-semibold mb-16 uppercase text-[#4B4B4B] tracking-wide text-center">
          Social Media Creatives
        </h2>

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl mb-2">
          {/* Left Big Image */}
          <div className="relative w-full h-[500px] md:h-[570px]">
            <Image
              src={bigImage}
              alt="Big showcase"
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Right Grid (2x2 images) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-2">
            {rightGridImages.map((img, i) => (
              <div key={i} className="relative w-full aspect-square">
                <Image
                  src={img}
                  alt={`Small ${i + 1}`}
                  fill
                  className="object-cover rounded-lg shadow-md"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row of 4 Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 w-full max-w-6xl">
          {bottomImages.map((img, i) => (
            <div key={i} className="relative w-full h-[400px] md:h-[300px]">
              <Image
                src={img}
                alt={`Bottom ${i + 1}`}
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>

      </section>
    </main>)
}

export default Verdent