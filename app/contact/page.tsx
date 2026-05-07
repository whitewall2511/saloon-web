import ContactHero from "@/components/ContactHero";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import ContactSupport from "@/components/ContactSupport";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Contact Us | WhiteWall Salon",
  description: "Get in touch with WhiteWall Salon. We are here to help you with your booking, barber selection, and partnership inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactSupport />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
