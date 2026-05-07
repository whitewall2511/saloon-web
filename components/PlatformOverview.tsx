import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function PlatformOverview() {
  const points = [
    "Real-time booking with instant confirmation",
    "Verified reviews and professional portfolios",
    "Secure integrated payment solutions",
    "Personalized grooming recommendations",
    "24/7 customer support for users and partners",
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Revolutionizing the <br />
              <span className="text-gradient">Grooming Experience</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              WhiteWall Salon is more than just a booking app. We are building a bridge between the world's best barbers and clients who value quality, convenience, and style.
            </p>
            
            <ul className="space-y-4 mb-10">
              {points.map((point, index) => (
                <li key={index} className="flex items-center gap-4 text-gray-300">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop"
                alt="Platform Overview"
                width={800}
                height={600}
                className="object-cover"
              />
            </div>
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-dark/10 blur-[100px] -z-10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
