"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black w-full px-4 py-1 md:px-12 md:py-12 font-sans">
      <div className="flex flex-col space-y-10">
        {/* Top Row: Logo */}
        <div className="flex justify-between items-start">
          <Link href="/" className="block">
            <Image
              src="/logo-mighty-five.png" // Ensure this exists in /public
              alt="Company Logo"
              width={80}
              height={40}
              priority
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Contact Info + Social Icons */}
        <div className="self-end text-lg text-right space-y-4 pr-4 md:pr-8"> {/* Added padding here */}
          {/* Contact Info */}
          <div className="space-y-0.5">
            <p className="font-semibold">5900 Balcones drive suite 7070</p>
            <p>Austin, texas, 78731</p>
            <p>Phone: (+1)3073003051</p>
            <p>Email: sales@mighty-five.com</p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-end space-x-3 pt-2">
            <SocialIcon url="https://www.instagram.com" bgColor="#000" fgColor="#fff" style={{ height: 30, width: 30 }} />
            <SocialIcon url="https://www.linkedin.com" bgColor="#000" fgColor="#fff" style={{ height: 30, width: 30 }} />
            <SocialIcon url="mailto:info@mightyfive.com" bgColor="#000" fgColor="#fff" style={{ height: 30, width: 30 }} />
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex justify-between items-center">
          <div>
            <p className="uppercase text-xs tracking-widest mb-1">
              Got a project in mind?
            </p>
            <h1 className="text-4xl md:text-5xl font-bold">LET&apos;S TALK</h1>
          </div>

          {/* Contact Arrow */}
          <Link href="/contact" className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 md:w-20 md:h-20 hover:scale-110 transition-transform duration-200 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 7l-10 10m10 0V7H7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;