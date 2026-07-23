"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollVideo from "./ScrollVideo";
import { cldVideo } from "@/lib/cloudinary";

const ROLES = [
  "Heavy Equipment Operators",
  "Bridge Crew / Structures Laborers",
  "Paving Crew Foremen",
  "CDL Truck Drivers",
  "Safety Coordinators",
  "Project Engineers",
];

export default function Careers() {
  const textRef = useRef<HTMLDivElement>(null);
  const [applyOpen, setApplyOpen] = useState(false);

  useEffect(() => {
    if (applyOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [applyOpen]);

  return (
    <section id="careers" className="relative">
      <ScrollVideo
        src={cldVideo("crew-onsite_pu28mk")}
        poster="/images/careers-poster.jpg"
      >
        <div
          ref={textRef}
          className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center"
        >
          <p className="text-xs tracking-[0.4em] text-gold uppercase mb-4">
            Join Our Team
          </p>
          <h2 className="font-display max-w-4xl text-4xl md:text-6xl text-white leading-tight">
            Careers Built on
            <br />
            <span className="text-gold">Skill, Safety &amp; Grit</span>
          </h2>
          <p
            className="mt-6 max-w-xl text-white/90"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,0.9)" }}
          >
            We hire operators, craftsmen, and engineers who take pride in
            work that outlasts them. Competitive pay, full benefits, and a
            real path forward.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3 max-w-2xl">
            {ROLES.map((r) => (
              <span
                key={r}
                className="rounded-full border border-white/30 bg-black/45 px-4 py-2 text-xs text-white tracking-wide backdrop-blur-sm"
              >
                {r}
              </span>
            ))}
          </div>

          <button
            onClick={() => setApplyOpen(true)}
            className="mt-10 rounded-sm bg-gold-gradient px-10 py-4 text-xs font-semibold tracking-widest2 text-black hover:brightness-110 transition-all"
          >
            APPLY NOW
          </button>
        </div>
      </ScrollVideo>

      {applyOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 px-6 backdrop-blur-sm"
          onClick={() => setApplyOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-sm border hairline bg-base-deep p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setApplyOpen(false)}
              className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full glass gold-outline"
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-white fill-none" strokeWidth={1.5}>
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              </svg>
            </button>
            <h3 className="font-display text-2xl text-white mb-6">
              Apply to JB James Construction
            </h3>
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setApplyOpen(false);
              }}
            >
              <input
                required
                type="text"
                placeholder="Full Name"
                className="bg-black/60 border hairline rounded-sm px-4 py-3 text-sm text-white placeholder:text-slate-light focus:outline-none focus:border-gold"
              />
              <input
                required
                type="tel"
                placeholder="Phone Number"
                className="bg-black/60 border hairline rounded-sm px-4 py-3 text-sm text-white placeholder:text-slate-light focus:outline-none focus:border-gold"
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                className="bg-black/60 border hairline rounded-sm px-4 py-3 text-sm text-white placeholder:text-slate-light focus:outline-none focus:border-gold"
              />
              <select
                required
                defaultValue=""
                className="bg-black/60 border hairline rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-gold"
              >
                <option value="" disabled>
                  Position of Interest
                </option>
                {ROLES.map((r) => (
                  <option key={r} value={r} className="bg-black">
                    {r}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="mt-2 rounded-sm bg-royal-gradient px-6 py-3 text-xs font-semibold tracking-widest2 text-white gold-outline hover:brightness-110 transition-all"
              >
                SUBMIT APPLICATION
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
