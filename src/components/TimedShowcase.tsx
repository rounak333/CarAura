"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Bookmark, Compass, ShieldCheck } from "lucide-react";

interface ShowcaseItem {
  id: number;
  location: string;
  brand: string;
  model: string;
  description: string;
  image: string;
  specs: {
    engine: string;
    speed: string;
    price: string;
  };
}

const showcaseData: ShowcaseItem[] = [
  {
    id: 1,
    location: "DOWNTOWN DUBAI • DIFC",
    brand: "ROLLS-ROYCE",
    model: "PHANTOM VIII",
    description:
      "The sovereign of executive luxury, whisper-quiet V12 engineering, and bespoke lounge seating.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85",
    specs: { engine: "6.75L V12", speed: "563 HP", price: "AED 6,800/day" },
  },
  {
    id: 2,
    location: "DUBAI MARINA • JBR",
    brand: "FERRARI",
    model: "SF90 SPIDER",
    description:
      "1,000 hybrid horsepower with an open retractable hardtop under Dubai's night sky.",
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1600&q=85",
    specs: { engine: "4.0L V8 Hybrid", speed: "1,000 HP", price: "AED 5,900/day" },
  },
  {
    id: 3,
    location: "PALM JUMEIRAH • ATLANTIS",
    brand: "LAMBORGHINI",
    model: "REVUELTO V12",
    description:
      "The premier V12 electrified hypercar with carbon fiber monocoque architecture.",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1600&q=85",
    specs: { engine: "6.5L V12 HPEV", speed: "1,015 HP", price: "AED 7,200/day" },
  },
  {
    id: 4,
    location: "EMIRATES HILLS • AL BARARI",
    brand: "BENTLEY",
    model: "CONTINENTAL GTC SPEED",
    description:
      "Handcrafted British grand touring with Mulliner diamond leather and 900 Nm torque.",
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1600&q=85",
    specs: { engine: "6.0L W12 TSI", speed: "650 HP", price: "AED 4,800/day" },
  },
  {
    id: 5,
    location: "DUBAI AUTODROME • MEYDAN",
    brand: "PORSCHE",
    model: "911 GT3 RS (992)",
    description:
      "Formula 1 active DRS aerodynamics and high-downforce motorsport precision.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
    specs: { engine: "4.0L Flat-Six", speed: "518 HP", price: "AED 4,400/day" },
  },
  {
    id: 6,
    location: "AL QUDRA DESERT • SUNSET OASIS",
    brand: "MERCEDES-BENZ",
    model: "G63 AMG 4X4 SQUARED",
    description:
      "Commanding twin-turbo V8 with portal axles and dominant Dubai road presence.",
    image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1600&q=85",
    specs: { engine: "4.0L V8 Biturbo", speed: "585 HP", price: "AED 4,200/day" },
  },
];

interface TimedShowcaseProps {
  onReserve?: (carModel: string) => void;
}

export default function TimedShowcase({ onReserve }: TimedShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bookmarked, setBookmarked] = useState<Record<number, boolean>>({});
  const [isAnimating, setIsAnimating] = useState(false);

  const currentCar = showcaseData[currentIndex];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % showcaseData.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + showcaseData.length) % showcaseData.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const toggleBookmark = (id: number) => {
    setBookmarked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="showcase" className="w-full relative py-12">
      {/* Container Card */}
      <div className="relative w-full min-h-[620px] rounded-3xl overflow-hidden bg-[#0F1014] text-white shadow-2xl border border-black/10">
        {/* Background Backdrop Image with Crossfade */}
        {showcaseData.map((car, idx) => (
          <div
            key={car.id}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              idx === currentIndex
                ? "opacity-60 scale-100 filter-none"
                : "opacity-0 scale-105 pointer-events-none"
            }`}
            style={{ backgroundImage: `url(${car.image})` }}
          />
        ))}

        {/* Ambient Dark Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0D10] via-[#0C0D10]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10] via-transparent to-[#0C0D10]/40" />

        {/* Top Header Information inside the Card */}
        <div className="relative z-10 flex items-center justify-between p-6 sm:p-10 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#C5A880] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A880]">
              FLAGSHIP SHOWCASE
            </span>
            <span className="hidden sm:inline-block text-xs text-gray-400">
              • DUBAI BESPOKE EDITIONS
            </span>
          </div>

          {/* Slide Numbers */}
          <div className="flex items-center gap-2 font-mono text-sm">
            <span className="font-bold text-white text-base">
              0{currentIndex + 1}
            </span>
            <span className="text-gray-500">/</span>
            <span className="text-gray-400">0{showcaseData.length}</span>
          </div>
        </div>

        {/* Main Split Content */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12 items-center">
          {/* Left Details Box (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs tracking-wider text-gray-200">
              <Compass className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{currentCar.location}</span>
            </div>

            {/* Title & Brand */}
            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-light tracking-[0.3em] uppercase text-gray-300 font-display">
                {currentCar.brand}
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white leading-none">
                {currentCar.model}
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light max-w-xl">
              {currentCar.description}
            </p>

            {/* Key Specs Pill Group */}
            <div className="flex flex-wrap items-center gap-4 py-2 border-y border-white/10 max-w-lg">
              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-mono">
                  Engine
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white font-mono">
                  {currentCar.specs.engine}
                </span>
              </div>
              <div className="h-7 w-[1px] bg-white/15" />
              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-mono">
                  Performance
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#C5A880] font-mono">
                  {currentCar.specs.speed}
                </span>
              </div>
              <div className="h-7 w-[1px] bg-white/15" />
              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-mono">
                  VIP Rate
                </span>
                <span className="text-xs sm:text-sm font-bold text-white font-mono">
                  {currentCar.specs.price}
                </span>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => toggleBookmark(currentCar.id)}
                className={`p-3 rounded-full border transition-all ${
                  bookmarked[currentCar.id]
                    ? "bg-[#C5A880] border-[#C5A880] text-black"
                    : "border-white/20 bg-white/5 text-white hover:bg-white/15"
                }`}
                aria-label="Bookmark vehicle"
              >
                <Bookmark className="w-4 h-4 fill-current" />
              </button>

              <button
                onClick={() => onReserve?.(`${currentCar.brand} ${currentCar.model}`)}
                className="px-6 py-3 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#F3F4F6] transition-all shadow-lg active:scale-95"
              >
                Reserve This Model
              </button>
            </div>
          </div>

          {/* Right Thumbnails / Slide Deck (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-end items-end gap-6">
            {/* Thumbnail Cards Row */}
            <div className="flex items-center gap-3 overflow-x-auto w-full py-2 no-scrollbar">
              {showcaseData.map((car, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <div
                    key={car.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative w-28 h-36 rounded-xl overflow-hidden cursor-pointer flex-shrink-0 transition-all duration-500 border ${
                      isActive
                        ? "border-[#C5A880] scale-105 shadow-xl ring-2 ring-[#C5A880]/30"
                        : "border-white/10 opacity-60 hover:opacity-100 hover:scale-100"
                    }`}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${car.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="text-[9px] uppercase tracking-wider font-mono text-gray-300 block truncate">
                        {car.brand}
                      </span>
                      <span className="text-[11px] font-bold text-white uppercase block truncate">
                        {car.model}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Controls & Progress */}
            <div className="flex items-center gap-4 w-full justify-between pt-4 border-t border-white/10">
              <div className="flex items-center gap-1.5">
                {showcaseData.map((_, dotIdx) => (
                  <div
                    key={dotIdx}
                    onClick={() => setCurrentIndex(dotIdx)}
                    className={`h-1.5 rounded-full cursor-pointer transition-all ${
                      dotIdx === currentIndex
                        ? "w-8 bg-[#C5A880]"
                        : "w-2 bg-white/20 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10 active:scale-95"
                  aria-label="Previous slide"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full bg-white text-black hover:bg-gray-200 transition-colors active:scale-95 shadow-md"
                  aria-label="Next slide"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
