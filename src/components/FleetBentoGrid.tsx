"use client";

import React from "react";
import { ArrowUpRight, Sparkles, KeyRound, Shield, Clock } from "lucide-react";

interface FleetBentoGridProps {
  onSelectCategory?: (category: string) => void;
}

export default function FleetBentoGrid({ onSelectCategory }: FleetBentoGridProps) {
  return (
    <section id="categories" className="w-full py-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.08] text-[11px] uppercase tracking-[0.2em] text-[#666C75] mb-3">
            <Sparkles className="w-3 h-3 text-[#C5A880]" />
            <span>Curated Fleet Taxonomy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-[#0C0D0E] uppercase">
            Categories & <span className="text-[#8E95A2] font-light">Classes</span>
          </h2>
        </div>
        <p className="text-sm text-[#666C75] max-w-md font-light leading-relaxed">
          From open-top cruises along Jumeirah Beach Road to executive motorcades in DIFC, select your driving persona.
        </p>
      </div>

      {/* Asymmetric Responsive Bento Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[220px]">
        {/* Item 1: Hypercars (Large feature 2 cols, 2 rows on desktop) */}
        <div
          onClick={() => onSelectCategory?.("Track & Hypercars")}
          className="group relative sm:col-span-2 sm:row-span-2 rounded-2xl overflow-hidden cursor-pointer bg-[#F1F1ED] border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
        >
          <img
            src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1200&q=80"
            alt="Track & Hypercars"
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 transition-opacity duration-300" />
          
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono tracking-widest text-white uppercase border border-white/20">
              01 • Flagship
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between text-white">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display uppercase tracking-tight">
                Track & Hypercars
              </h3>
              <p className="text-xs text-gray-300 font-light mt-1 max-w-sm">
                Ferrari SF90, McLaren 765LT & Porsche GT3 RS. Pure unadulterated downforce and 1,000 HP.
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0 ml-4">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Item 2: Convertibles (1 col, 1 row) */}
        <div
          onClick={() => onSelectCategory?.("Exotic Convertibles")}
          className="group relative sm:col-span-1 sm:row-span-1 rounded-2xl overflow-hidden cursor-pointer bg-[#F1F1ED] border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
        >
          <img
            src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=800&q=80"
            alt="Exotic Convertibles"
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-3 right-3 z-10">
            <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono text-white">
              Open-Top
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
            <h3 className="text-lg font-bold font-display uppercase">Convertibles</h3>
            <p className="text-[11px] text-gray-300">Ferrari Spider & Huracan Spyder</p>
          </div>
        </div>

        {/* Item 3: Luxury SUVs (1 col, 2 rows) */}
        <div
          onClick={() => onSelectCategory?.("Performance SUVs")}
          className="group relative sm:col-span-1 sm:row-span-2 rounded-2xl overflow-hidden cursor-pointer bg-[#F1F1ED] border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
        >
          <img
            src="https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=800&q=80"
            alt="Performance Luxury SUVs"
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
          <div className="absolute top-4 left-4 z-10">
            <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono text-white">
              Command
            </span>
          </div>
          <div className="absolute bottom-6 left-5 right-5 z-10 text-white">
            <h3 className="text-xl font-bold font-display uppercase">Performance SUVs</h3>
            <p className="text-xs text-gray-300 mt-1">
              G63 AMG Mansory, Urus Performante, Cullinan Black Badge.
            </p>
            <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#C5A880] uppercase tracking-wider font-mono">
              <span>View 18 Models</span>
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* Item 4: Presidential Chauffeur (1 col, 1 row) */}
        <div
          onClick={() => onSelectCategory?.("Presidential Chauffeur")}
          className="group relative sm:col-span-1 sm:row-span-1 rounded-2xl overflow-hidden cursor-pointer bg-[#F1F1ED] border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
        >
          <img
            src="https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=800&q=80"
            alt="Presidential Chauffeur"
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
            <h3 className="text-lg font-bold font-display uppercase">Chauffeur Class</h3>
            <p className="text-[11px] text-gray-300">Rolls-Royce Phantom & Maybach S680</p>
          </div>
        </div>

        {/* Item 5: Grand Tourers (1 col, 1 row) */}
        <div
          onClick={() => onSelectCategory?.("Grand Tourers")}
          className="group relative sm:col-span-1 sm:row-span-1 rounded-2xl overflow-hidden cursor-pointer bg-[#F1F1ED] border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
        >
          <img
            src="https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=800&q=80"
            alt="Grand Tourers"
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
            <h3 className="text-lg font-bold font-display uppercase">Grand Tourers</h3>
            <p className="text-[11px] text-gray-300">Bentley Continental & Aston Martin</p>
          </div>
        </div>

        {/* Item 6: Banner privilege item (2 cols on desktop, 1 row) */}
        <div className="sm:col-span-2 lg:col-span-2 sm:row-span-1 rounded-2xl p-6 sm:p-8 flex flex-col justify-between bg-[#0C0D10] text-white border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.15)] relative overflow-hidden group">
          <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-[#C5A880]/10 rounded-full blur-2xl group-hover:bg-[#C5A880]/20 transition-all duration-700" />
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-[11px] font-mono tracking-widest uppercase text-gray-300">
                VIP BESPOKE PRIVILEGE
              </span>
            </div>
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-mono">
              0% DEPOSIT
            </span>
          </div>

          <div className="relative z-10 space-y-1">
            <h3 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-white">
              Instant Gate Delivery at DXB & Private Terminals
            </h3>
            <p className="text-xs text-gray-400 font-light max-w-md">
              Step directly off your jet into your warmed-up supercar with keyless digital dispatch.
            </p>
          </div>

          <div className="relative z-10 pt-2 flex items-center justify-between">
            <span className="text-xs text-gray-400">24/7 Diplomatic & VIP Concierge</span>
            <div className="inline-flex items-center gap-1.5 text-xs text-white font-semibold underline underline-offset-4 cursor-pointer hover:text-[#C5A880] transition-colors">
              <span>Learn Concierge Privileges</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Item 7: Pure Motorsport (1 col, 1 row) */}
        <div
          onClick={() => onSelectCategory?.("Pure Motorsport")}
          className="group relative sm:col-span-1 sm:row-span-1 rounded-2xl overflow-hidden cursor-pointer bg-[#F1F1ED] border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
        >
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
            alt="Pure Motorsport"
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
            <h3 className="text-lg font-bold font-display uppercase">Pure Motorsport</h3>
            <p className="text-[11px] text-gray-300">Porsche 911 GT3 RS & GT2 RS</p>
          </div>
        </div>
      </div>
    </section>
  );
}
