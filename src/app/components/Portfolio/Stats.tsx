"use client"
import { motion } from 'framer-motion'
import React from 'react'

type StatCard = {
  number: string
  description: string
}

const defaultStats: StatCard[] = [
  {
    number: "30+",
    description:
      "Clients secured funding through our impactful marketing campaigns",
  },
  {
    number: "40+",
    description: "Trusted by international brands for impactful campaigns",
  },
  {
    number: "40+",
    description:
      "Designed and executed responsive, results-driven marketing strategies.",
  },
  {
    number: "5Y+",
    description: "We have had quite a run in our 5+ years of working.",
  },
]

function Stats() {
      const stats = defaultStats

  return (
    
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -120 : 120,
                  rotate: index % 2 === 0 ? -5 : 5,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  rotate: 0,
                }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="rounded-2xl border border-gray-200 shadow-md p-6 sm:p-8 bg-white flex flex-col text-left"
              >
                <h3 className="text-4xl sm:text-5xl font-extrabold text-[#1C1C1F] mb-8 sm:mb-16">
                  {stat.number}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Stats