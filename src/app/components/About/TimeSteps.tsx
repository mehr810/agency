"use client"
import { motion } from 'framer-motion'
import React from 'react'

function TimeSteps() {
  return (
<section className="pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-gray-600 text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3">
          3 easy steps to get
          <span className="block text-gray-600 mt-2 sm:mt-3 md:mt-4 mb-4 sm:mb-5">started</span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-12 sm:mb-14 md:mb-16">
          Our three-step method blends strategy and creativity
          <span className="block text-gray-600 mt-1 sm:mt-2">
            while keeping you in the loop.
          </span>
        </p>

        {/* TIMELINE */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-yellow-400 -translate-x-1/2"></div>

          {/* STEP 1 */}
          <motion.div
            className="mb-12 sm:mb-14 md:mb-16 lg:mb-20 flex flex-col md:flex-row md:justify-end relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 sm:-top-5 md:top-6 bg-yellow-400 text-black font-bold rounded-full w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center z-10">
              01
            </div>
            <div className="bg-[#151515] text-white p-4 sm:p-6 rounded-2xl w-full md:w-96 text-left relative mt-10 sm:mt-12 md:mt-0 md:ml-8 lg:ml-10">
              <span className="absolute -top-2 sm:-top-3 right-2 sm:right-3 bg-yellow-400 text-black text-xs px-2 sm:px-3 py-1 rounded-full">
                3-5 days
              </span>
              <h3 className="font-bold mb-1 sm:mb-2 text-base sm:text-lg">Discovery & Strategy</h3>
              <p className="text-xs sm:text-sm text-gray-300">
                We start by understanding your goals, audience, and challenges. Together, we define the vision and roadmap.
              </p>
            </div>
          </motion.div>

          {/* STEP 2 */}
          <motion.div
            className="mb-12 sm:mb-14 md:mb-16 lg:mb-20 flex flex-col md:flex-row md:justify-start relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 sm:-top-5 md:top-6 bg-yellow-400 text-black font-bold rounded-full w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center z-10">
              02
            </div>
            <div className="bg-[#151515] text-white p-4 sm:p-6 rounded-2xl w-full md:w-96 text-left relative mt-10 sm:mt-12 md:mt-0 md:mr-8 lg:mr-10">
              <span className="absolute -top-2 sm:-top-3 left-2 sm:left-3 bg-yellow-400 text-black text-xs px-2 sm:px-3 py-1 rounded-full">
                1 week
              </span>
              <h3 className="font-bold mb-1 sm:mb-2 text-base sm:text-lg">Design & Prototype</h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Our team crafts modern, user-friendly designs that reflect your brand and engage your users.
              </p>
            </div>
          </motion.div>

          {/* STEP 3 */}
          <motion.div
            className="flex flex-col md:flex-row md:justify-end relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 sm:-top-5 md:top-6 bg-yellow-400 text-black font-bold rounded-full w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center z-10">
              03
            </div>
            <div className="bg-[#151515] text-white p-4 sm:p-6 rounded-2xl w-full md:w-96 text-left relative mt-10 sm:mt-12 md:mt-0 md:ml-8 lg:ml-10">
              <span className="absolute -top-2 sm:-top-3 right-2 sm:right-3 bg-yellow-400 text-black text-xs px-2 sm:px-3 py-1 rounded-full">
                6-7 days
              </span>
              <h3 className="font-bold mb-1 sm:mb-2 text-base sm:text-lg">Launch & Support</h3>
              <p className="text-xs sm:text-sm text-gray-300">
                After launch, we stay by your side with updates, optimizations and long-term support.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TimeSteps
