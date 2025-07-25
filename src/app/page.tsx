import Hero from "./components/Hero";
import PartnersSection from "./components/Partners";
import PartnersPage from "./components/PartnersSection";
import MightyFiveStatement from "./components/Pitch";
import ServicesSection from "./components/ServicesCard";
import TeamSection from "./components/Team";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <MightyFiveStatement/>
      <Testimonials/>
      <ServicesSection />
    <PartnersSection />
      <TeamSection/>
      <PartnersPage/>
    </main>
  );
}
