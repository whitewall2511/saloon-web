import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PrivacyHero() {
  return (
    <section className="relative pt-44 pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C]/80 via-[#0B0B0C]/60 to-[#0B0B0C]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight uppercase">
          Privacy <span className="text-accent">Policy</span>
        </h1>
        
        <div className="flex items-center justify-center gap-2 text-gray-400 font-medium">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-accent">Privacy Policy</span>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-accent-dark/10 blur-[120px] -z-10 rounded-full" />
    </section>
  );
}
