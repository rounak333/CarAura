"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, ChevronUp, ChevronDown, Sparkles } from "lucide-react";

interface ExperienceItem {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  location: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    badge: "01 • BESPOKE PROTOCOL",
    title: "VIP Airport & Helipad Delivery",
    subtitle: "Aircraft-side handover at DXB & Al Maktoum.",
    description:
      "Aircraft-side vehicle handover with direct security clearance and zero baggage delay.",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1400&q=80",
    location: "DXB VIP Terminal",
  },
  {
    id: 2,
    badge: "02 • HIGH VELOCITY",
    title: "Dubai Autodrome Track Telemetry",
    subtitle: "Push 1,000 HP to the absolute limit.",
    description:
      "FIA circuit access with dedicated pit-crew support and Pirelli Trofeo R tires.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
    location: "Dubai Autodrome Circuit",
  },
  {
    id: 3,
    badge: "03 • COASTAL GLAMOUR",
    title: "Palm Jumeirah Sunset Cruise",
    subtitle: "Open-top cruising along Dubai Marina.",
    description:
      "Acoustic hardtop cruising along coastal boulevards with premier valet reservation.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80",
    location: "Palm Jumeirah & Marina",
  },
  {
    id: 4,
    badge: "04 • EXPEDITION LUXURY",
    title: "Desert Dune & Horizon Convoys",
    subtitle: "Twin-turbo V8 SUVs across infinite sands.",
    description:
      "G63 AMG and Cullinan convoys with private desert camp access and sunset reception.",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1400&q=80",
    location: "Al Qudra Desert Reserve",
  },
];

interface ExperienceSwiperProps {
  onBookExperience?: (title: string) => void;
}

export default function ExperienceSwiper({ onBookExperience }: ExperienceSwiperProps) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const activeExp = experiences[current];

  const goNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev + 1) % experiences.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev - 1 + experiences.length) % experiences.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  return (
    <section id="experiences" className="w-full py-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.08] text-[11px] uppercase tracking-[0.2em] text-[#666C75] mb-3">
            <Sparkles className="w-3 h-3 text-[#C5A880]" />
            <span>Curated Journeys</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-[#0C0D0E] uppercase">
            Bespoke <span className="text-[#8E95A2] font-light">Experiences</span>
          </h2>
        </div>
        <p className="text-sm text-[#666C75] max-w-md font-light leading-relaxed">
          More than vehicle delivery — an immersive ecosystem of VIP track access, private aviation coordination, and chauffeur escort.
        </p>
      </div>

      {/* Main Slider Display Card */}
      <div className="relative w-full min-h-[500px] lg:h-[520px] rounded-3xl overflow-hidden bg-[#0C0D10] text-white border border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] grid grid-cols-1 lg:grid-cols-12">
        {/* Left Side: Photographic Visual with parallax feel (7 cols) */}
        <div className="lg:col-span-7 relative h-72 lg:h-full overflow-hidden">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
                idx === current
                  ? "opacity-100 scale-100 filter-none"
                  : "opacity-0 scale-110 pointer-events-none"
              }`}
              style={{ backgroundImage: `url(${exp.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10] via-black/30 to-black/20 lg:bg-gradient-to-r lg:from-transparent lg:to-[#0C0D10]" />
            </div>
          ))}

          {/* Location Badge on Visual */}
          <div className="absolute bottom-6 left-6 z-10 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-mono text-gray-200">
            📍 {activeExp.location}
          </div>
        </div>

        {/* Right Side: Content & Controls (5 cols) */}
        <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between relative z-10 bg-[#0C0D10]">
          {/* Top Pagination & Index */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <span className="text-xs font-mono tracking-widest text-[#C5A880] uppercase">
              {activeExp.badge}
            </span>

            {/* Circular Animated SVG Pagination Bullets (converted from swiper.html) */}
            <div className="flex items-center gap-2">
              {experiences.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrent(dotIdx)}
                  className="relative w-7 h-7 flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
                  aria-label={`Slide ${dotIdx + 1}`}
                >
                  <svg className="w-7 h-7 -rotate-90" viewBox="0 0 28 28">
                    {/* Background circle */}
                    <circle
                      cx="14"
                      cy="14"
                      r="10"
                      fill="none"
                      stroke={dotIdx === current ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.06)"}
                      strokeWidth="2"
                    />
                    {/* Active animated circle stroke */}
                    {dotIdx === current && (
                      <circle
                        cx="14"
                        cy="14"
                        r="10"
                        fill="none"
                        stroke="#C5A880"
                        strokeWidth="2"
                        strokeDasharray="63"
                        strokeDashoffset="0"
                        className="transition-all duration-700"
                      />
                    )}
                    {/* Center dot */}
                    <circle
                      cx="14"
                      cy="14"
                      r={dotIdx === current ? "3.5" : "2"}
                      fill={dotIdx === current ? "#FFFFFF" : "#666C75"}
                      className="transition-all"
                    />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Middle Text Details */}
          <div className="space-y-4 my-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display uppercase tracking-tight text-white leading-tight">
              {activeExp.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#C5A880] font-mono tracking-wide">
              {activeExp.subtitle}
            </p>
            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              {activeExp.description}
            </p>
          </div>

          {/* Bottom Actions and Next/Prev Controls */}
          <div className="flex items-center justify-between pt-6 border-t border-white/10">
            <button
              onClick={() => onBookExperience?.(activeExp.title)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-gray-200 transition-all active:scale-95 shadow-md"
            >
              <span>Book Experience</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Vertical Next / Prev arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={goPrev}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/10 transition-colors"
                aria-label="Previous experience"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
              <button
                onClick={goNext}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/10 transition-colors"
                aria-label="Next experience"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
