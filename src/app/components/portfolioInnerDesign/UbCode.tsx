"use client"
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from 'framer-motion';

// Animation variants for toggle buttons to stagger their entrance
const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.4, ease: 'easeOut' },
  }),
};

export default function UbCode() {
  return (
    <main className="bg-white">
      <section className="w-full flex flex-col items-end justify-center py-8 md:py-16">
        {/* Top Gray Line - Always at top */}
        <motion.div
          className="w-full flex order-1 px-4 md:px-0"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '100%', opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="ml-[calc((50%+5px))] h-[1px] bg-gray-400 flex-1" />
        </motion.div>

        {/* Heading and Toggle Buttons - Second on mobile, third on desktop */}
        <motion.div
          className="w-full mt-8 md:mt-12 flex flex-col items-center justify-center px-4 md:px-10 order-2 md:order-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-8 w-full max-w-4xl">
            {/* Centered Heading */}
            <h2 className="text-3xl md:text-5xl font-bold uppercase text-[#4B4B4B] lg:text-left md:mr-12 text-center">
              ub code roofing
            </h2>

            {/* Centered Toggle Buttons Group */}
            <div className="flex flex-col items-center lg:items-start gap-2 text-[#4B4B4B] md:mr-auto mt-4 md:mt-0">
              <div className="flex gap-2 flex-wrap justify-center">
                {['Branding', 'Social Media'].map((text, i) => (
                  <motion.button
                    key={i}
                    className="px-3 py-1 md:px-4 md:py-2 border border-gray-400 rounded-full transition text-sm md:text-base"
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                  >
                    {text}
                  </motion.button>
                ))}
              </div>
              <div className="mt-2 flex justify-center">
                <motion.button
                  className="px-3 py-1 md:px-4 md:py-2 border border-gray-400 rounded-full transition text-sm md:text-base"
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  custom={2}
                >
                  Creatives
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Image Row - Third and fourth on mobile, second on desktop */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-end w-full px-4 md:px-0 gap-6 md:gap-0 order-3 md:order-2">
          {/* Big Image - Third on mobile */}
          <motion.div
            className="relative w-full md:w-[700px] h-auto md:h-[400px] rounded-none overflow-hidden shadow-lg order-1"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Image
              src="/images/Ub-Code.webp"
              alt="Big Image"
              width={700}
              height={400}
              className="w-full h-auto md:h-full object-cover rounded-none"
              priority
            />
          </motion.div>

          {/* Small Image - Fourth on mobile */}
          <motion.div
            className="relative w-full md:w-[320px] h-[200px] md:h-[180px] rounded-b-none overflow-hidden shadow-xl md:translate-y-39 order-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          >
            <Image
              src="/images/Big-moes.webp"
              alt="Small Image"
              fill
              className="object-cover object-left rounded-none"
              sizes="(max-width: 768px) 100vw, 320px"
            />

            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/30 to-transparent z-10" />

            {/* Check Out Button */}
            <div className="absolute bottom-4 left-4 md:left-1 z-20">
              <Link href="/portfolio/Bigmoes"
                prefetch={true}  // Enables auto-prefetch on viewport/hover

                className="block">
                <button
                  className="flex items-center justify-center gap-2 px-3 bg-[#FFDE21] text-black rounded-full hover:bg-[#FFE55C] transition-colors font-medium shadow-lg cursor-pointer"
                  style={{ width: "140px", height: "34px" }}
                >
                  Check Out
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Gray Line - Always at bottom */}
        <motion.div
          className="w-full flex mt-6 md:mt-2 order-4 px-4 md:px-0"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '100%', opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
        >
          <div className="ml-[calc((100%-1040px))] h-[1px] bg-gray-400 flex-1" />
        </motion.div>
      </section>
      {/* New Section: Full Image */}
      <section className="w-full py-16 flex justify-center">
        <div className="relative max-w-[1264px] w-full px-6 mx-auto h-auto">
          <Image
            src="/images/main-page.png"
            alt="UB Code Full Branding"
            width={1264}
            height={3728}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </section>

    </main>
  );
}
