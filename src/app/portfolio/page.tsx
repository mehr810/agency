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