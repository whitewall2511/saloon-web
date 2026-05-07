import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-accent-dark/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-accent-dark/10 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
            Book Your Salon <br />
            <span className="text-gradient">Appointments</span> <br />
            Anytime, Anywhere
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
            Find nearby salons, choose services, and manage your bookings effortlessly from your phone. The ultimate grooming experience at your fingertips.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <Link href="#" className="transition-all hover:opacity-80 active:scale-95 shadow-lg rounded-lg overflow-hidden h-[48px]">
              <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="Download on the App Store" 
                width={160} 
                height={48}
                className="h-full w-auto"
              />
            </Link>
            <Link href="#" className="transition-all hover:opacity-80 active:scale-95 shadow-lg rounded-lg overflow-hidden h-[48px]">
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

        <div className="relative">
          {/* Phone Mockup Container */}
          <div className="relative z-10 animate-float">
             <div className="w-[300px] h-[600px] mx-auto bg-[#0a0c10] rounded-[3rem] border-[8px] border-[#1a1c22] shadow-2xl overflow-hidden relative">
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
                    priority
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1c22] rounded-b-2xl" />
             </div>
          </div>
          
          {/* Glow Behind Phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/20 blur-[100px] -z-10 rounded-full" />
        </div>
      </div>
    </section>
  );
}
