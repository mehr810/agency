'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

// ✅ Type definition for each testimonial
type Testimonial = {
  name: string;
  title: string;
  image: string;
  quote: string;
};

// ✅ Testimonials data
const testimonials: Testimonial[] = [
  {
    name: 'Dider Bizimungu',
    title: 'Matterport, Paid Media Director',
    image: '/testimonials/image1.jpg',
    quote:
      'We are a unique company with unique solutions, so having a flexible, receptive, & knowledgeable partner is crucial to us achieving our goals.',
  },
  {
    name: 'Maggie Li',
    title: 'Growth Marketing Manager, MyHealthTeams',
    image: '/testimonials/image3.jpg',
    quote:
      'The workflow between our teams is seamless and based on mutual trust and communication. The team at Mighty Five is really knowledgeable.',
  },
  {
    name: 'Kaili Spear',
    title: 'Marketing Manager, Grow.com',
    image: '/testimonials/image2.jpg',
    quote:
      'They started getting results quickly and the leads are already moving through the funnel. We are super happy.',
  },
];

// ✅ Framer Motion animation variants
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.4,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const Testimonials: React.FC = () => {
  return (
    <section
    id='Testimonials'
      className=" px-6 md:px-20 text-center"
      role="region"
      aria-label="Client Testimonials"
    >
      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          What Our Partners Think of Us{' '}
        {/* <span className="text-black underline decoration-[#FFDE21]">
          MIGHTY FIVE
        </span> */}
        </h2>
      </motion.div>

      {/* Animated Testimonial Cards */}
      <motion.div
        className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.015 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all"
          >
            <Image
              src={t.image}
              alt={`${t.name} - ${t.title}`}
              width={100}
              height={100}
              className="rounded-full mb-4 object-cover"
              loading="lazy"
            />
            <p className="text-lg text-yellow-500 mb-2">★ ★ ★ ★ ★</p>
            <blockquote className="text-gray-700 italic text-sm mb-4 max-w-sm">
              “{t.quote}”
            </blockquote>
            <p className="text-black font-semibold text-sm uppercase tracking-wide">
              {t.name}
            </p>
            <p className="text-gray-500 text-xs">{t.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
