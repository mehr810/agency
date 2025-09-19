import { FC } from "react";
import { Inter } from "next/font/google";
import HeroAbout from "../components/About/HeroAbout";
import IntroSection from "../components/About/IntroSection";
import WhyChooseUs from "../components/About/WhyChooseUs";
import TimeSteps from "../components/About/TimeSteps";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Mighty Five | Digital Marketing & Call Center",
  description:
      "Discover Mighty Five, a result-driven digital marketing and 24/7 call center agency helping brands grow with creative strategy, branding, and customer support.",
  keywords: [
    "Digital Marketing Specialist",
    "Top Branding Agency",
    "Ad Agency",
    "Web Development Experts",
    "Customer Engagement Solutions",
    "Branding Experts",
  ],
  openGraph: {
    title: "About Mighty Five | Digital Marketing & Call Center",
    description:
      "Discover Mighty Five, a result-driven digital marketing and 24/7 call center agency helping brands grow with creative strategy, branding, and customer support.",
    url: "https://mighy-five.vercel.app/about", // update this
    siteName: "Mighty Five",
    images: [
      {
        url: "https://yourdomain.com/og-about.jpg", // replace with your OG image
        width: 1200,
        height: 630,
        alt: "About Mighty Five - Digital Marketing & Call Center",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Mighty Five | Digital Marketing & Call Center",
    description:
      "Mighty Five delivers digital marketing, branding, and 24/7 call center solutions to help brands win leads, sales, and loyal customers.",
    images: ["https://yourdomain.com/og-about.jpg"],
  },
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '400', '700'], // whatever weights you want
  variable: '--font-inter',
});



const AboutPage: FC = () => {
  return (
    <main className={`${inter.className}  text-gray-900 relative`}>

      <HeroAbout />
      {/* INTRO + MISSION */}
      <IntroSection />
      {/* WHY CHOOSE US */}
      <WhyChooseUs />
      {/* PROCESS STEPS (TIMELINE) */}
      <TimeSteps />
    </main>
  );
};

export default AboutPage;
