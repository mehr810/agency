"use client";

import { motion } from "framer-motion";
import Hero from "./components/Hero";
import PartnersSection from "./components/Partners";
import PartnersPage from "./components/PartnersSection";
import MightyFiveStatement from "./components/Pitch";
import ServicesSection from "./components/ServicesCard";
import TeamSection from "./components/Team";
import Testimonials from "./components/Testimonials";

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="bg-white">
      <motion.section
        className="py-0 md:py-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <Hero />
      </motion.section>

      <motion.section
        className="py-0"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <MightyFiveStatement />
      </motion.section>

      <motion.section
        className="py-8 md:py-0"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <ServicesSection />
      </motion.section>

      <motion.section
        className="py-6 md:py-0"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <Testimonials />
      </motion.section>

      <motion.section
        className="py-6 md:py-0"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <PartnersSection />
      </motion.section>

      <motion.section
        className="py-6 md:py-0"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <TeamSection />
      </motion.section>

      <motion.section
        className="py-6 md:py-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <PartnersPage />
      </motion.section>
    </main>
  );
}
