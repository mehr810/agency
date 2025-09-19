"use client"
import { motion } from 'framer-motion'
import React from 'react'
import Link from 'next/link'

function CTA() {
  return (
<section className="relative py-12 sm:py-16 px-4 sm:px-8 lg:px-16">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-8xl lg:text-8xl font-bold text-[#4b4b4b] tracking-widest flex flex-col">
          {/* Mobile Animation */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="inline-block md:hidden"
          >
            TIME TO ROAR!
          </motion.span>

          {/* Desktop Animation */}
          <motion.span
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="hidden md:inline-block"
          >
            TIME TO <span className="block">ROAR!</span>
          </motion.span>
        </h2>

        {/* Button at bottom-right corner */}
        <div className="mt-8 md:mt-16 flex justify-end">
          <Link href="/contact">
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition duration-300 shadow-md"
            >
              Let&apos;s Talk
            </motion.button>
          </Link>
        </div>
      </section>  )
}

export default CTA