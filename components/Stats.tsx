export default function Stats() {
  const stats = [
    { label: "Successful Bookings", value: "50k+" },
    { label: "Partner Salons", value: "200+" },
    { label: "Professional Barbers", value: "1,500+" },
    { label: "Happy Clients", value: "100k+" },
  ];

  return (
    <section className="py-20 relative border-y border-white/5 bg-[#0B0B0C]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
