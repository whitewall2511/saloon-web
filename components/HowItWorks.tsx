export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Find a Salon",
      description: "Search for the best salons in your area with verified ratings.",
    },
    {
      number: "02",
      title: "Choose a Service",
      description: "Browse through a variety of grooming services and packages.",
    },
    {
      number: "03",
      title: "Select Your Barber",
      description: "Pick your favorite professional from the salon's team.",
    },
    {
      number: "04",
      title: "Pick a Time",
      description: "Select a date and time slot that works best for you.",
    },
    {
      number: "05",
      title: "Confirm Your Booking",
      description: "Review your details and confirm your appointment instantly.",
    },
  ];

  return (
    <section className="py-24 bg-[#080a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
        
        <div className="grid md:grid-cols-5 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-accent/0 via-accent/50 to-blue-500/0 -z-10" />
          
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-accent-dark text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-accent-dark/30 group-hover:scale-110 transition-transform ring-4 ring-accent-dark/20">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
