import Image from "next/image";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-accent-dark/10 blur-[150px] -z-10" />
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-6xl font-bold mb-8">
          Download the App and Book Your First Appointment Today
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Join thousands of users who have transformed their salon experience. Available now on all major platforms.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 items-center">
          <Link href="#" className="transition-all hover:opacity-80 active:scale-95 shadow-2xl rounded-xl overflow-hidden h-[60px]">
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
              alt="Download on the App Store" 
              width={200} 
              height={60}
              className="h-full w-auto"
            />
          </Link>
          <Link href="#" className="transition-all hover:opacity-80 active:scale-95 shadow-2xl rounded-xl overflow-hidden h-[60px]">
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
              alt="Get it on Google Play" 
              width={200} 
              height={60}
              className="h-full w-auto"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
