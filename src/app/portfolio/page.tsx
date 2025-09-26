import { Inter } from "next/font/google"
import HeroPortfolio from "../components/Portfolio/HeroPortfolio"
import Projects from "../components/Portfolio/Projects"
import ProjectsGrid from "../components/Portfolio/ProjectsGrid"
import Stats from "../components/Portfolio/Stats"
import Reviews from "../components/Portfolio/Reviews"
import CTA from "../components/Portfolio/CTA"
import ServicesSection from "../components/ServicesSection"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Mighty Five Client Success Stories & Results",
  description:
    "See real results in Mighty Five’s portfolio: client success stories, growth projects, and proven expertise in marketing and 24/7 support.",
  keywords: [
    "Digital Marketing Case Studies",
    "Social Media Marketing Case Studies",
    "Client Success Story",
    "Result Driven Marketing",
    "SEO Organic Results",
    "SEO Report Example",
  ],
  openGraph: {
    title: "Portfolio | Mighty Five Client Success Stories & Results",
    description:
      "See real results in Mighty Five’s portfolio: client success stories, growth projects, and proven expertise in marketing and 24/7 support.",
    url: "https://mighy-five.vercel.app/portfolio", // update with your domain
    siteName: "Mighty Five",
    images: [
      {
        url: "https://yourdomain.com/og-portfolio.jpg", // replace with real OG image
        width: 1200,
        height: 630,
        alt: "Mighty Five Portfolio - Client Success Stories",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Mighty Five Client Success Stories & Results",
    description:
      "See real results in Mighty Five’s portfolio: client success stories, growth projects, and proven expertise in marketing and 24/7 support.",
    images: ["https://yourdomain.com/og-portfolio.jpg"], // same OG image
  },
};



const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
  variable: '--font-inter',
  display: 'swap',
});






// Dynamically import heavy sections

function Page() {

  return (
    <main
      className={`${inter.className} text-gray-900 relative overflow-hidden`}
    >
      {/* HERO */}
      <HeroPortfolio />

      {/* COMPLETED PROJECTS */}
      <Projects />

      {/* PROJECTS GRID */}
      <ProjectsGrid />
      {/* STATS */}
      <Stats />
      {/* SERVICES Section */}
      <ServicesSection/>
      {/* Reviews section */}
      <Reviews />
      {/* CTA Section */}
      <CTA />
    </main>
  )
}

export default Page