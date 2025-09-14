"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Footer: React.FC = () => {
  const pathname = usePathname();

  // agar loading page hai, to footer hide
  if (pathname?.includes("loading")) {
    return null;
  }

  return (
    <footer
      className=" text-black w-full px-4 py-1 md:px-12 md:py-12 font-sans"
      aria-label="Website Footer"
    >
      <motion.div
        className="flex flex-col space-y-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Top Row: Logo */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-start"
        >
          <Link href="/" aria-label="Go to Home">
            <Image
              src="/logo-mighty-five.png"
              alt="Mighty Five Company Logo"
              width={80}
              height={40}
              priority
              className="cursor-pointer"
            />
          </Link>
        </motion.div>

        {/* Contact Info + Social Icons */}
        <motion.address
          variants={{
            hidden: { opacity: 0, x: 40 },
            show: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="not-italic self-end text-lg text-right space-y-4 pr-4 md:pr-8"
        >
          {/* Contact Info */}
          <div className="space-y-1">
            <p className="font-semibold">
              <a
                href="https://maps.google.com/?q=5900+Balcones+Drive+Suite+7070,+Austin,+TX+78731"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline cursor-pointer"
              >
                5900 Balcones Drive Suite 7070
              </a>
            </p>
            <p>Austin, Texas, 78731</p>
            <p>
              Phone:{" "}
              <a
                href="tel:+13073003051"
                className="hover:underline cursor-pointer"
              >
                (+1) 307-300-3051
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:sales@mighty-five.com"
                className="hover:underline cursor-pointer"
              >
                sales@mighty-five.com
              </a>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-end space-x-3 pt-2">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="cursor-pointer"
            >
              <SocialIcon
                url="https://www.instagram.com"
                bgColor="#000"
                fgColor="#fff"
                style={{ height: 30, width: 30 }}
              />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="cursor-pointer"
            >
              <SocialIcon
                url="https://www.linkedin.com"
                bgColor="#000"
                fgColor="#fff"
                style={{ height: 30, width: 30 }}
              />
            </a>
            <a
              href="mailto:info@mightyfive.com"
              aria-label="Email"
              className="cursor-pointer"
            >
              <SocialIcon
                url="mailto:info@mightyfive.com"
                bgColor="#000"
                fgColor="#fff"
                style={{ height: 30, width: 30 }}
              />
            </a>
          </div>
        </motion.address>

        {/* CTA Section */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            show: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-between items-center"
        >
          <div>
            <p className="uppercase text-xs tracking-widest mb-1">
              Got a project in mind?
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">LET&apos;S TALK</h2>
          </div>

          {/* Contact Arrow */}
          <Link
            href="/contact"
            className="ml-2 cursor-pointer"
            aria-label="Go to Contact Page"
          >
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 7l-10 10m10 0V7H7"
              />
            </motion.svg>
          </Link>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
