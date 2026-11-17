"use client";

import React, { useState, useEffect } from "react";

interface SplashScreenProps {
  onFinished?: () => void;
}

export default function SplashScreen({ onFinished }: SplashScreenProps) {
  const [fading, setFading] = useState(false);
  const [removed, setRemoved] = useState(false);
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const originalOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    const t1 = setTimeout(() => setProgress(60), 300);
    const t2 = setTimeout(() => setProgress(100), 800);
    const t3 = setTimeout(() => setFading(true), 1200);
    const t4 = setTimeout(() => {
      document.documentElement.style.overflow = originalOverflow;
      setRemoved(true);
      onFinished?.();
    }, 1600);

    return () => {
      document.documentElement.style.overflow = originalOverflow;
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onFinished]);

  const handleSkip = () => {
    setFading(true);
    setTimeout(() => {
      document.documentElement.style.overflow = "";
      setRemoved(true);
      onFinished?.();
    }, 300);
  };

  if (removed) return null;

  return (
    <div
      className={`splacescreen-overlay select-none ${
        fading ? "opacity-0 pointer-events-none scale-95" : "opacity-100"
      }`}
    >
      {/* Pure CSS Animated Driving Car from Component File */}
      <div className="splacescreen-car" />

      {/* Brand & Progress Overlay Footer */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex flex-col items-center gap-3 px-6 text-center pointer-events-auto">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0C0D0E] animate-ping" />
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#6B7280]">
            AURA DUBAI • FLEET DISPATCH
          </span>
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-48 h-[2px] bg-black/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#0C0D0E] transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <button
          onClick={handleSkip}
          className="text-[11px] font-mono tracking-widest uppercase text-black/40 hover:text-black transition-colors pt-1"
        >
          Skip Intro →
        </button>
      </div>
    </div>
  );
}
