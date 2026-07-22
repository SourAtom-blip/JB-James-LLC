"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const ARTICLES = [
  {
    tag: "Press Release",
    title: "JB James Awarded I-12 Interchange Expansion Contract",
    date: "June 14, 2026",
    excerpt:
      "The Louisiana DOTD has selected JB James Construction to lead a $42M interchange reconstruction slated to begin Q4 2026.",
  },
  {
    tag: "Milestone",
    title: "Amite River Crossing Reaches Substantial Completion",
    date: "April 2, 2026",
    excerpt:
      "The twin-span structure opened to traffic three weeks ahead of schedule, capping an 18-month build sequence.",
  },
  {
    tag: "Safety",
    title: "500,000 Man-Hours Without a Lost-Time Incident",
    date: "February 20, 2026",
    excerpt:
      "Our crews across four active job sites crossed a major safety milestone, reflecting a company-wide culture of accountability.",
  },
  {
    tag: "Community",
    title: "JB James Partners with Local Trade School Apprenticeship",
    date: "January 9, 2026",
    excerpt:
      "A new partnership will place graduating heavy-equipment students directly into paid apprenticeships on active projects.",
  },
];

export default function News() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".news-card").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: (i % 2) * 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%" },
          }
        );
      });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="news" className="bg-base-deep py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.4em] text-gold uppercase mb-4 text-center">
          News &amp; Insights
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-center max-w-3xl mx-auto leading-snug">
          Project milestones, press, and company updates
        </h2>

        <div ref={gridRef} className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {ARTICLES.map((a) => (
            <article
              key={a.title}
              className="news-card group border-t hairline pt-6 hover:border-gold transition-colors duration-500 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] tracking-[0.3em] text-gold uppercase">
                  {a.tag}
                </span>
                <span className="h-1 w-1 rounded-full bg-slate-light" />
                <span className="text-xs text-slate-light">{a.date}</span>
              </div>
              <h3 className="font-display text-2xl text-white group-hover:text-gold transition-colors">
                {a.title}
              </h3>
              <p className="mt-3 text-sm text-slate-light leading-relaxed">
                {a.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-xs tracking-widest2 text-white group-hover:text-gold transition-colors">
                READ MORE
                <svg viewBox="0 0 24 24" className="h-3 w-3 stroke-current fill-none" strokeWidth={2}>
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
