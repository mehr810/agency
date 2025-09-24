import React from 'react'
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import HeroContact from '../components/ContactUs/HeroContact';
import Socials from '../components/ContactUs/Socials';
import ContactForm from '../components/ContactUs/Form';

export const metadata: Metadata = {
  title: "Contact Mighty Five | Let’s Work Together Today",
  description:
    "Ready to grow? Contact Mighty Five for result-driven digital marketing and 24/7 call center support. Let’s work together to scale your business.",
  keywords: [
    "Digital Marketing Consultation",
    "Online Marketing Consultants",
    "Social Media Contact",
    "Social Media Marketing Agency",
    "Social Media Marketing Company",
    "Contact Us",
    "Contact Our Experts",
  ],
  openGraph: {
    title: "Contact Mighty Five | Let’s Work Together Today",
    description:
      "Ready to grow? Contact Mighty Five for result-driven digital marketing and 24/7 call center support. Let’s work together to scale your business.",
    url: "https://mighty-five.vercel.app/contact", // update to your domain
    siteName: "Mighty Five",
    images: [
      {
        url: "https://yourdomain.com/og-contact.jpg", // replace with your OG image
        width: 1200,
        height: 630,
        alt: "Contact Mighty Five - Digital Marketing & Call Center",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Mighty Five | Let’s Work Together Today",
    description:
      "Ready to grow? Contact Mighty Five for result-driven digital marketing and 24/7 call center support. Let’s work together to scale your business.",
    images: ["https://yourdomain.com/og-contact.jpg"], // same OG image
  },
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
  variable: '--font-inter',
  display: 'swap',
});

function ContactPage() {
  return (
  <main className={`${inter.className} text-gray-900 relative overflow-hidden`}>
    {/* Hero section */}
<HeroContact/>
{/* main heading */}
<section className="px-6 py-16 md:px-8 lg:px-24">
  <div className="text-center md:text-left max-w-4xl mx-auto">
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#4B4B4B] leading-tight">
      Want to work with us? <br />
      <span className="block">Let&apos;s connect</span>
    </h2>
    <p className="mt-4 text-base sm:text-lg md:text-xl text-[#5A5A5A] leading-relaxed">
      We offer a full range of digital services to help your brand{" "}
      <span className="block">stand out, connect, and grow.</span>
    </p>
  </div>
</section>
<Socials/>
<ContactForm/>
  </main>
  )
}

export default ContactPage