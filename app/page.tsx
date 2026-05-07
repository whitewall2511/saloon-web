import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AppShowcase from "@/components/AppShowcase";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <AppShowcase />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
