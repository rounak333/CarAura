"use client";

import React, { useState } from "react";
import FloatingPillNav from "@/components/FloatingPillNav";
import SplashScreen from "@/components/SplashScreen";
import ParallaxHero from "@/components/ParallaxHero";
import HeroAccordion from "@/components/HeroAccordion";
import TypographyMaskSection from "@/components/TypographyMaskSection";
import TimedShowcase from "@/components/TimedShowcase";
import FleetListings from "@/components/FleetListings";
import FleetBentoGrid from "@/components/FleetBentoGrid";
import ExperienceSwiper from "@/components/ExperienceSwiper";
import CurvedFooter from "@/components/CurvedFooter";
import BookingModal from "@/components/BookingModal";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState("Ferrari SF90 Stradale");

  const handleOpenBooking = (vehicleName?: string) => {
    if (vehicleName) setSelectedVehicle(vehicleName);
    setBookingOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#FAF8F0] text-[#0C0D0E] selection:bg-[#0C0D0E] selection:text-[#FAF8F0]">
      {/* 1. Pure CSS Animated Car Loading Screen */}
      {isLoading && <SplashScreen onFinished={() => setIsLoading(false)} />}

      {/* 2. Full-Width Navbar with Scroll Animation (hidden while loading screen is active) */}
      {!isLoading && <FloatingPillNav onOpenBooking={() => handleOpenBooking()} />}

      {/* ========================================================= */}
      {/* ZONE 1: WARM OFF-WHITE CANVAS (#FAF8F0)                   */}
      {/* ========================================================= */}
      <div className="w-full bg-[#FAF8F0] text-[#0C0D0E] transition-colors duration-700">
        {/* PARALLAX HERO SECTION (Triggers smooth in-animations after loading screen fades) */}
        <ParallaxHero
          hasLoaded={!isLoading}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* HERO ACCORDION SHOWCASE (Calibrated spacing, zero collision) */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-8 sm:pt-12 pb-6 sm:pb-8">
          <ScrollReveal direction="up" delay={80}>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#71717A]">
                  FLAGSHIP HIGHLIGHTS • EXPANDABLE STRIP
                </span>
                <span className="text-xs font-mono text-[#52525B]">
                  INTERACTIVE ACCORDION
                </span>
              </div>
              <HeroAccordion onSelectCar={(name) => handleOpenBooking(name)} />
            </div>
          </ScrollReveal>
        </div>

        {/* WAYS OF DRIVING STENCIL SECTION (Locked Viewport Stencil + Script Accent - Direct Mount without parent transform to preserve fixed-attachment text mask) */}
        <TypographyMaskSection onOpenBooking={() => handleOpenBooking()} />
      </div>

      {/* ========================================================= */}
      {/* ZONE 2: DEEP LUXURY BLACK (#0C0D0E) ON SCROLL             */}
      {/* ========================================================= */}
      <div className="w-full bg-[#0C0D0E] text-white py-20 sm:py-28 transition-colors duration-700 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 space-y-20 sm:space-y-28">
          {/* Timed Cards Showcase */}
          <ScrollReveal direction="up" delay={100}>
            <TimedShowcase onReserve={(carModel) => handleOpenBooking(carModel)} />
          </ScrollReveal>

          {/* Bespoke Parallax Experiences Slider */}
          <ScrollReveal direction="up" delay={150}>
            <ExperienceSwiper onBookExperience={(title) => handleOpenBooking(title)} />
          </ScrollReveal>
        </div>
      </div>

      {/* ========================================================= */}
      {/* ZONE 3: WARM OFF-WHITE CANVAS (#FAF8F0) ON SCROLL         */}
      {/* ========================================================= */}
      <div className="w-full bg-[#FAF8F0] text-[#0C0D0E] transition-colors duration-700">
        {/* 2 Rows × 4 Cards Fleet Listings */}
        <ScrollReveal direction="up" delay={100}>
          <FleetListings onReserveCar={(name) => handleOpenBooking(name)} />
        </ScrollReveal>

        {/* Fleet Taxonomy Bento Grid */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pb-20">
          <ScrollReveal direction="up" delay={150}>
            <FleetBentoGrid onSelectCategory={(cat) => handleOpenBooking(cat)} />
          </ScrollReveal>
        </div>

        {/* Curved Pre-Footer Banner & Arched Monogram Bottom Footer */}
        <ScrollReveal direction="up" delay={100}>
          <CurvedFooter onOpenBooking={() => handleOpenBooking()} />
        </ScrollReveal>
      </div>

      {/* VIP Booking / Reservation Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialVehicle={selectedVehicle}
      />
    </div>
  );
}
