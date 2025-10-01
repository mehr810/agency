import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Nevbar";
import Footer from "./components/Footer";
import BlurredBackground from "./components/BlurredBackground";

// Fonts

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


// ✅ Global SEO Metadata
export const metadata: Metadata = {
  title: "Mighty Five | Digital Marketing & 24/7 Call Center Support",
  description:
    "Mighty Five delivers result-driven digital marketing and 24/7 call center support, helping brands win leads, sales, and loyal customers.",
  keywords: [
    "Digital Marketing Agency",
    "Lead Generation Services",
    "Branding Agency",
    "Marketing Services Agency",
    "Brand Design Services",
    "Digital Branding Services",
  ],
  openGraph: {
    title: "Mighty Five | Digital Marketing & 24/7 Call Center Support",
    description:
      "From First Click to Final Call, We’ve Got You Covered. Mighty Five delivers digital marketing and 24/7 call center support.",
    url: "https://mighty-five.com/",
    siteName: "Mighty Five",
    images: [
      {
        url: "/og_image.png", 
        width: 1200,
        height: 630,
        alt: "Mighty Five Digital Marketing and Call Center Support",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mighty Five | Digital Marketing & 24/7 Call Center Support",
    description:
      "From First Click to Final Call, We’ve Got You Covered. Mighty Five delivers result-driven digital marketing and 24/7 call center support.",
    // images: ["https://yourdomain.com/og-image.jpg"],
    creator: "@mightyfive", 
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://mighty-five.com/"),
  alternates: {
    canonical: "https://mighty-five.com/",
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <BlurredBackground />
        <Navbar />
        <div className="h-[100px]" />
        {children}
        <Footer />

      </body>
    </html>
  );
}
