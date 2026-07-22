"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "20+", label: "Years in Heavy Civil" },
  { value: "250M+", label: "In Delivered Infrastructure" },
  { value: "120+", label: "Bridges & Structures Built" },
  { value: "0", label: "Compromise on Safety" },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".stat-item").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-base-deep py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.4em] text-gold uppercase mb-4 text-center">
          About JB James Construction
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-center max-w-4xl mx-auto leading-snug">
          Building the arteries of the Gulf South, one mile and one span
          at a time.
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-center text-slate-light">
          From interstate widenings to river-crossing bridges, our teams
          bring heavy-civil precision, self-perform capability, and an
          unwavering safety culture to every mile of pavement and every
          pier we pour.
        </p>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="stat-item text-center border-t hairline pt-6">
              <div className="font-display text-4xl md:text-5xl text-gold">{s.value}</div>
              <div className="mt-2 text-xs md:text-sm tracking-wide text-slate-light uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
