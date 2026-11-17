"use client";

import React from "react";
import { ArrowUpRight, Phone, Mail, MapPin, Sparkles } from "lucide-react";

interface CurvedFooterProps {
  onOpenBooking?: () => void;
}

export default function CurvedFooter({ onOpenBooking }: CurvedFooterProps) {
  return (
    <footer id="concierge" className="w-full bg-[#F8F8F6] text-[#0C0D0E] pt-8 overflow-hidden select-none">
      {/* Top Pre-Footer Curved Card (matching user reference Image 1) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden bg-[#0C0D10] text-white min-h-[460px] sm:min-h-[520px] flex flex-col items-center justify-center p-8 sm:p-14 text-center shadow-[0_25px_60px_rgba(0,0,0,0.18)] border border-black/10">
          {/* Background Close-Up Visual (Water Droplets on High-Gloss Luxury Supercar) */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-70 filter brightness-90 hover:scale-105 transition-transform duration-1000 ease-out"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=2000&q=85')",
            }}
          />

          {/* Deep Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/80" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-mono tracking-widest uppercase text-gray-200">
              <Sparkles className="w-3 h-3 text-[#C5A880]" />
              <span>Bespoke Concierge Dispatch</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display uppercase tracking-tight text-white leading-[1.02]">
              Let&apos;s talk fleet.
            </h2>

            <p className="text-xs sm:text-sm tracking-[0.2em] font-mono text-gray-300 uppercase max-w-xl mx-auto">
              Private label inquiries, institutional fleet orders, or bespoke track concierge.
            </p>

            {/* Pill Buttons (matching user image: [TALK TO SALES] [EMAIL US]) */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#F3F4F6] transition-all duration-300 shadow-xl active:scale-95"
              >
                Talk to Concierge
              </button>

              <a
                href="mailto:concierge@auramotors.ae"
                className="px-8 py-3.5 rounded-full bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium text-xs uppercase tracking-widest transition-all duration-300 active:scale-95"
              >
                Email VIP Desk
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Off-White Detail Bar (matching user reference Image 1) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left border-b border-black/[0.08] pb-12">
          {/* Left Column: Address & Hours */}
          <div className="space-y-1.5 font-mono text-xs text-[#52525B]">
            <div className="font-bold text-[#0C0D0E] uppercase tracking-wider">
              22 THE BOULEVARD, DOWNTOWN
            </div>
            <div>PALM JUMEIRAH • DIFC GATE AVENUE</div>
            <div className="text-[11px] text-[#8E95A2] uppercase tracking-widest">
              DUBAI, UNITED ARAB EMIRATES • 24/7
            </div>
          </div>

          {/* Center Column: Arched Brand Monogram */}
          <div className="flex flex-col items-center justify-center">
            {/* Arched SVG Text Header */}
            <div className="w-56 h-14 relative flex items-center justify-center">
              <svg viewBox="0 0 300 80" className="w-full h-full overflow-visible">
                <path
                  id="curve"
                  d="M 20 70 Q 150 15 280 70"
                  fill="transparent"
                />
                <text className="font-display font-black text-2xl uppercase fill-[#0C0D0E] tracking-[0.25em]">
                  <textPath href="#curve" startOffset="50%" textAnchor="middle">
                    AURA MOTORS
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Emblem icon */}
            <div className="flex items-center gap-1.5 text-xs text-[#C5A880] font-mono tracking-widest mt-1">
              <span>✦</span>
              <span className="text-[10px] uppercase text-[#71717A]">EST. DUBAI 2026</span>
              <span>✦</span>
            </div>
          </div>

          {/* Right Column: Contact & Phone */}
          <div className="space-y-1.5 font-mono text-xs text-[#52525B] md:text-right">
            <div className="font-bold text-[#0C0D0E] tracking-wider text-sm">
              +971 4 800 AURA (2872)
            </div>
            <div className="hover:text-black transition-colors cursor-pointer">
              CONCIERGE@AURAMOTORS.AE
            </div>
            <div className="text-[11px] text-[#8E95A2] uppercase tracking-widest">
              CURATED AUTOMOTIVE EXCELLENCE
            </div>
          </div>
        </div>

        {/* Lower Legal & Nav Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A] font-light">
          <div>
            © 2026 AURA MOTORS DUBAI. Licensed luxury vehicle mobility. All rights reserved.
          </div>
          <div className="flex items-center gap-6 uppercase tracking-wider text-[11px] font-mono">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Rental Terms</a>
            <a href="#" className="hover:text-black transition-colors">Insurance Coverage</a>
            <a href="#" className="hover:text-black transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
