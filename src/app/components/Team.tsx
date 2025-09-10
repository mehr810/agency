'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  { name: 'MEHR HAIDER', role: 'Founder', image: '/team/mehr.webp' },
  { name: 'MAHEEN', role: 'Co-Founder', image: '/team/maheen.webp' },
  { name: 'ASMA ASAD KHAN', role: 'Digital Innovation Lead', image: '/team/asma.webp' },
];

// Animation variants
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: 'blur(8px)',
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1],
    },
  }),
};

export default function TeamSection() {
  return (
    <section className="bg-white max-w-7xl mx-auto px-6 md:px-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl tracking-widest font-extrabold text-center text-gray-900 mb-12"
      >
        Meet Our Team
      </motion.h2>

      {/* Team Cards */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-10">
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center shadow-md rounded-md overflow-hidden w-64 bg-white"
          >
            <div className="relative w-full h-80">
              <Image
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
                sizes="256px"
                priority={i === 0}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
              <p className="text-sm font-semibold text-gray-800">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
