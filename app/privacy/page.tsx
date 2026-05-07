import PrivacyHero from "@/components/PrivacyHero";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Privacy Policy | WhiteWall Salon",
  description: "Learn about how WhiteWall Salon collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  const sections = [
    {
      title: "Introduction",
      content: "At White Wall Salon, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website, mobile application, and services. By using our platform, you agree to the collection and use of information in accordance with this policy. We strive to maintain the highest standards of data protection to ensure your trust and security."
    },
    {
      title: "Information We Collect",
      content: "We collect various types of information to provide and improve our services to you. This includes personal identification information such as your name, email address, phone number, and physical address. We also collect usage data, including your IP address, browser type, and information about how you interact with our platform. Additionally, we may collect information regarding your grooming preferences and booking history to personalize your experience."
    },
    {
      title: "How We Use Information",
      content: "The information we collect is used for several purposes: to process your salon bookings, to communicate with you about appointments, and to provide customer support. We also use your data to improve our platform's functionality, analyze usage trends, and send you promotional offers or updates about new services if you have opted in to receive them. Your data helps us ensure that our service remains efficient and tailored to your needs."
    },
    {
      title: "Sharing of Information",
      content: "We do not sell or rent your personal information to third parties. We may share your data with trusted service providers, such as the salons and barbers you book with, to facilitate the completion of your services. We may also share information with third-party vendors who assist us with payment processing, data analysis, and marketing efforts. All our partners are required to maintain the confidentiality and security of your information."
    },
    {
      title: "Data Security",
      content: "We implement a variety of security measures to maintain the safety of your personal information. This includes using encryption technologies, secure servers, and regular security audits. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security."
    },
    {
      title: "Cookies",
      content: "White Wall Salon uses cookies and similar tracking technologies to track the activity on our platform and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service effectively."
    },
    {
      title: "User Rights",
      content: "You have certain rights regarding your personal information. You can access, update, or delete your personal data directly through your account settings. If you wish to receive a copy of the data we hold about you or if you believe any information we have is incorrect, please contact us. You also have the right to object to the processing of your data and to withdraw your consent for marketing communications at any time."
    },
    {
      title: "Changes to Policy",
      content: "We may update our Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date at the bottom. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information."
    }
  ];

  return (
    <main className="min-h-screen">
      <PrivacyHero />
      
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
