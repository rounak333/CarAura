"use client";

import React, { useState } from "react";
import { ArrowUpRight, Gauge, Zap, Shield, Sparkles } from "lucide-react";

interface CarItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  image: string;
  hp: string;
  acceleration: string;
  topSpeed: string;
  ratePerDay: string;
}

const fleetData: CarItem[] = [
  {
    id: "ferrari-sf90",
    name: "Ferrari SF90 Stradale",
    tagline: "1,000 HP Hybrid Powertrain. Fiorano precision in Dubai.",
    category: "Hypercar",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1400&q=80",
    hp: "1,000 HP",
    acceleration: "2.5s 0-100",
    topSpeed: "340 km/h",
    ratePerDay: "AED 5,500",
  },
  {
    id: "rolls-royce-spectre",
    name: "Rolls-Royce Spectre",
    tagline: "Whisper-silent electric grandeur with illuminated grille.",
    category: "Ultra Luxury",
    image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=1400&q=80",
    hp: "577 HP",
    acceleration: "4.4s 0-100",
    topSpeed: "250 km/h",
    ratePerDay: "AED 6,200",
  },
  {
    id: "lamborghini-revuelto",
    name: "Lamborghini Revuelto",
    tagline: "V12 electrified beast. Radical aeronautic silhouette.",
    category: "Supercar",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1400&q=80",
    hp: "1,015 HP",
    acceleration: "2.5s 0-100",
    topSpeed: "350 km/h",
    ratePerDay: "AED 7,500",
  },
  {
    id: "porsche-gt3rs",
    name: "Porsche 911 GT3 RS",
    tagline: "Active aerodynamics and race-engineered Weissach pack.",
    category: "Track Weapon",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1400&q=80",
    hp: "518 HP",
    acceleration: "3.2s 0-100",
    topSpeed: "296 km/h",
    ratePerDay: "AED 4,200",
  },
  {
    id: "mercedes-g63-mansory",
    name: "Mercedes-AMG G63",
    tagline: "Matte black bespoke widebody with twin-side exhausts.",
    category: "Iconic SUV",
    image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1400&q=80",
    hp: "585 HP",
    acceleration: "4.5s 0-100",
    topSpeed: "240 km/h",
    ratePerDay: "AED 3,800",
  },
];

interface HeroAccordionProps {
  onSelectCar?: (carName: string) => void;
}

export default function HeroAccordion({ onSelectCar }: HeroAccordionProps) {
  const [activeId, setActiveId] = useState<string>("ferrari-sf90");

  return (
    <section className="w-full flex flex-col items-center">
      {/* Category Pills & Hint */}
      <div className="w-full flex items-center justify-between mb-4 px-2 text-xs text-[#71717A]">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
          <span className="uppercase tracking-[0.2em] font-medium text-[11px] text-[#111]">
            Interactive Fleet Accordion
          </span>
        </div>
        <span className="hidden sm:inline-block tracking-wider uppercase text-[10px] text-[#8E95A2]">
          Hover or tap card to expand specs
        </span>
      </div>

      {/* Accordion Container */}
      <div className="w-full h-[460px] sm:h-[500px] flex flex-col sm:flex-row gap-2.5 sm:gap-3 rounded-2xl overflow-hidden p-1.5 sm:p-2 bg-[#EEEEEC] border border-black/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
        {fleetData.map((car) => {
          const isActive = activeId === car.id;
          return (
            <div
              key={car.id}
              onMouseEnter={() => setActiveId(car.id)}
              onClick={() => setActiveId(car.id)}
              tabIndex={0}
              role="button"
              aria-label={`View ${car.name}`}
              className={`relative h-full rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] outline-none focus-visible:ring-2 focus-visible:ring-black ${
                isActive
                  ? "flex-[4] sm:flex-[4] shadow-xl"
                  : "flex-1 hover:flex-[1.5] sm:hover:flex-[1.4]"
              }`}
            >
              {/* Background Image with Grayscale to Color Transition */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
                  isActive ? "scale-105 filter-none" : "scale-100 grayscale brightness-90 hover:grayscale-[30%]"
                }`}
                style={{ backgroundImage: `url(${car.image})` }}
              />

              {/* Gradient Dark Overlay */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive
                    ? "bg-gradient-to-t from-black/90 via-black/35 to-black/20"
                    : "bg-black/55 hover:bg-black/40"
                }`}
              />

              {/* Vertical Title for Inactive State (desktop) */}
              <div
                className={`hidden sm:flex absolute inset-0 items-center justify-center p-4 transition-all duration-500 pointer-events-none ${
                  isActive ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
                }`}
              >
                <span className="text-white font-display text-sm tracking-[0.25em] uppercase font-bold [writing-mode:vertical-rl] rotate-180 drop-shadow">
                  {car.name}
                </span>
              </div>

              {/* Active Content Drawer */}
              <div
                className={`absolute inset-0 p-5 sm:p-7 flex flex-col justify-between text-white transition-all duration-500 ${
                  isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10px] uppercase font-mono tracking-widest text-[#F1F1ED]">
                    <span>{car.category}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-white/70 block uppercase tracking-wider text-[10px]">
                      Daily from
                    </span>
                    <span className="text-sm sm:text-base font-bold font-mono text-white">
                      {car.ratePerDay}
                    </span>
                  </div>
                </div>

                {/* Bottom Details & CTA */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-display uppercase tracking-tight text-white leading-tight">
                      {car.name}
                    </h3>
                  </div>

                  {/* Clean Specs Bar */}
                  <div className="flex items-center gap-6 py-2 border-y border-white/10 max-w-sm text-xs font-mono">
                    <div>
                      <span className="text-[10px] text-gray-400 block uppercase">Power</span>
                      <span className="font-semibold text-white">{car.hp}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 block uppercase">0-100</span>
                      <span className="font-semibold text-white">{car.acceleration}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 block uppercase">V-Max</span>
                      <span className="font-semibold text-white">{car.topSpeed}</span>
                    </div>
                  </div>

                  {/* Book CTA */}
                  <div className="pt-1 flex items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectCar?.(car.name);
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-gray-200 transition-all active:scale-95 shadow-md"
                    >
                      <span>Reserve</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] text-gray-400 tracking-wider uppercase font-mono">
                      Instant Dispatch
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
