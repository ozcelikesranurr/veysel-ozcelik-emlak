import { Hero } from "@/components/Hero";
import { PropertyGrid } from "@/components/PropertyGrid";
import { AboutExpert } from "@/components/AboutExpert";
import { ValuationSection } from "@/components/ValuationSection";
import { InvestmentGuide } from "@/components/InvestmentGuide";
import { Testimonials } from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PropertyGrid />
      <AboutExpert />
      <ValuationSection />
      <InvestmentGuide />
      <Testimonials />
      <ContactSection />
    </>
  );
}
