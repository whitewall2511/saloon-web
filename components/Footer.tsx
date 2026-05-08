import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-24 pb-12 border-t border-white/5 bg-[#0B0B0C] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-accent-dark/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/Logo-icon.png"
                  alt="WhiteWall Salon"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                WhiteWall <span className="text-accent">Salon</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Elevating your style with premium grooming services. Experience the art of modern barbering and relaxation in a sophisticated environment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-all border border-white/10">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-all border border-white/10">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-all border border-white/10">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-accent transition-colors flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-accent transition-colors flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> About</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-accent transition-colors flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Terms & Condition</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-accent transition-colors flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Privacy Policy</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-accent transition-colors flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Contact Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm">Contact & Support</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="text-accent shrink-0 mt-1" />
                <span>6158 Prince Sultan Road, Othaim Markets, Qurtubah, Al Khobar 34236</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-accent shrink-0" />
                <span>054 570 4344</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-accent shrink-0" />
                <span>hello@whitewallsalon.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm">Join Our Newsletter</h4>
            <p className="text-gray-400 text-sm">Subscribe to get special offers and grooming tips.</p>
            <form className="relative group">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-accent/50 transition-colors"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 bg-accent-dark hover:bg-accent text-white px-4 rounded-lg transition-colors text-xs font-medium"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500">
            © {currentYear} WhiteWall Salon. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
          </div>
        </div>
      </div>
    </footer>
  );
}

