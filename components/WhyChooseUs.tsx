import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Fast and Easy Booking",
      description: "Book your appointment in less than 60 seconds.",
    },
    {
      title: "Trusted Salons and Professionals",
      description: "We only partner with top-rated, verified salons.",
    },
    {
      title: "Seamless Experience",
      description: "A smooth, intuitive interface designed for modern users.",
    },
    {
      title: "Secure and Reliable",
      description: "Your data and payments are always protected.",
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Why Choose WhiteWall Salon</h2>
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4 p-6 bg-glass rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{reason.title}</h3>
                    <p className="text-gray-400 text-sm">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-accent-dark/20 to-accent-dark/20 rounded-[3rem] border border-white/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full" />
                <div className="relative z-10 text-center p-12">
                   <div className="text-6xl font-bold text-accent mb-4">50k+</div>
                   <p className="text-xl text-gray-300">Happy Users Booked Their Appointments This Month</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
