"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface TypographyMaskSectionProps {
  onOpenBooking?: () => void;
}

export default function TypographyMaskSection({
  onOpenBooking,
}: TypographyMaskSectionProps) {
  return (
    <section
      id="ways-of-driving"
      className="w-full bg-[#FAF8F0] text-[#0C0D0E] pt-12 sm:pt-16 pb-20 sm:pb-28 px-6 sm:px-10 lg:px-14 border-t border-black/[0.06] select-none"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-between">
        {/* Top-Left Overlapping Brush-Script + Heavy Display Stencil Block */}
        <div className="relative">
          {/* Small, expressive brush-script accent title overlapping top-left corner */}
          <div className="font-script text-3xl sm:text-5xl lg:text-6xl text-[#0C0D0E] -mb-3 sm:-mb-5 ml-1 sm:ml-3 rotate-[-3.5deg] z-20 relative select-none inline-block drop-shadow-sm pointer-events-none">
            Ways of Driving
          </div>

          {/* Massive, multi-line block of bold, condensed uppercase stencil typography */}
          <h2
            className="font-stencil font-normal uppercase text-[12vw] sm:text-[10vw] md:text-[8.5vw] lg:text-[7.2vw] tracking-tight leading-[0.88] select-none block text-left"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=2600&q=95')",
              backgroundAttachment: "fixed",
              backgroundPosition: "center 42%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            FOR TRACKDAYS<br />
            AND PRIVATE USE •<br />
            CHAUFFEUR • ESCORT •<br />
            DESERT GRAND TOURS •
          </h2>
        </div>

        {/* Balanced Two-Column Footer Row Directly Below */}
        <div className="pt-8 sm:pt-12 border-t border-black/[0.08] mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          {/* Left Column: Concise, left-aligned body paragraph */}
          <div className="md:col-span-8">
            <p className="text-sm sm:text-base text-[#52525B] font-light leading-relaxed max-w-xl">
              Curated for every driving echelon. From high-velocity coastal sprints along Jumeirah to confidential diplomatic motorcades across DIFC and sunset rallies in the dunes, each discipline is engineered to your exact itinerary.
            </p>
          </div>

          {/* Right Column: Single high-contrast, pill-shaped button */}
          <div className="md:col-span-4 flex md:justify-end">
            <button
              onClick={onOpenBooking}
              className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#0C0D0E] text-[#FAF8F0] hover:bg-black font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-md active:scale-95"
            >
              <span>Explore Disciplines</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
