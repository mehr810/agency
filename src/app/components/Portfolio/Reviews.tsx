"use client"
import React from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic';

type Testimonial = {
  name: string;
  title: string;
  rating: number;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Matthew Blake',
    title: 'Chief Executive Officer',
    rating: 5,
    quote: 'Their speed and swift execution truly impressed me on this project.',
  },
  {
    name: 'Jonathan Cross',
    title: 'Founder & Chief Executive',
    rating: 5,
    quote: "I couldn't believe how quickly everything came together.",
  },
  {
    name: 'William Tate',
    title: 'Managing Partner & CEO',
    rating: 5,
    quote: 'I was amazed by their efficiency and how fast everything progressed.',
  },
  {
    name: 'Sophia Reynolds',
    title: 'Marketing Director',
    rating: 5,
    quote: 'The team’s creativity and strategy exceeded our expectations.',
  },
  {
    name: 'Ethan Clarke',
    title: 'Product Manager',
    rating: 5,
    quote: 'Communication was smooth and the project delivery was perfect.',
  },
  {
    name: 'Olivia Morgan',
    title: 'Creative Lead',
    rating: 5,
    quote: 'Absolutely loved the way they handled every detail meticulously.',
  },
  {
    name: 'Liam Foster',
    title: 'Operations Head',
    rating: 5,
    quote: 'Professional, fast, and highly skilled — a pleasure to work with!',
  },
];

const TestimonialsSection = dynamic(() => import('../TestimonialsSection'), { ssr: false });

function Reviews() {
  return (
<section className="mt-8 md:mt-28 overflow-hidden px-4 md:px-12">
        <h2 className="text-6xl text-left uppercase sm:text-6xl md:text-9xl font-bold text-[#4B4B4B] tracking-widest flex flex-col">
          {/* Mobile Animation */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="inline-block md:hidden"
          >
            50+
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            className="inline-block md:hidden"
          >
            Reviews
          </motion.span>

          {/* Desktop Animation */}
          <motion.span
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="hidden md:inline-block"
          >
            50+
          </motion.span>
          <motion.span
            initial={{ x: 800, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            className="hidden md:inline-block"
          >
            Reviews
          </motion.span>
        </h2>
        <TestimonialsSection testimonials={testimonials} />
      </section>  )
}

export default Reviews