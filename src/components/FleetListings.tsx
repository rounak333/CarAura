"use client";

import React, { useState } from "react";
import { ArrowUpRight, Zap, Shield, Sparkles } from "lucide-react";

export interface CarListing {
  id: string;
  name: string;
  category: string;
  image: string;
  price: string;
  hp: string;
  acceleration: string;
  transmission: string;
}

const fleetListings: CarListing[] = [
  // ROW 1: Hypercars & Track
  {
    id: "ferrari-sf90",
    name: "Ferrari SF90 Stradale",
    category: "Hypercar Hybrid",
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1200&q=80",
    price: "AED 5,500",
    hp: "1,000 HP",
    acceleration: "2.5s",
    transmission: "8-Speed F1 Dual-Clutch",
  },
  {
    id: "lamborghini-revuelto",
    name: "Lamborghini Revuelto",
    category: "V12 Electrified",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    price: "AED 7,200",
    hp: "1,015 HP",
    acceleration: "2.5s",
    transmission: "8-Speed Wet DCT",
  },
  {
    id: "porsche-gt3rs",
    name: "Porsche 911 GT3 RS",
    category: "Track Weapon",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
    price: "AED 4,200",
    hp: "518 HP",
    acceleration: "3.2s",
    transmission: "7-Speed PDK",
  },
  {
    id: "mclaren-750s",
    name: "McLaren 750S Spider",
    category: "Exotic Convertible",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    price: "AED 4,800",
    hp: "750 HP",
    acceleration: "2.8s",
    transmission: "7-Speed SSG",
  },

  // ROW 2: Ultra-Luxury & Grand Tourers
  {
    id: "rolls-royce-spectre",
    name: "Rolls-Royce Spectre",
    category: "All-Electric Luxury",
    image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=1200&q=80",
    price: "AED 6,200",
    hp: "577 HP",
    acceleration: "4.4s",
    transmission: "Planetary Dual-Drive",
  },
  {
    id: "bentley-gtc",
    name: "Bentley Continental GTC",
    category: "Grand Tourer",
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1200&q=80",
    price: "AED 4,500",
    hp: "650 HP",
    acceleration: "3.6s",
    transmission: "8-Speed Dual-Clutch",
  },
  {
    id: "mercedes-g63",
    name: "Mercedes-AMG G63 Mansory",
    category: "Command SUV",
    image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1200&q=80",
    price: "AED 3,800",
    hp: "585 HP",
    acceleration: "4.5s",
    transmission: "9-Speed Speedshift",
  },
  {
    id: "aston-martin-dbs",
    name: "Aston Martin DBS 770",
    category: "Super GT V12",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
    price: "AED 4,600",
    hp: "770 HP",
    acceleration: "3.4s",
    transmission: "ZF 8-Speed Auto",
  },
];

interface FleetListingsProps {
  onReserveCar?: (carName: string) => void;
}

export default function FleetListings({ onReserveCar }: FleetListingsProps) {
  const [filter, setFilter] = useState<string>("all");

  return (
    <section id="collection" className="w-full py-20 px-6 sm:px-10 lg:px-14 bg-[#FAF8F0] text-[#0C0D0E]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/[0.06]">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#71717A] mb-2">
              SHOWROOM COLLECTION • 2026 FLEET
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display uppercase tracking-tight">
              Featured Listings
            </h2>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-[#52525B]">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>8 VEHICLES IN STOCK • INSTANT DISPATCH</span>
          </div>
        </div>

        {/* 2 Rows × 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetListings.map((car) => (
            <div
              key={car.id}
              className="group relative rounded-2xl bg-white border border-black/[0.06] p-4 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] overflow-hidden"
            >
              {/* Image Container with subtle zoom */}
              <div className="relative w-full h-48 rounded-xl overflow-hidden bg-[#F3F4F6] mb-4">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-mono tracking-wider text-[#0C0D0E] uppercase border border-black/[0.04]">
                    {car.category}
                  </span>
                </div>
              </div>

              {/* Title & Specs */}
              <div className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display font-bold text-base uppercase tracking-tight text-[#0C0D0E] group-hover:text-black">
                    {car.name}
                  </h3>
                </div>

                <div className="flex items-center justify-between text-xs text-[#71717A] font-mono border-y border-black/[0.05] py-2">
                  <span>{car.hp}</span>
                  <span className="text-gray-300">•</span>
                  <span>0-100: {car.acceleration}</span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#8E95A2] block">
                      Daily Rate
                    </span>
                    <span className="font-bold font-mono text-sm text-[#0C0D0E]">
                      {car.price}
                    </span>
                  </div>

                  <button
                    onClick={() => onReserveCar?.(car.name)}
                    className="px-4 py-2 rounded-full bg-[#0C0D0E] text-[#FAF8F0] hover:bg-black font-semibold text-[11px] uppercase tracking-wider transition-all active:scale-95 flex items-center gap-1.5"
                  >
                    <span>Reserve</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
