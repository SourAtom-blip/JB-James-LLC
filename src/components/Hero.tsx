"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollVideo from "./ScrollVideo";
import { cldVideo } from "@/lib/cloudinary";

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.4, ease: "power3.out", delay: 0.3 }
      );
    }, textRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative">
      <ScrollVideo
        src={cldVideo("0722_omvtbk")}
        poster="/images/hero-poster.jpg"
        eager
      >
        <div
          ref={textRef}
          className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center"
        >
          <p className="mb-6 text-xs md:text-sm tracking-[0.4em] text-gold uppercase">
            Louisiana &amp; the Gulf South
          </p>
          <h1 className="font-display max-w-5xl text-4xl leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Full-Service Heavy Highway
            <br />
            <span className="text-gold">&amp; Bridge Contractor</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-slate-light">
            Earthwork, structures, and pavement engineered to carry the next
            century of traffic — built by the crews who call this ground home.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#services"
              className="rounded-sm bg-royal-gradient px-8 py-4 text-xs font-semibold tracking-widest2 text-white gold-outline hover:brightness-110 transition-all"
            >
              EXPLORE OUR WORK
            </a>
            <a
              href="#careers"
              className="rounded-sm border border-white/30 px-8 py-4 text-xs font-semibold tracking-widest2 text-white hover:border-gold hover:text-gold transition-all"
            >
              JOIN OUR TEAM
            </a>
          </div>
        </div>
      </ScrollVideo>
    </section>
  );
}
