"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollVideo from "./ScrollVideo";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: "Earthwork & Site Development",
    desc: "Mass excavation, grading, and drainage engineered for long-term stability across highway and site corridors.",
    icon: "M2 20h20M4 20l4-10 4 4 4-8 4 14",
  },
  {
    title: "Bridge Construction",
    desc: "Structural concrete, pile driving, and superstructure erection for river crossings and grade separations.",
    icon: "M2 18h20M4 18v-4l4-4 4 4 4-4 4 4v4",
  },
  {
    title: "Concrete & Asphalt Paving",
    desc: "High-tonnage hot-mix production and placement, plus reinforced concrete paving for interstate-grade durability.",
    icon: "M3 17l6-6 4 4 8-8",
  },
  {
    title: "Highway Widening & Rehab",
    desc: "Full-corridor widenings, mill-and-overlay programs, and interchange reconstruction with minimal traffic disruption.",
    icon: "M4 12h16M4 6h16M4 18h16",
  },
  {
    title: "Drainage & Utility Relocation",
    desc: "Storm drainage systems, culverts, and utility coordination that keep projects on schedule and off the critical path.",
    icon: "M12 2v20M5 9l7-7 7 7",
  },
  {
    title: "Traffic Control & Safety",
    desc: "MOT design and execution that protects the traveling public and our crews through every phase of construction.",
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  },
];

export default function Services() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".service-card").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: (i % 3) * 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          }
        );
      });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="relative bg-black">
      <ScrollVideo
        src="/videos/ground-paving-ops.mp4"
        poster="/images/paving-poster.jpg"
      >
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center">
          <p className="text-xs tracking-[0.4em] text-gold uppercase mb-4">
            Our Services
          </p>
          <h2 className="font-display max-w-4xl text-4xl md:text-6xl text-white leading-tight">
            Heavy Paving &amp; Highway
            <br />
            Construction, Self-Performed
          </h2>
        </div>
      </ScrollVideo>

      <div ref={gridRef} className="bg-base-deep py-24 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="service-card group relative overflow-hidden rounded-sm border hairline bg-black/60 p-8 hover:border-gold transition-colors duration-500"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-royal-gradient gold-outline">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 stroke-gold fill-none"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={s.icon} />
                </svg>
              </div>
              <h3 className="font-display text-xl text-white mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-slate-light leading-relaxed">
                {s.desc}
              </p>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
