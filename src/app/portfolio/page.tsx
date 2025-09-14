"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Inter } from "next/font/google";


const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '400', '700'], // whatever weights you want
  variable: '--font-inter',
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
            transition={{ duration: 1, ease: "easeOut" }}
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
                duration: 25, // a bit slower for mobile
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
            transition={{ duration: 1.2, ease: "easeOut" }}
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
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-[#4B4B4B] text-xl mb-6 leading-relaxed"
            >
              Mighty Five specializes in building
              <span className="block"> intuitive and innovative digital solutions </span>
              <span className="block">for the modern world</span>
            </motion.p>
            <Link href="/services">
              <motion.button
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
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
            transition={{ duration: 1, ease: "easeOut" }}
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
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ amount: 0.3 }}
              className="px-8 py-3 text-base sm:text-lg bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition duration-300 shadow-md"
            >
              Explore work
            </motion.button>
          </Link>
        </div>
      </section>


      {/* COMPLETED PROJECTS */}
      <div className="mt-10 md:mt-5 overflow-hidden">
        <h2 className="text-4xl sm:text-6xl md:text-9xl font-bold text-[#4B4B4B] tracking-widest ml-4 md:ml-10 flex flex-col">
          {/* Mobile Animation */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
            className="inline-block md:hidden"
          >
            COMPLETED
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ amount: 0.3 }}
            className="inline-block md:hidden"
          >
            PROJECTS
          </motion.span>

          {/* Desktop Animation */}
          <motion.span
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
            className="hidden md:inline-block"
          >
            COMPLETED
          </motion.span>

          <motion.span
            initial={{ x: 800, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.9 }}
            viewport={{ amount: 0.3 }}
            className="hidden md:inline-block md:mr-40"
          >
            PROJECTS
          </motion.span>
        </h2>

        <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center w-full px-4 md:px-12 gap-6 md:gap-0">
          <motion.p
            initial={{ x: -100, opacity: 0, color: "#4B4B4B" }}
            whileInView={{ x: 0, opacity: 1, color: "#1C1C1F" }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-left font-medium text-base sm:text-lg md:text-lg text-gray-600 max-w-md"
          >
            In digital landscape, our strategies rely<span className="block"> on data and insights to</span>
            drive success and deliver results.
          </motion.p>
          <Link href="/services">
            <motion.button
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
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
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-md text-left"
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
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
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
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full md:w-[841px] aspect-[16/9] relative overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/Big-moes.svg"
              alt="Project showcase"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-6 md:gap-8">
          {/* Text */}
          <motion.div
            initial={{ x: 150, opacity: 0, rotate: 5 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-md text-left"
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
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
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
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full md:w-[841px] aspect-[16/9] relative overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/verdent.png"
              alt="Project showcase"
              fill
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
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-md text-left"
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
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
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
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full md:w-[841px] aspect-[16/9] relative overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/real-estate.png"
              alt="Project showcase"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>


      {/* Closing Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
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
                transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
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
      <section className="mt-20 md:mt-28 overflow-hidden px-4 md:px-12 text-center">
        <h2 className="text-5xl sm:text-6xl md:text-9xl font-bold text-[#4B4B4B] tracking-widest flex flex-col items-center justify-center">
          {/* Mobile Animation */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="inline-block md:hidden text-[#1C1C1F]"
          >
            SERVICES
          </motion.span>

          {/* Desktop Animation */}
          <motion.span
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="hidden md:inline-block text-[#1C1C1F]"
          >
            SERVICES
          </motion.span>
        </h2>

      </section>
      {/* Section Title */}

      <h2 className="text-2xl sm:text-2xl text-[#4B4B4B] underline underline-offset-4 tracking-wide uppercase py-9 ml-10 md:mb-[-24px]">
        Services We Offer
      </h2>
      <section className="py-16 sm:py-10 md:ml-90">
        <div className="max-w-6xl mx-auto px-4">
          {/* Services List */}
          <div className="space-y-12 sm:space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12"
              >
                {/* Left Side - Content */}
                <div className="md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
                  <span className="text-gray-400 font-semibold text-xs sm:text-sm">
                    {service.id}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#4B4B4B] mt-1 sm:mt-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-xs sm:text-sm leading-relaxed max-w-xs sm:max-w-xl">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-3 sm:mt-4 justify-center md:justify-start">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 sm:px-4 py-1 rounded-full border border-gray-300 bg-gray-100 text-[10px] sm:text-xs font-medium text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="md:w-1/3 flex justify-center mt-4 md:mt-0">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden relative">
                    {service.image ? (
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover rounded-lg"
                        priority={index < 3} // lazy load all except first few
                      />
                    ) : (
                      <span className="text-gray-400 text-xs sm:text-sm">Image</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="mt-20 md:mt-28 overflow-hidden px-4 md:px-12">
        <h2 className="text-4xl text-left uppercase sm:text-6xl md:text-9xl font-bold text-[#4B4B4B] tracking-widest flex flex-col">
          {/* Mobile Animation */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="inline-block md:hidden"
          >
            50+
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            className="inline-block md:hidden"
          >
            Reviews
          </motion.span>

          {/* Desktop Animation */}
          <motion.span
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="hidden md:inline-block"
          >
            50+
          </motion.span>
          <motion.span
            initial={{ x: 800, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
            className="hidden md:inline-block"
          >
            Reviews
          </motion.span>
        </h2>
        <section className="bg-white py-20 px-4 sm:px-8 lg:px-16 overflow-x-hidden">
          <div className="relative w-full">
            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="rounded-xl shadow-md p-6 bg-gray-50 flex-shrink-0 hover:shadow-lg transition-shadow max-w-xs"
                >
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{testimonial.title}</p>

                  <div className="flex items-center mb-4">
                    <span className="text-4xl font-bold text-[#4B4B4B]">{testimonial.rating.toFixed(1)}</span>
                    <span className="ml-2 text-yellow-400 text-lg">
                      {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                      {testimonial.rating % 1 >= 0.5 ? '½' : ''}
                    </span>

                  </div>

                  <p className="text-gray-700 text-sm italic break-words">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>

              ))}
            </motion.div>
          </div>
        </section>
      </section>

      <section className="relative py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-9xl font-bold text-[#4b4b4b] tracking-widest flex flex-col">
          {/* Mobile Animation */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="inline-block md:hidden"
          >
            TIME TO ROAR!
          </motion.span>

          {/* Desktop Animation */}
          <motion.span
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="hidden md:inline-block"
          >
            TIME TO <span className="block"> ROAR!</span>
          </motion.span>
        </h2>

        {/* Button at bottom-right corner */}
        <div className="absolute bottom-6 right-4 sm:right-8 md:right-16">
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
