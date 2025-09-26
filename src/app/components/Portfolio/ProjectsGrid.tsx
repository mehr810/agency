"use client"
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ProjectsGrid() {
  return (
    <section className="mt-24 flex flex-col gap-24 px-4 md:px-12">
      {/* Project 1 */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        {/* Text */}
        <motion.div
          initial={{ x: -150, opacity: 0, rotate: -5 }}
          whileInView={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-md text-center md:text-left flex flex-col items-center md:items-start"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-[#4B4B4B] uppercase">
            Big Moe&apos;s
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-[#4B4B4B] leading-relaxed mb-4 md:mb-6">
            Website, Social Media
          </p>
          <motion.div
            initial={{ x: -80, opacity: 0, rotate: -3 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Link href="/portfolio/Bigmoes">
              <button className="px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition duration-300 shadow-md cursor-pointer">
                View Project
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ x: 150, opacity: 0, rotate: 5 }}
          whileInView={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full md:w-[841px] aspect-[16/9] relative overflow-hidden rounded-2xl"
        >
          <Image
            src="/images/Rectangle-9.png"
            alt="Project showcase"
            fill
            sizes="(max-width: 768px) 100vw, 841px"
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Project 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-6 md:gap-8">
        {/* Text */}
        <motion.div
          initial={{ x: 150, opacity: 0, rotate: 5 }}
          whileInView={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-md text-center md:text-left flex flex-col items-center md:items-start"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-[#4B4B4B] uppercase">
            Verdent
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-[#4B4B4B] leading-relaxed mb-4 md:mb-6">
            Social Media
          </p>
          <motion.div
            initial={{ x: 80, opacity: 0, rotate: 3 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Link href="/portfolio/verdent">
              <button className="px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition duration-300 shadow-md cursor-pointer">
                View Project
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ x: -150, opacity: 0, rotate: -5 }}
          whileInView={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full md:w-[841px] aspect-[16/9] relative overflow-hidden rounded-2xl"
        >
          <Image
            src="/images/verdent.png"
            alt="Project showcase"
            fill
            sizes="(max-width: 768px) 100vw, 841px"
            loading="lazy"
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Project 3 */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        {/* Text */}
        <motion.div
          initial={{ x: -150, opacity: 0, rotate: -5 }}
          whileInView={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-md text-center md:text-left flex flex-col items-center md:items-start"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-[#4B4B4B] uppercase">
            Asset Avenue
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-[#4B4B4B] leading-relaxed mb-4 md:mb-6">
            Website, Social Media
          </p>
          <motion.div
            initial={{ x: -80, opacity: 0, rotate: -3 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Link href="/portfolio/assetavenue">
              <button className="px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition duration-300 shadow-md cursor-pointer">
                View Project
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ x: 150, opacity: 0, rotate: 5 }}
          whileInView={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full md:w-[841px] aspect-[16/9] relative overflow-hidden rounded-2xl"
        >
          <Image
            src="/images/real-estate.png"
            alt="Project showcase"
            fill
            sizes="(max-width: 768px) 100vw, 841px"
            loading="lazy"
            className="object-cover"
          />
        </motion.div>
      </div>
      {/* Project 4 */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-4 md:gap-1 lg:gap-20 xl:gap-24">
        {/* Text */}
        <motion.div
          initial={{ x: 150, opacity: 0, rotate: 5 }}
          whileInView={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-md text-center md:text-left flex flex-col items-center md:items-start md:ml-8 lg:ml-12 xl:ml-16"
        >
          <h3 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-2 md:mb-3 text-[#4B4B4B] uppercase">
            U.B code <span className='block'>roofing</span> consultants
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-[#4B4B4B] leading-relaxed mb-3 md:mb-4">
            Social Media
          </p>
          <motion.div
            initial={{ x: 80, opacity: 0, rotate: 3 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Link href="/portfolio/UbCode">
              <button className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition duration-300 shadow-md cursor-pointer">
                View Project
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ x: -150, opacity: 0, rotate: -5 }}
          whileInView={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full md:w-[841px] aspect-[16/9] relative overflow-hidden rounded-2xl"
        >
          <Image
            src="/images/Ub-Code.webp"
            alt="Project showcase"
            fill
            sizes="(max-width: 768px) 100vw, 841px"
            loading="lazy"
            className="object-cover"
          />
        </motion.div>
      </div>


      {/* Closing Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-15 text-center text-lg sm:text-xl md:text-2xl text-[#4B4B4B] font-medium max-w-3xl mx-auto leading-relaxed px-4"
      >
        We strategize, create, and market{" "}
        <span className="block">your brand with transparency and </span>{" "}
        <span className="block">efficiency at every step.</span>
      </motion.p>

    </section>
  )
}

export default ProjectsGrid