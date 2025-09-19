import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Nevbar";
import Footer from "./components/Footer";
import BlurredBackground from "./components/BlurredBackground";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
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
    url: "https://yourdomain.com",
    siteName: "Mighty Five",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg", // ⚡ ask designer to provide 1200x630 branded OG image
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
    images: ["https://yourdomain.com/og-image.jpg"],
    creator: "@mightyfive", // ⚡ update with real Twitter handle
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
  metadataBase: new URL("https://yourdomain.com"),
  alternates: {
    canonical: "https://yourdomain.com",
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
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${grotesk.variable} antialiased`}
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
