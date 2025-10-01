"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

function Projects() {
  return (
<div className="sm:mt-10 md:mt-5 overflow-hidden">
        <h2 className="text-4xl sm:text-6xl md:text-9xl font-bold text-[#4B4B4B] tracking-widest flex flex-col items-center md:items-start">
          {/* Mobile Animation */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
            className="inline-block md:hidden"
          >
            COMPLETED
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ amount: 0.3 }}
            className="inline-block md:hidden"
          >
            PROJECTS
          </motion.span>

          {/* Desktop Animation */}
          <motion.span
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
            className="hidden md:inline-block"
          >
            COMPLETED
          </motion.span>

          <motion.span
            initial={{ x: 800, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
            viewport={{ amount: 0.3 }}
            className="hidden md:inline-block md:mr-40"
          >
            PROJECTS
          </motion.span>
        </h2>

        <div className="mt-6 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start w-full px-4 md:px-12 gap-6 md:gap-0 text-center md:text-left">
          <motion.p
            initial={{ x: -100, opacity: 0, color: "#4B4B4B" }}
            whileInView={{ x: 0, opacity: 1, color: "#1C1C1F" }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-medium text-base sm:text-lg md:text-lg text-gray-600 max-w-md"
          >
            In digital landscape, our strategies rely<span className="block"> on data and insights to</span>
            drive success and deliver results.
          </motion.p>

          <Link href="/portfolio/Bigmoes"
          prefetch={true}  // Enables auto-prefetch on viewport/hover
          >
            <motion.button
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition duration-300 shadow-md cursor-pointer"
            >
              Explore work
            </motion.button>
          </Link>
        </div>
      </div>
  )
}

export default Projects