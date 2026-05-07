import TermsHero from "@/components/TermsHero";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Terms & Conditions | WhiteWall Salon",
  description: "Read the terms and conditions for using the WhiteWall Salon platform and services.",
};

export default function TermsPage() {
  const sections = [
    {
      title: "Introduction",
      content: "Welcome to WhiteWall Salon. These Terms & Conditions govern your use of our website, mobile application, and the services provided through our platform. By accessing or using our services, you agree to be bound by these terms. Our platform connects clients with professional barbers and salons, providing a seamless booking and grooming experience. Please read these terms carefully before using our services."
    },
    {
      title: "User Responsibilities",
      content: "As a user of WhiteWall Salon, you are responsible for maintaining the confidentiality of your account information, including your password. You agree to provide accurate and complete information when creating an account and booking services. You are also responsible for all activities that occur under your account. Any misuse of the platform, including fraudulent bookings or harassment of service providers, may result in account termination."
    },
    {
      title: "Booking Policy",
      content: "Appointments can be booked directly through our mobile application or website. When you book an appointment, you receive a confirmation notification. It is your responsibility to arrive on time for your scheduled service. While we strive to ensure all bookings are honored, WhiteWall Salon acts as an intermediary, and the final fulfillment of the service is the responsibility of the selected barber or salon."
    },
    {
      title: "Cancellation & Refund",
      content: "We understand that plans can change. Cancellations made at least 24 hours before the scheduled appointment time are generally eligible for a full refund or can be rescheduled without penalty. Cancellations made within less than 24 hours may be subject to a cancellation fee as determined by the specific salon's policy. Refunds for prepaid services will be processed through the original payment method within 5-7 business days."
    },
    {
      title: "Barber & Salon Responsibility",
      content: "The barbers and salons listed on our platform are independent professionals. They are responsible for the quality of their services, maintaining a clean and safe environment, and adhering to professional standards. WhiteWall Salon regularly reviews partner performance, but we do not directly employ the barbers. Any issues regarding the quality of a specific service should first be addressed with the salon management."
    },
    {
      title: "Payments",
      content: "WhiteWall Salon supports multiple payment methods, including credit/debit cards and digital wallets. All transactions are processed securely through our third-party payment gateways. By providing payment information, you authorize us to charge the applicable fees for the services booked. Tips and additional services requested during the appointment may be paid directly at the salon or through the app where available."
    },
    {
      title: "Limitation of Liability",
      content: "To the maximum extent permitted by law, WhiteWall Salon shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services. This includes, but is not limited to, personal injury, property damage, or loss of data. Our total liability for any claim arising out of these terms shall not exceed the amount paid for the service in question."
    },
    {
      title: "Privacy Reference",
      content: "Your privacy is important to us. Our collection and use of personal information in connection with the services are described in our Privacy Policy. By using WhiteWall Salon, you consent to the data practices outlined in that policy. We use your information to facilitate bookings, improve our platform, and communicate important updates regarding your account and services."
    },
    {
      title: "Changes to Terms",
      content: "WhiteWall Salon reserves the right to modify these Terms & Conditions at any time. Any changes will be effective immediately upon posting the updated terms on our website and application. Your continued use of our services after such changes constitutes your acceptance of the new terms. We encourage you to review this page periodically to stay informed about our latest policies."
    }
  ];

  return (
    <main className="min-h-screen">
      <TermsHero />
      
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <div key={index} className="group">
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold border border-accent/20 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    {index + 1}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                    {section.title}
                  </h2>
                </div>
                <p className="text-gray-400 leading-relaxed text-lg pl-14">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-white/5 text-center">
            <p className="text-gray-500 italic">
              Last Updated: May 5, 2026
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 -right-64 w-96 h-96 bg-accent-dark/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-accent-dark/5 blur-[120px] rounded-full" />
      </section>

      <FinalCTA />
    </main>
  );
}
