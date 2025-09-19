import React from 'react'
import type { Metadata } from "next";

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
    url: "https://yourdomain.com/contact", // update to your domain
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


function ContactPage() {
  return (
    <div>ContactPage</div>
  )
}

export default ContactPage