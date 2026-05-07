import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: <Mail className="w-6 h-6 text-accent" />,
    title: "Email Us",
    description: "Our team is here to help.",
    value: "support@whitewallsalon.com",
    link: "mailto:support@whitewallsalon.com"
  },
  {
    icon: <Phone className="w-6 h-6 text-accent" />,
    title: "Call Us",
    description: "Mon-Fri from 9am to 6pm.",
    value: "+966 12 345 6789",
    link: "tel:+966123456789"
  },
  {
    icon: <MapPin className="w-6 h-6 text-accent" />,
    title: "Our Location",
    description: "Visit our main office.",
    value: "King Fahd Rd, Riyadh, Saudi Arabia",
    link: "https://maps.google.com"
  },
  {
    icon: <Clock className="w-6 h-6 text-accent" />,
    title: "Working Hours",
    description: "Open 7 days a week.",
    value: "9:00 AM - 10:00 PM",
    link: "#"
  }
];

export default function ContactInfo() {
  return (
    <section className="py-24 bg-[#0B0B0C]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactDetails.map((detail, index) => (
            <div 
              key={index} 
              className="bg-glass p-8 rounded-3xl border border-white/5 hover:border-accent/30 transition-all group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {detail.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{detail.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{detail.description}</p>
              <a 
                href={detail.link} 
                className="text-accent font-semibold hover:underline decoration-2 underline-offset-4"
              >
                {detail.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
