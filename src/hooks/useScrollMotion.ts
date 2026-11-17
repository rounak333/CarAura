"use client";

import { useState, useEffect } from "react";

export function useScrollMotion() {
  const [scrollY, setScrollY] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const maxScroll =
            document.documentElement.scrollHeight - window.innerHeight;
          setScrollY(currentY);
          setProgress(maxScroll > 0 ? Math.min(1, currentY / maxScroll) : 0);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollY, progress };
}
