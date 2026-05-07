import Image from "next/image";
import Link from "next/link";

export default function AboutAppSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#080a0f]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          {/* Phone Mockup Container - Reusing Hero style */}
          <div className="relative z-10 animate-float max-w-[300px] mx-auto lg:ml-0">
             <div className="w-[300px] h-[600px] bg-[#0a0c10] rounded-[3rem] border-[8px] border-[#1a1c22] shadow-2xl overflow-hidden relative">
                {/* Status Bar */}
                <div className="h-10 bg-transparent flex justify-between px-6 items-center text-[10px] text-white">
                   <span>9:41</span>
                   <div className="flex gap-1.5">
                      <div className="w-3 h-3 bg-white/20 rounded-full" />
                      <div className="w-3 h-3 bg-white/20 rounded-full" />
                   </div>
                </div>
                {/* App UI Placeholder */}
                <div className="absolute inset-[8px] rounded-[2.5rem] overflow-hidden">
                  <Image
                    src="/images/home-screen.png"
                    alt="Salon App Home Screen"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1c22] rounded-b-2xl" />
             </div>
          </div>
          
          {/* Glow Behind Phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/20 blur-[100px] -z-10 rounded-full" />
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Get the <span className="text-accent">White Wall</span> App
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
            Experience the future of salon bookings. Download our app today and get 20% off your first appointment.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <Link href="#" className="transition-all hover:opacity-80 active:scale-95 shadow-xl rounded-lg overflow-hidden h-[48px]">
              <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="Download on the App Store" 
                width={160} 
                height={48}
                className="h-full w-auto"
              />
            </Link>
            <Link href="#" className="transition-all hover:opacity-80 active:scale-95 shadow-xl rounded-lg overflow-hidden h-[48px]">
              <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play" 
                width={160} 
                height={48}
                className="h-full w-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
