"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollVideo from "./ScrollVideo";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

type Project = {
  id: string;
  name: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
};

const PROJECTS: Project[] = [
  {
    id: "i10-widening",
    name: "I-10 Corridor Widening",
    category: "Interstate Expansion",
    location: "Baton Rouge, LA",
    year: "2023",
    image: "/images/portfolio/i10-widening.jpg",
    description:
      "12-mile widening of I-10 from four to six lanes, including full drainage reconstruction, three interchange upgrades, and continuous nighttime MOT to keep traffic moving through construction.",
  },
  {
    id: "river-bridge",
    name: "Amite River Crossing",
    category: "River Bridge",
    location: "Livingston Parish, LA",
    year: "2022",
    image: "/images/portfolio/river-bridge.jpg",
    description:
      "New twin-span, cast-in-place concrete bridge over the Amite River, including deep pile foundations and a phased construction sequence to maintain river navigation.",
  },
  {
    id: "hwy61-rehab",
    name: "Highway 61 Rehabilitation",
    category: "Pavement Rehab",
    location: "West Feliciana Parish, LA",
    year: "2023",
    image: "/images/portfolio/hwy61-rehab.jpg",
    description:
      "Full-depth reclamation and asphalt overlay across 18 miles of rural highway, restoring ride quality and structural capacity ahead of design life.",
  },
  {
    id: "interchange-45",
    name: "Interchange 45 Reconstruction",
    category: "Interchange",
    location: "Ascension Parish, LA",
    year: "2021",
    image: "/images/portfolio/interchange-45.jpg",
    description:
      "Complete reconstruction of a diverging diamond interchange, including four new ramp bridges and a signalized arterial upgrade.",
  },
  {
    id: "parish-bridges",
    name: "Parish Bridge Replacement Program",
    category: "Bridge Program",
    location: "Multiple Parishes, LA",
    year: "2020–2023",
    image: "/images/portfolio/parish-bridges.jpg",
    description:
      "Design-build replacement of 14 structurally deficient parish bridges under a multi-year program, delivered ahead of schedule and under budget.",
  },
  {
    id: "port-access",
    name: "Port Access Roadway",
    category: "Earthwork & Paving",
    location: "St. James Parish, LA",
    year: "2022",
    image: "/images/portfolio/port-access.jpg",
    description:
      "New heavy-haul access roadway serving industrial port terminals, engineered for sustained high-axle-load truck traffic.",
  },
];

export default function Portfolio() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".portfolio-card").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: (i % 3) * 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          }
        );
      });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  return (
    <section id="portfolio" className="bg-black">
      <ScrollVideo
        src="/videos/portfolio-construction.mp4"
        poster="/images/portfolio-poster.jpg"
      >
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center">
          <p className="text-xs tracking-[0.4em] text-gold uppercase mb-4">
            Portfolio &amp; Projects
          </p>
          <h2 className="font-display max-w-3xl text-4xl md:text-6xl text-white leading-tight">
            Infrastructure that defines
            <br />
            the region for decades
          </h2>
        </div>
      </ScrollVideo>

      <div className="mx-auto max-w-7xl px-6 py-24">
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveProject(p)}
              className="portfolio-card group relative aspect-[4/5] overflow-hidden rounded-sm border hairline text-left"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-luxury group-hover:scale-110"
                style={{ backgroundImage: `url(${p.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-[10px] tracking-[0.3em] text-gold uppercase mb-2">
                  {p.category}
                </span>
                <h3 className="font-display text-2xl text-white">{p.name}</h3>
                <p className="mt-1 text-xs text-slate-light">
                  {p.location} &middot; {p.year}
                </p>
              </div>
              <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full glass gold-outline opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-gold fill-none" strokeWidth={1.5}>
                  <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 px-6 backdrop-blur-sm"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-sm border hairline bg-base-deep"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="h-64 md:h-80 bg-cover bg-center"
              style={{ backgroundImage: `url(${activeProject.image})` }}
            />
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full glass gold-outline"
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-white fill-none" strokeWidth={1.5}>
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              </svg>
            </button>
            <div className="p-8">
              <span className="text-[10px] tracking-[0.3em] text-gold uppercase">
                {activeProject.category}
              </span>
              <h3 className="font-display text-3xl text-white mt-2">
                {activeProject.name}
              </h3>
              <p className="mt-1 text-sm text-slate-light">
                {activeProject.location} &middot; {activeProject.year}
              </p>
              <p className="mt-6 text-slate-light leading-relaxed">
                {activeProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
