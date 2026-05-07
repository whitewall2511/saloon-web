import AboutHero from "@/components/AboutHero";
import Stats from "@/components/Stats";
import PlatformOverview from "@/components/PlatformOverview";
import HowItWorks from "@/components/HowItWorks";
import AboutAppSection from "@/components/AboutAppSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "About Us | WhiteWall Salon",
  description: "Learn more about WhiteWall Salon, the ultimate grooming experience at your fingertips.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <Stats />
      <PlatformOverview />
      <HowItWorks />
      <AboutAppSection />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
