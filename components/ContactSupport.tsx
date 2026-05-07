import { HelpCircle, UserPlus, Handshake } from "lucide-react";

const supportCategories = [
  {
    icon: <HelpCircle className="w-8 h-8 text-accent" />,
    title: "Booking Help",
    description: "Need help with a current booking or technical issues with the app? Our support team is ready to assist you."
  },
  {
    icon: <UserPlus className="w-8 h-8 text-accent" />,
    title: "Barber Selection",
    description: "Not sure which barber to choose? We can provide recommendations based on your style preferences and location."
  },
  {
    icon: <Handshake className="w-8 h-8 text-accent" />,
    title: "Partnership Inquiries",
    description: "Own a salon and want to join our platform? Reach out to our business development team for collaboration."
  }
];

export default function ContactSupport() {
  return (
    <section className="py-24 bg-[#0B0B0C]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Other Ways to Connect</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">We're more than just a booking app. We're a community dedicated to the best grooming experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportCategories.map((cat, index) => (
            <div key={index} className="text-center p-8">
              <div className="flex justify-center mb-6">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
