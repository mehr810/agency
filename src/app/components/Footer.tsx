"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const Footer: React.FC = () => {
  const pathname = usePathname();

  if (pathname?.includes("loading")) {
    return null;
  }

  return (
    <footer className={`${inter.className} text-black w-full px-6 py-12 md:px-16 md:py-16 font-sans border-t border-gray-200`}>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-5 gap-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Logo + Info */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6 }}
          className="space-y-4 col-span-2"
        >
          <Link href="/" aria-label="Go to Home">
            <Image
              src="/logo-mighty-five.png"
              alt="Mighty Five Company Logo"
              width={100}
              height={50}
              priority
              className="cursor-pointer"
            />
          </Link>

          <p className="text-2xl text-gray-600">
            Creative minds building impactful digital experiences.
          </p>

          {/* Contact Info with Icons */}
          <div className="text-sm text-gray-600 space-y-2 mt-5">
            <p className="flex items-center gap-2">
              {/* Phone Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.27 1.07l-1.52 1.52a16 16 0 006.36 6.36l1.52-1.52a1 1 0 011.07-.27l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1c-9.39 0-17-7.61-17-17V5z"
                />
              </svg>
              <a href="tel:+13073003051" className="hover:underline">
                (+1) 307-300-3051
              </a>
            </p>

            <p className="flex items-center gap-2">
              {/* Email Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12H8m8-4H8m-2 8h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <a href="mailto:sales@mighty-five.com" className="hover:underline">
                sales@mighty-five.com
              </a>
            </p>
          </div>
        </motion.div>

        {/* Quick Navigation */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="font-bold mb-3">Quick Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/#our-services">Features</Link></li>
            <li><Link href="/#Testimonials">Testimonials</Link></li>
            {/* <li><Link href="/faq">FAQ&apos;s</Link></li> */}
          </ul>
        </motion.div>

        {/* All Pages */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="font-bold mb-3">All Pages</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/contact">Contact us</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/services">services</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <h4 className="font-bold">Social Media</h4>
          <div className="flex space-x-3">
            <SocialIcon url="https://www.linkedin.com/company/mighty-five-agency/" bgColor="#000" fgColor="#fff" style={{ height: 30, width: 30 }} />
            <SocialIcon url="https://www.instagram.com/mightyfive.agency?igsh=YXJ2eWY1cTBjZHpp" bgColor="#000" fgColor="#fff" style={{ height: 30, width: 30 }} />
            <SocialIcon url="mailto:sales@mighty-five.com " bgColor="#000" fgColor="#fff" style={{ height: 30, width: 30 }} />
          </div>
        </motion.div>
      </motion.div>

      {/* Arrow CTA only */}
      <motion.div
        variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex justify-end"
      >
        <Link href="/contact" className="cursor-pointer" aria-label="Go to Contact Page">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 md:w-20 md:h-20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            whileHover={{ scale: 1.2, rotate: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10m10 0V7H7" />
          </motion.svg>
        </Link>
      </motion.div>

      <div className="flex justify-center items-center text-xs text-gray-500">
        <p>© All rights reserved 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
