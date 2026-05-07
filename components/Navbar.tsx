"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-[#0B0B0C]/80 backdrop-blur-md border-b border-white/10 py-4"
          : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image
              src="/images/Logo-icon.png"
              alt="WhiteWall Salon"
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-110"
              priority
            />
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight text-white">
            WhiteWall <span className="text-accent">Salon</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        <button className="bg-accent-dark hover:bg-accent-dark text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-accent-dark/20 active:scale-95">
          Download App
        </button>
      </div>
    </nav>
  );
}
