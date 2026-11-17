"use client";

import React from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useScrollMotion } from "@/hooks/useScrollMotion";
import { motion } from "motion/react";

interface ParallaxHeroProps {
  onOpenBooking?: () => void;
  hasLoaded?: boolean;
}

const easeOutCubic = [0.16, 1, 0.3, 1] as const;

export default function ParallaxHero({
  onOpenBooking,
  hasLoaded = true,
}: ParallaxHeroProps) {
  const { scrollY } = useScrollMotion();

  // Parallax translation multipliers (scroll-craft depth planes)
  const bgTranslate = scrollY * 0.22;
  const textTranslate = scrollY * 0.38;
  const carTranslate = scrollY * 0.12;
  const hudTranslate = scrollY * -0.15;
  const opacityFade = Math.max(0, 1 - scrollY / 700);

  return (
    <section className="relative w-full overflow-hidden flex flex-col justify-between pt-28 sm:pt-36 pb-12 select-none bg-[#FAF8F0]">
      {/* LAYER 1: Deep Background Plate (Dubai Skyline Atmospheric Scrim) */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-100 ease-out will-change-transform"
        style={{
          transform: `translate3d(0, ${bgTranslate}px, 0) scale(${1 + scrollY * 0.0004})`,
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 filter grayscale contrast-125 mix-blend-multiply"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2400&q=80')",
          }}
        />
        {/* Soft Radial Scrim so text remains 100% legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F0]/80 via-transparent to-[#FAF8F0]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(197,168,128,0.08),transparent)]" />
      </div>

      {/* LAYER 2: Giant Architectural Typography (Behind Focal Subject) */}
      <div
        className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-10 transition-transform duration-100 ease-out will-change-transform"
        style={{
          transform: `translate3d(-50%, calc(-50% + ${textTranslate}px), 0)`,
          opacity: opacityFade,
        }}
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.94 }}
          animate={hasLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
          transition={{ duration: 1.2, ease: easeOutCubic, delay: 0.1 }}
          className="block font-display font-black text-[18vw] sm:text-[17vw] lg:text-[16vw] text-black/[0.045] leading-none uppercase tracking-tighter select-none"
        >
          VELOCE
        </motion.span>
      </div>

      {/* LAYER 3: Hero Content & Staggered Animated Typography */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full flex flex-col items-center text-center">
        {/* Main Headline */}
        <div className="max-w-4xl space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={hasLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
            transition={{ duration: 1.0, ease: easeOutCubic, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-[#0C0D0E] uppercase leading-[0.94]"
          >
            The Art of Velocity.{" "}
            <span className="text-[#8E95A2] font-light block sm:inline">
              Discreetly Delivered.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={hasLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 1.0, ease: easeOutCubic, delay: 0.35 }}
            className="max-w-xl mx-auto text-sm sm:text-base text-[#5F6775] font-light leading-relaxed"
          >
            Experience an elite fleet of Ferrari, Lamborghini, Rolls-Royce, and Porsche. Hand-delivered anywhere in the UAE within 30 minutes with zero security deposit.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={hasLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 1.0, ease: easeOutCubic, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <button
            onClick={onOpenBooking}
            className="group px-8 py-3.5 rounded-full bg-[#0C0D0E] text-[#FAF8F0] font-semibold text-xs uppercase tracking-widest hover:bg-black transition-all shadow-lg active:scale-95 flex items-center gap-2"
          >
            <span>Reserve 2026 Fleet</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <a
            href="#collection"
            className="px-8 py-3.5 rounded-full bg-white text-[#0C0D0E] border border-black/10 font-medium text-xs uppercase tracking-widest hover:bg-[#F3F4F6] transition-all"
          >
            Explore 8 Listings
          </a>
        </motion.div>

        {/* Quick Metrics Bar directly underneath CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={hasLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 1.0, ease: easeOutCubic, delay: 0.65 }}
          className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-y border-black/[0.08] py-5 mt-10"
        >
          <div className="space-y-0.5 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold font-display text-[#0C0D0E] tracking-tight">
              30 MIN
            </div>
            <div className="text-[10px] sm:text-[11px] uppercase font-mono tracking-[0.18em] text-[#71717A]">
              Instant UAE Delivery
            </div>
          </div>

          <div className="space-y-0.5 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold font-display text-[#0C0D0E] tracking-tight">
              0% DEPOSIT
            </div>
            <div className="text-[10px] sm:text-[11px] uppercase font-mono tracking-[0.18em] text-[#71717A]">
              VIP Member Privilege
            </div>
          </div>

          <div className="space-y-0.5 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold font-display text-[#0C0D0E] tracking-tight">
              2026 FLEET
            </div>
            <div className="text-[10px] sm:text-[11px] uppercase font-mono tracking-[0.18em] text-[#71717A]">
              Factory Fresh Mileage
            </div>
          </div>

          <div className="space-y-0.5 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold font-display text-[#0C0D0E] tracking-tight">
              24/7 VIP
            </div>
            <div className="text-[10px] sm:text-[11px] uppercase font-mono tracking-[0.18em] text-[#71717A]">
              Chauffeur & Escort
            </div>
          </div>
        </motion.div>
      </div>

      {/* LAYER 4: Focal Hero Supercar with Parallax Depth & Ground Contact */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={hasLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 1.2, ease: easeOutCubic, delay: 0.8 }}
        className="relative z-20 w-full max-w-5xl mx-auto px-4 mt-10 sm:mt-14"
      >
        <div
          style={{ transform: `translate3d(0, ${carTranslate}px, 0)` }}
          className="relative w-full h-64 sm:h-96 md:h-[440px] rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.12)] border border-black/[0.08] group will-change-transform"
        >
          {/* Main Car Visual */}
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=2200&q=85')",
            }}
          />

          {/* Cinematic Dark Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Floating Spec HUD Badges inside the Hero Card */}
          <div
            className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white transition-transform duration-200"
            style={{ transform: `translate3d(0, ${hudTranslate}px, 0)` }}
          >
            <div>
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase text-white border border-white/20 inline-block mb-2">
                Featured Flagship
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold font-display uppercase tracking-tight text-white drop-shadow">
                Lamborghini Revuelto V12
              </h3>
              <p className="text-xs text-gray-300 font-mono mt-0.5">
                1,015 HP • 0-100 in 2.5s • AED 7,200/day
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-gray-100 transition-all shadow-md active:scale-95"
            >
              Instant Dispatch
            </button>
          </div>
        </div>

        {/* Bouncing Scroll Cue */}
        <div className="flex items-center justify-center gap-2 pt-8 text-[10px] font-mono uppercase tracking-[0.25em] text-[#8E95A2]">
          <span>Scroll to Explore</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
