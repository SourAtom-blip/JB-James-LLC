"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Join Our Team", href: "#careers" },
  { label: "Contact Us", href: "#contact" },
  { label: "News", href: "#news" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b hairline py-3" : "bg-gradient-to-b from-black/70 via-black/30 to-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#home" className="flex items-center group">
          <img
            src="/images/logo.jpeg"
            alt="JB James Construction, LLC"
            className="h-12 w-auto md:h-14 transition-transform group-hover:scale-105"
          />
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm tracking-wide text-slate-light hover:text-gold transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-sm bg-royal-gradient px-6 py-3 text-xs font-semibold tracking-widest2 text-white gold-outline hover:brightness-110 transition-all duration-300"
        >
          GET IN TOUCH
        </a>

        <button
          aria-label="Toggle menu"
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`h-px w-7 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-px w-7 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-7 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="lg:hidden glass border-t hairline mt-4 px-6 py-6">
          <ul className="flex flex-col gap-5">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base tracking-wide text-slate-light hover:text-gold transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-sm bg-royal-gradient px-6 py-3 text-xs font-semibold tracking-widest2 text-white gold-outline"
              >
                GET IN TOUCH
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
