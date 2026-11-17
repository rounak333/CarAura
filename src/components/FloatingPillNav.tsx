"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X, PhoneCall } from "lucide-react";

interface FloatingPillNavProps {
  onOpenBooking?: () => void;
}

export default function FloatingPillNav({ onOpenBooking }: FloatingPillNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Fleet", href: "#fleet" },
    { name: "Ways of Driving", href: "#ways-of-driving" },
    { name: "Showcase", href: "#showcase" },
    { name: "Collection", href: "#collection" },
    { name: "Experiences", href: "#experiences" },
    { name: "Concierge", href: "#concierge" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          scrolled
            ? "bg-[#FAF8F0]/85 backdrop-blur-xl border-b border-black/[0.06] py-3.5 sm:py-4 shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
            : "bg-transparent border-b border-transparent py-5 sm:py-6"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between">
          {/* Left Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-8 w-8 rounded-full bg-[#0C0D0E] text-[#FAF8F0] flex items-center justify-center font-display font-extrabold text-xs tracking-tighter group-hover:scale-105 transition-transform shadow-sm">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight uppercase leading-none font-display text-[#0C0D0E]">
                AURA
              </span>
              <span className="text-[9px] tracking-[0.28em] text-[#71717A] uppercase font-mono font-medium">
                DUBAI
              </span>
            </div>
          </a>

          {/* Center Minimal Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs uppercase font-mono tracking-widest text-[#52525B] hover:text-[#0C0D0E] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#0C0D0E] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Direct Actions */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+97148002872"
              className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#52525B] hover:text-[#0C0D0E] px-3.5 py-1.5 rounded-full border border-black/[0.08] bg-white/50 backdrop-blur-sm transition-all"
            >
              <PhoneCall className="w-3 h-3 text-[#C5A880]" />
              <span className="tracking-wider text-[11px]">+971 4 800 AURA</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="group flex items-center gap-2 rounded-full bg-[#0C0D0E] hover:bg-black text-[#FAF8F0] px-5 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300 shadow-md active:scale-95"
            >
              <span>Reserve</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#0C0D0E] hover:opacity-70 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF8F0]/98 backdrop-blur-2xl flex flex-col justify-center items-center px-8 md:hidden text-[#0C0D0E] transition-all">
          <div className="w-full max-w-xs space-y-5 text-center">
            <div className="text-xl font-bold font-display tracking-widest text-[#0C0D0E] mb-6">
              AURA DUBAI
            </div>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-sm font-mono tracking-widest uppercase text-[#52525B] hover:text-[#0C0D0E] border-b border-black/[0.06]"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-6">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking?.();
                }}
                className="w-full py-3.5 rounded-full bg-[#0C0D0E] text-[#FAF8F0] font-semibold text-xs uppercase tracking-widest shadow-lg"
              >
                Reserve Supercar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
