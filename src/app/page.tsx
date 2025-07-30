"use client";

import Hero from "./components/Hero";
import PartnersSection from "./components/Partners";
import ServicesSection from "./components/ServicesCard";
import TeamSection from "./components/Team";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="bg-white">
      <section className="py-0 md:py-4">
        <Hero />
      </section>

      <section className="min-h-screen py-8 md:py-12">
        <ServicesSection />
      </section>

      <section className="py-8 md:py-12">
        <PartnersSection />
      </section>

      <section className="py-8 md:py-12">
        <TeamSection />
      </section>

      <section className="py-8 md:py-12">
        <Testimonials />
      </section>
    </main>
  );
}
