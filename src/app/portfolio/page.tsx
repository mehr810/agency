"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Inter } from "next/font/google"
import dynamic from "next/dynamic"

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
  variable: '--font-inter',
  display: 'swap',
});

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

const services = [
  {
    id: "[01]",
    title: "Branding",
    description:
      "Our goal is your brand’s wild influence. Exclusive logos, mockups, and corporate identities make your unique value stand out.",
    tags: ["Logo Design", "Brand Guidelines", "Visual Identity", "Presentations"],
    image: "/images/branding.png",
  },
  {
    id: "[02]",
    title: "Social Media Management",
    description:
      "We craft engaging content, manage campaigns, and grow your audience on all platforms to maximize brand visibility and engagement.",
    tags: ["Content Creation", "Community Management", "Campaign Analytics", "Growth Strategy"],
    image: "/images/service-2.png",
  },
  {
    id: "[03]",
    title: "Service Design",
    description:
      "We design seamless, intuitive services that enhance customer experiences and streamline operations from start to finish.",
    tags: ["User Journey Mapping", "Prototyping", "UX Strategy", "Service Optimization"],
    image: "/images/service-3.png",
  },
  {
    id: "[04]",
    title: "Website Development",
    description:
      "We build fast, responsive, and scalable websites that represent your brand and drive measurable results online.",
    tags: ["Next.js", "React", "Responsive Design", "E-commerce Solutions"],
    image: "/images/service-4.png",
  },
  {
    id: "[05]",
    title: "SEO",
    description:
      "Our SEO experts increase your visibility in search engines, drive organic traffic, and improve conversion rates with proven strategies.",
    tags: ["Keyword Research", "On-Page SEO", "Link Building", "Technical SEO"],
    image: "/images/service-5.png",
  },
  {
    id: "[06]",
    title: "Customer Support",
    description:
      "We provide exceptional customer support solutions to keep your clients happy, loyal, and satisfied across every channel.",
    tags: ["Live Chat", "Ticketing System", "Knowledge Base", "Customer Satisfaction Metrics"],
    image: "/images/service-6.png",
  },
];

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

// Dynamically import heavy sections
const ServicesSection = dynamic(() => import('../components/ServicesSection'), { ssr: false });
const TestimonialsSection = dynamic(() => import('../components/TestimonialsSection'), { ssr: false });

function Page() {
  const stats = defaultStats

  return (
    <main
      className={`${inter.className} text-gray-900 relative overflow-hidden`}
    >
      {/* HERO */}
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
            <Link href="/services">
              <motion.button
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="px-10 py-4 text-lg bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition duration-300 shadow-md"
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
          <Link href="/services">
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
      </section>

      {/* COMPLETED PROJECTS */}
      <div className="sm:mt-10 md:mt-5 overflow-hidden">
        <h2 className="text-4xl sm:text-6xl md:text-9xl font-bold text-[#4B4B4B] tracking-widest flex flex-col items-center md:items-start">
          {/* Mobile Animation */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
            className="inline-block md:hidden"
          >
            COMPLETED
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ amount: 0.3 }}
            className="inline-block md:hidden"
          >
            PROJECTS
          </motion.span>

          {/* Desktop Animation */}
          <motion.span
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
            className="hidden md:inline-block"
          >
            COMPLETED
          </motion.span>

          <motion.span
            initial={{ x: 800, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
            viewport={{ amount: 0.3 }}
            className="hidden md:inline-block md:mr-40"
          >
            PROJECTS
          </motion.span>
        </h2>

        <div className="mt-6 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start w-full px-4 md:px-12 gap-6 md:gap-0 text-center md:text-left">
          <motion.p
            initial={{ x: -100, opacity: 0, color: "#4B4B4B" }}
            whileInView={{ x: 0, opacity: 1, color: "#1C1C1F" }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-medium text-base sm:text-lg md:text-lg text-gray-600 max-w-md"
          >
            In digital landscape, our strategies rely<span className="block"> on data and insights to</span>
            drive success and deliver results.
          </motion.p>

          <Link href="/services">
            <motion.button
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition duration-300 shadow-md"
            >
              Explore work
            </motion.button>
          </Link>
        </div>
      </div>


      {/* PROJECTS GRID */}
      <section className="mt-24 flex flex-col gap-24 px-4 md:px-12">
        {/* Project 1 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Text */}
          <motion.div
            initial={{ x: -150, opacity: 0, rotate: -5 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-md text-center md:text-left flex flex-col items-center md:items-start"
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-[#4B4B4B] uppercase">
              Big Moe&apos;s
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-[#4B4B4B] leading-relaxed mb-4 md:mb-6">
              Website, Social Media
            </p>
            <motion.div
              initial={{ x: -80, opacity: 0, rotate: -3 }}
              whileInView={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Link href="/services">
                <button className="px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition duration-300 shadow-md">
                  View Project
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ x: 150, opacity: 0, rotate: 5 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full md:w-[841px] aspect-[16/9] relative overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/Big-moes.svg"
              alt="Project showcase"
              fill
              sizes="(max-width: 768px) 100vw, 841px"
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-6 md:gap-8">
          {/* Text */}
          <motion.div
            initial={{ x: 150, opacity: 0, rotate: 5 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-md text-center md:text-left flex flex-col items-center md:items-start"
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-[#4B4B4B] uppercase">
              Verdent
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-[#4B4B4B] leading-relaxed mb-4 md:mb-6">
              Social Media
            </p>
            <motion.div
              initial={{ x: 80, opacity: 0, rotate: 3 }}
              whileInView={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Link href="/services">
                <button className="px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition duration-300 shadow-md">
                  View Project
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ x: -150, opacity: 0, rotate: -5 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full md:w-[841px] aspect-[16/9] relative overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/verdent.png"
              alt="Project showcase"
              fill
              sizes="(max-width: 768px) 100vw, 841px"
              loading="lazy"
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Project 3 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Text */}
          <motion.div
            initial={{ x: -150, opacity: 0, rotate: -5 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-md text-center md:text-left flex flex-col items-center md:items-start"
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-[#4B4B4B] uppercase">
              Asset Avenue
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-[#4B4B4B] leading-relaxed mb-4 md:mb-6">
              Website, Social Media
            </p>
            <motion.div
              initial={{ x: -80, opacity: 0, rotate: -3 }}
              whileInView={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Link href="/services">
                <button className="px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition duration-300 shadow-md">
                  View Project
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ x: 150, opacity: 0, rotate: 5 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full md:w-[841px] aspect-[16/9] relative overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/real-estate.png"
              alt="Project showcase"
              fill
              sizes="(max-width: 768px) 100vw, 841px"
              loading="lazy"
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>


      {/* Closing Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-32 text-center text-lg sm:text-xl md:text-2xl text-[#4B4B4B] font-medium max-w-3xl mx-auto leading-relaxed px-4"
      >
        We strategize, create, and market{" "}
        <span className="block">your brand with transparency and </span>{" "}
        <span className="block">efficiency at every step.</span>
      </motion.p>

      {/* STATS */}
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

      {/* SERVICES Section */}
      <ServicesSection services={services} />

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
      </section>

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
      </section>
    </main>
  )
}

export default Page