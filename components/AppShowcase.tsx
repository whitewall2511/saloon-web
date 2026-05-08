"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

export default function AppShowcase() {
  const screens = [
    { 
      title: "Home Screen", 
      image: "/images/home-screen.png",
      description: "Personalized dashboard with nearby salons"
    },
    { 
      title: "Barber Selection", 
      image: "/images/barber-selection.png",
      description: "Choose your favorite expert barber"
    },
    { 
      title: "Booking Screen", 
      image: "/images/booking.png",
      description: "Quick and easy appointment scheduling"
    },
    { 
      title: "Booking History", 
      image: "/images/booking-history.png",
      description: "Keep track of all your past sessions"
    },
  ];

  // Duplicate screens to ensure smooth infinite loop with Embla
  const duplicatedScreens = [...screens, ...screens];

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    skipSnaps: false,
    containScroll: false,
  }, [Autoplay({ delay: 6000, stopOnInteraction: false })]);

  const [tweenValues, setTweenValues] = useState<number[]>([]);
  const [diffValues, setDiffValues] = useState<number[]>([]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const isLoop = emblaApi.internalEngine().options.loop;

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (isLoop) {
        engine.slideLooper.loopPoints.forEach((loopPoint) => {
          const target = loopPoint.target();
          if (index === loopPoint.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      return diffToTarget;
    });
    
    setDiffValues(styles);
    setTweenValues(styles.map(diff => Math.max(0, Math.min(1, 1 - Math.abs(diff * 1.5)))));
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll();
    emblaApi.on('scroll', onScroll);
    emblaApi.on('reInit', onScroll);
  }, [emblaApi, onScroll]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-24 overflow-hidden bg-black/40" id="showcase">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Experience the <span className="text-accent">App</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our intuitive mobile interface makes booking your next grooming session 
            as simple as a few taps.
          </p>
        </div>

        <div className="relative px-4 md:px-12">
          <div className="overflow-visible" ref={emblaRef}>
            <div className="flex -ml-4 md:-ml-8">
              {duplicatedScreens.map((screen, index) => {
                const tweenValue = tweenValues[index] || 0;
                const diffValue = diffValues[index] || 0;
                const scale = 0.8 + (tweenValue * 0.2);
                const opacity = 0.4 + (tweenValue * 0.6);
                const rotateY = diffValue * -45; // Smooth rotation based on distance from center
                
                return (
                  <div 
                    key={index} 
                    className="flex-[0_0_80%] min-w-0 pl-4 md:pl-8 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] py-10"
                    style={{
                      perspective: '1000px',
                    }}
                  >
                    <div 
                      className="flex flex-col items-center"
                      style={{
                        transform: `scale(${scale}) rotateY(${rotateY}deg)`,
                        opacity: opacity,
                        transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
                      }}
                    >
                      <div className="relative w-full max-w-[280px] aspect-[9/18.6] rounded-[3rem] border-[12px] border-[#1a1c22] overflow-hidden shadow-[0_30px_60px_-15px_rgba(59,130,246,0.3)] group bg-[#1a1c22]">
                        {/* Glass Overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 rounded-[2.25rem] [backface-visibility:hidden]" />
                        
                        <Image 
                          src={screen.image} 
                          alt={screen.title} 
                          fill 
                          className="object-cover rounded-[2.25rem] group-hover:scale-105 transition-transform duration-700 will-change-transform transform-gpu [backface-visibility:hidden]"
                          priority={index === 0}
                        />
                        
                        {/* Content overlay on hover */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                            <h3 className="text-white font-bold text-lg mb-1">{screen.title}</h3>
                            <p className="text-white/70 text-xs">{screen.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Custom Navigation Buttons */}
          <button 
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent hover:bg-accent/20 hover:border-accent/50 transition-all backdrop-blur-md hidden lg:flex"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button 
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent hover:bg-accent/20 hover:border-accent/50 transition-all backdrop-blur-md hidden lg:flex"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

