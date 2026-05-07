import { Calendar, User, Clock, CreditCard, History } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Calendar className="w-6 h-6 text-accent" />,
      title: "Easy Booking",
      description: "Book your favorite services with just a few taps.",
    },
    {
      icon: <User className="w-6 h-6 text-accent" />,
      title: "Choose Your Barber",
      description: "Select your preferred professional for the perfect look.",
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: "Flexible Time Slots",
      description: "Find a time that perfectly fits your busy schedule.",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-accent" />,
      title: "Secure Payments",
      description: "Fast and safe transactions directly through the app.",
    },
    {
      icon: <History className="w-6 h-6 text-accent" />,
      title: "Booking History",
      description: "Keep track of all your past and upcoming appointments.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#080a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Everything You Need in One App</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We've designed every feature to make your salon experience seamless, fast, and enjoyable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-glass p-8 rounded-3xl hover:border-accent/50 transition-all group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
