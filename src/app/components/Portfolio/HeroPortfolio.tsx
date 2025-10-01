"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

function HeroPortfolio() {
  return (
<section className="py-12 md:py-24 text-center relative">
        {/* Mobile Marquee */}
        <div className="block md:hidden w-full overflow-hidden relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex whitespace-nowrap
        [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]
        [-webkit-mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]
      "
          >
            <motion.h1
              className="text-4xl sm:text-5xl font-bold px-4"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              }}
            >
              . Portfolio . &nbsp; . Portfolio . &nbsp; . Portfolio . &nbsp;
            </motion.h1>
            <motion.h1
              className="text-4xl sm:text-5xl font-bold px-4"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              }}
            >
              . Portfolio . &nbsp; . Portfolio . &nbsp; . Portfolio . &nbsp;
            </motion.h1>
          </motion.div>
        </div>

        {/* Desktop Marquee */}
        <div className="hidden md:block w-full overflow-hidden relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex whitespace-nowrap
        [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]
        [-webkit-mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]
      "
          >
            <motion.h1
              className="text-[200px] font-bold px-8"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              }}
            >
              . Portfolio . &nbsp; . Portfolio . &nbsp; . Portfolio . &nbsp;
            </motion.h1>
            <motion.h1
              className="text-[200px] font-bold px-8"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              }}
            >
              . Portfolio . &nbsp; . Portfolio . &nbsp; . Portfolio . &nbsp;
            </motion.h1>
          </motion.div>
        </div>

        {/* Paragraph and Button - desktop */}
        <div className="hidden md:flex justify-end mr-52">
          <div className="text-left max-w-md">
            <motion.p
              initial={{ x: -100, opacity: 0, color: "#4B4B4B" }}
              whileInView={{ x: 0, opacity: 1, color: "#1C1C1F" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-[#4B4B4B] text-xl mb-6 leading-relaxed"
            >
              Mighty Five specializes in building
              <span className="block"> intuitive and innovative digital </span>
              <span className="block"> solutions for the modern world</span>
            </motion.p>
            <Link href="/portfolio/Bigmoes"
            prefetch={true}  // Enables auto-prefetch on viewport/hover
            >
              <motion.button
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="px-10 py-4 text-lg bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition duration-300 shadow-md cursor-pointer"
              >
                Explore work
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Paragraph and Button - mobile */}
        <div className="md:hidden mt-8 px-4">
          <motion.p
            initial={{ x: -100, opacity: 0, color: "#4B4B4B" }}
            whileInView={{ x: 0, opacity: 1, color: "#1C1C1F" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
            className="text-lg sm:text-xl mb-6 leading-relaxed font-semibold tracking-wide"
          >
            Mighty Five specializes in building
            <span className="block"> intuitive and innovative digital solutions </span>
            <span className="block">for the modern world</span>
          </motion.p>
          <Link 
          href="/portfolio/Bigmoes"
            prefetch={true}
          >
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ amount: 0.3 }}
              className="px-8 py-3 text-base sm:text-lg bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition duration-300 shadow-md"
            >
              Explore work
            </motion.button>
          </Link>
        </div>
      </section>  )
}

export default HeroPortfolio
