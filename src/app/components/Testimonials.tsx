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
      staggerChildren: 0.3,  // Slightly longer stagger for dramatic wave
      delayChildren: 0.5,    // Delayed start for heading sync
    },
  },
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9,
    rotateX: -10,  // 3D tilt for depth on entrance
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.7,         // Snappier than before
      ease: [0.22, 1, 0.36, 1],  // Back ease for bouncy pop
      type: 'spring',        // Spring physics for lively feel
      stiffness: 300,
      damping: 20,
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const starsVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2 + i * 0.1,  // Staggered twinkle
      duration: 0.4,
      type: 'spring',
      stiffness: 400,
    },
  }),
};

const quoteVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const nameVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Testimonials: React.FC = () => {
  return (
    <section
      id='Testimonials'
      className="px-6 md:px-20 text-center"
      role="region"
      aria-label="Client Testimonials"
    >
      {/* Animated Heading with glow effect */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: true, amount: 0.4 }}
        whileHover={{ scale: 1.02 }}  // Subtle expand on hover
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-10"
          animate={{ textShadow: ['0 0 10px rgba(255,222,33,0.3)', '0 0 20px rgba(255,222,33,0.5)', 'none'] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}  // Pulsing glow
        >
          What Our Partners Think of Us
        </motion.h2>
      </motion.div>

      {/* Animated Testimonial Cards with enhanced stagger */}
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
            whileHover={{ 
              y: -8, 
              scale: 1.02, 
              rotateY: 5,  // Slight 3D tilt on hover
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)' 
            }}
            transition={{ 
              type: 'spring', 
              stiffness: 400, 
              damping: 20,
              duration: 0.3 
            }}
            className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all overflow-hidden relative"  // Added relative for pseudo-elements if needed
          >
            {/* Avatar with pop-in and subtle float */}
            <motion.div variants={imageVariants}>
              <Image
                src={t.image}
                alt={`${t.name} - ${t.title}`}
                width={100}
                height={100}
                className="rounded-full mb-4 object-cover"
                loading="lazy"
              />
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-transparent"
              />  {/* Subtle gradient ring float */}
            </motion.div>

            {/* Twinkling Stars */}
            <motion.div
              className="flex justify-center mb-2"
              variants={starsVariants}
              custom={index}  // Per-card stagger offset
            >
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  variants={starsVariants}
                  custom={i}
                  className="text-lg text-yellow-500 mx-0.5"
                >
                  ★
                </motion.span>
              ))}
            </motion.div>

            {/* Quote with slide-in */}
            <motion.blockquote 
              className="text-gray-700 italic text-sm mb-4 max-w-sm"
              variants={quoteVariants}
              style={{ overflow: 'hidden' }}
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="block h-6 bg-gradient-to-r from-transparent via-gray-50 to-transparent"
              />
              &quot;{t.quote}&quot;
            </motion.blockquote>

            {/* Name with bounce-up */}
            <motion.p 
              className="text-black font-semibold text-sm uppercase tracking-wide"
              variants={nameVariants}
            >
              {t.name}
            </motion.p>
            
            {/* Title fade-in */}
            <motion.p 
              className="text-gray-500 text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {t.title}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;