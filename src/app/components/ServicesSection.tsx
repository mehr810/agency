"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  variable: "--font-inter",
  display: "swap",
});

type Service = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
};

// Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, when: "beforeChildren" },
  },
};

const serviceVariants = (index: number): Variants => ({
  hidden: { opacity: 0, x: index % 2 === 0 ? -60 : 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
});

const tagVariants: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ServicesSection({ services }: { services: Service[] }) {
  return (
    <section
      className={`${inter.className} mt-20 md:mt-28 overflow-hidden px-4 md:px-12 text-center`}
    >
      {/* Heading */}
      <h2 className="w-full text-center text-5xl sm:text-6xl md:text-9xl font-bold text-[#4B4B4B] tracking-widest flex flex-col items-center justify-center">
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="inline-block md:hidden text-[#1C1C1F]"
        >
          SERVICES
        </motion.span>
        <motion.span
          variants={{
            hidden: { opacity: 0, x: -300 },
            show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="hidden md:inline-block text-[#1C1C1F]"
        >
          SERVICES
        </motion.span>
      </h2>

      {/* Subheading */}
      <h2 className="text-2xl text-center md:text-left sm:text-2xl text-[#4B4B4B] underline underline-offset-4 tracking-wide uppercase py-9 ml-8 md:mb-[-24px]">
        Services We Offer
      </h2>

      {/* Services */}
      <section className="py-4 sm:py-10 md:ml-90">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="space-y-12 sm:space-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12"
                variants={serviceVariants(index)}
              >
                {/* Text Content */}
                <div className="md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                    className="text-gray-400 font-semibold text-xs sm:text-sm"
                  >
                    {service.id}
                  </motion.span>
                  <motion.h3
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                    }}
                    className="text-4xl sm:text-3xl font-bold text-[#4B4B4B] mt-1 sm:mt-2 uppercase"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    variants={{
                      hidden: { opacity: 0 },
                      show: { opacity: 1, transition: { duration: 0.9 } },
                    }}
                    className="text-gray-600 mt-2 text-xs sm:text-sm leading-relaxed max-w-xs sm:max-w-xl"
                  >
                    {service.description}
                  </motion.p>

                  {/* Tags */}
                  <motion.div
                    className="flex flex-wrap gap-2 mt-3 sm:mt-4 justify-center md:justify-start"
                    variants={containerVariants}
                  >
                    {service.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        className="px-3 sm:px-4 py-1 rounded-full border border-gray-300 bg-gray-100 text-[10px] sm:text-xs font-medium text-gray-700"
                        variants={tagVariants}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                {/* Image */}
                <motion.div
                  className="md:w-1/3 flex justify-center mt-4 md:mt-0"
                  variants={imageVariants}
                >
                  <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden relative">
                    {service.image ? (
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover rounded-lg"
                      />
                    ) : (
                      <span className="text-gray-400 text-xs sm:text-sm">
                        Image
                      </span>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </section>
  );
}
