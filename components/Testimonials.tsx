import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mohammed Al-Otaibi",
      review: "The easiest way to book a haircut. I love how I can pick my favorite barber and see their availability in real-time.",
      rating: 5,
    },
    {
      name: "Faisal Al-Zahrani",
      review: "Finally an app that works! No more phone calls and waiting. The UI is beautiful and very fast.",
      rating: 5,
    },
    {
      name: "Sultan Al-Dosari",
      review: "Highly recommend for anyone with a busy schedule. The reminders are great and the payment process is seamless.",
      rating: 4,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#080a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Users Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-glass p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < t.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-600"}`} />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">"{t.review}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-dark/20 rounded-full flex items-center justify-center font-bold text-accent">
                  {t.name[0]}
                </div>
                <div className="font-bold">{t.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
