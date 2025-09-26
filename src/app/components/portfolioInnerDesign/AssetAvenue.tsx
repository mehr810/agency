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
const rowOneImages = [
  "/images/pageimage/assetavenue-image1.png",
  "/images/pageimage/assetavenue-image2.png",
  "/images/pageimage/assetavenue-image3.png",
];

const colOneImages = [
  "/images/pageimage/assetavenue-wid1.png",
  "/images/pageimage/assetavenue-wid2.png",
];

const colBigImages = [
  "/images/pageimage/assetavenue-image4.png",
  "/images/pageimage/assetavenue-image5.png",
  "/images/pageimage/assetavenue-image6.png",
];

function AssetAvenue() {
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
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide text-[#4B4B4B] lg:text-left md:mr-12 text-center">
              Asset avenue
            </h2>

            {/* Centered Toggle Buttons Group */}
            <div className="flex flex-col items-center lg:items-start gap-2 text-[#4B4B4B] md:mr-20 mt-4 md:mt-0">
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
              src="/images/Rectangle-107.png"
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
              src="/images/Ub-Code.webp"
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
              <Link href="/portfolio/UbCode" className="block">
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

      <section className="w-full flex flex-col items-center text-center py-16 space-y-12">
        {/* Primary Logo */}
        <div>
          <h2 className="text-lg text-[#4B4B4B] font-semibold mb-4 uppercase tracking-wide">
            Primary Logo
          </h2>
          <Image
            src="/images/pageimage/assetavenuelogo.png"
            alt="Brand Logo"
            width={567}
            height={141}
            className="mx-auto"
          />
        </div>

        {/* Gray Line */}
        <div className="w-full flex">
          <div className="mx-auto w-3/4 h-[1px] bg-gray-300" />
        </div>

        {/* Color Palette */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg text-[#4B4B4B] font-semibold mb-6 uppercase tracking-wide">
            Color Palette
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["#080808", "#105A37", "#3FAC55", "#CEAF57", "#FFFFFF"].map(
              (color, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className="w-20 h-20 rounded-full shadow-md border"
                    style={{ backgroundColor: color }}
                  />
                  <p className="mt-2 text-sm text-gray-600">{color}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Gray Line */}
        <div className="w-full flex">
          <div className="mx-auto w-3/4 h-[1px] bg-gray-300" />
        </div>

        {/* Fonts Section */}
        <div className="w-full max-w-3xl">
          <h2 className="text-lg text-[#4B4B4B] font-semibold mb-8 uppercase tracking-wide">
            Fonts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Main Heading Font */}
            <div>
              <p className="text-sm text-gray-600 mb-2">Main Heading</p>
              <p className="text-2xl font-sans text-[#4B4B4B] font-bold">
                Helvetica
              </p>
              <p className="text-lg mt-1 text-[#4B4B4B]">AA</p>
            </div>

            {/* Sub Heading Font */}
            <div>
              <p className="text-sm text-gray-600 mb-2">Sub Heading</p>
              <p className="text-2xl font-sans text-[#4B4B4B] font-bold">
                Poppins
              </p>
              <p className="text-lg mt-1 text-[#4B4B4B]">Aa</p>
            </div>
          </div>
        </div>

        {/* Gray Line */}
        <div className="w-full flex">
          <div className="mx-auto w-3/4 h-[1px] bg-gray-300" />
        </div>
      </section>

      <section className="w-full flex flex-col items-center py-8 md:py-16 space-y-4">
        <h2 className="text-base text-[#4B4B4B] md:text-lg font-semibold uppercase tracking-wide text-center">
          Social Media Creatives
        </h2>

        {/* Row 1 - Three images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full max-w-6xl mx-auto px-4 sm:px-0">
          {rowOneImages.map((img, i) => (
            <div key={i} className="relative w-full h-auto sm:h-[350px]">
              <Image
                src={img}
                alt={`Creative ${i + 1}`}
                width={400}
                height={350}
                className="w-full h-auto sm:h-full object-cover rounded-none shadow-md"
                priority={i === 0} // Priority for the first image to optimize loading
              />
            </div>
          ))}
        </div>

        {/* Row 2 - Four column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 w-full max-w-6xl mx-auto px-4 sm:px-0">
          {/* Column 1 - Two stacked images (span 2 cols on desktop) */}
          <div className="flex flex-col gap-4 col-span-1 sm:col-span-2">
            {colOneImages.map((img, i) => (
              <div key={i} className="relative w-full h-auto sm:h-[200px]">
                <Image
                  src={img}
                  alt={`Stacked ${i + 1}`}
                  width={400}
                  height={200}
                  className="w-full h-auto sm:h-full object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>

          {/* Columns 2, 3, 4 - Single big images */}
          {colBigImages.map((img, i) => (
            <div key={i} className="relative w-full h-auto sm:h-[420px] col-span-1">
              <Image
                src={img}
                alt={`Big ${i + 1}`}
                width={400}
                height={420}
                className="w-full h-auto sm:h-full object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}

export default AssetAvenue