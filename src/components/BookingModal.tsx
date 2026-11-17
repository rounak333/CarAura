"use client";

import React, { useState } from "react";
import { X, Calendar, MapPin, CheckCircle, ShieldCheck, Sparkles, Send } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVehicle?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialVehicle = "Ferrari SF90 Stradale",
}: BookingModalProps) {
  const [vehicle, setVehicle] = useState(initialVehicle);
  const [location, setLocation] = useState("DXB Airport VIP Terminal");
  const [duration, setDuration] = useState("3 Days (VIP Weekend)");
  const [serviceType, setServiceType] = useState<"self" | "chauffeur">("self");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md select-none">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#F8F8F6] text-[#0C0D0E] shadow-2xl border border-black/10 overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-black/[0.08] bg-[#F1F1ED]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono tracking-widest uppercase text-[#52525B]">
              VIP DISPATCH CONCIERGE
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-black/10 text-gray-500 hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-display uppercase tracking-tight">
              Reservation Priority Confirmed
            </h3>
            <p className="text-xs text-[#52525B] leading-relaxed max-w-sm mx-auto">
              Our 24/7 Dubai fleet master is reviewing your dispatch request for the{" "}
              <strong>{vehicle}</strong>. You will receive a direct VIP confirmation in under 3 minutes.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div>
              <h2 className="text-2xl font-extrabold font-display uppercase tracking-tight text-[#0C0D0E]">
                Reserve Your Vehicle
              </h2>
              <p className="text-xs text-[#666C75] mt-1 font-light">
                Hand-delivered anywhere in Dubai within 30 minutes. 0% security deposit options available.
              </p>
            </div>

            {/* Service Toggle */}
            <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-black/[0.05] border border-black/[0.06]">
              <button
                type="button"
                onClick={() => setServiceType("self")}
                className={`py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  serviceType === "self"
                    ? "bg-white text-black shadow-sm"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Self-Drive
              </button>
              <button
                type="button"
                onClick={() => setServiceType("chauffeur")}
                className={`py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  serviceType === "chauffeur"
                    ? "bg-white text-black shadow-sm"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Chauffeured Escort
              </button>
            </div>

            {/* Vehicle Selection */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#52525B]">
                Selected Vehicle
              </label>
              <select
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/10 text-xs font-medium text-black focus:outline-none focus:ring-2 focus:ring-black/20"
              >
                <option value="Ferrari SF90 Stradale">Ferrari SF90 Stradale (1,000 HP)</option>
                <option value="Rolls-Royce Spectre">Rolls-Royce Spectre (Ultra-Luxury)</option>
                <option value="Lamborghini Revuelto V12">Lamborghini Revuelto V12</option>
                <option value="Porsche 911 GT3 RS">Porsche 911 GT3 RS</option>
                <option value="Mercedes-AMG G63 Mansory">Mercedes-AMG G63 Mansory</option>
                <option value="Bentley Continental GTC">Bentley Continental GTC Speed</option>
                <option value="Rolls-Royce Phantom VIII">Rolls-Royce Phantom VIII</option>
              </select>
            </div>

            {/* Location Selection */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#52525B]">
                Delivery Location in Dubai
              </label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-black/10 text-xs font-medium text-black focus:outline-none focus:ring-2 focus:ring-black/20"
                >
                  <option value="DXB Airport VIP Terminal">DXB Airport • VIP Terminal</option>
                  <option value="Burj Al Arab Hotel">Burj Al Arab Hotel</option>
                  <option value="Downtown Dubai / Burj Khalifa">Downtown Dubai / Burj Khalifa</option>
                  <option value="DIFC Gate Avenue">DIFC Gate Avenue</option>
                  <option value="Palm Jumeirah Resort">Palm Jumeirah Luxury Villa</option>
                  <option value="Dubai Harbour / Marina">Dubai Harbour / Yacht Marina</option>
                </select>
              </div>
            </div>

            {/* Duration */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#52525B]">
                Rental Period
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["1 Day", "3 Days", "7 Days VIP"].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDuration(d)}
                    className={`py-2 rounded-xl text-xs font-mono font-medium border transition-all ${
                      duration === d
                        ? "bg-[#0C0D0E] text-white border-black"
                        : "bg-white text-gray-600 border-black/10 hover:border-black/30"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Security Guarantee */}
            <div className="flex items-center gap-2 p-3 rounded-xl bg-[#F1F1ED] text-[11px] text-[#52525B]">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Full comprehensive insurance & zero deposit privilege included.</span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#0C0D0E] hover:bg-black text-white font-semibold text-xs uppercase tracking-widest transition-all shadow-lg active:scale-98 flex items-center justify-center gap-2"
            >
              <span>Confirm Instant Dispatch</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
