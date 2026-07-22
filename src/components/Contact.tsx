"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-black py-28 px-6">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-xs tracking-[0.4em] text-gold uppercase mb-4">
            Contact Us
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-snug">
            Let&apos;s build the next
            <br />
            mile together.
          </h2>
          <p className="mt-6 text-slate-light max-w-md">
            Whether it&apos;s a bid inquiry, a subcontracting opportunity,
            or a question about an active project, our team responds fast.
          </p>

          <div className="mt-10 space-y-6 border-t hairline pt-8">
            <div>
              <p className="text-xs tracking-widest2 text-gold uppercase mb-1">
                Primary Point of Contact
              </p>
              <p className="font-display text-2xl text-white">Royce Stewart</p>
              <a
                href="tel:2257470877"
                className="text-slate-light hover:text-gold transition-colors"
              >
                (225) 747-0877
              </a>
            </div>
            <div>
              <p className="text-xs tracking-widest2 text-gold uppercase mb-1">
                Office
              </p>
              <p className="text-slate-light">Baton Rouge, Louisiana</p>
            </div>
          </div>
        </div>

        <div className="rounded-sm border hairline bg-base-deep p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center text-center py-16">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-royal-gradient gold-outline">
                <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-white fill-none" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-white">
                Message Received
              </h3>
              <p className="mt-2 text-slate-light">
                Our team will be in touch shortly.
              </p>
            </div>
          ) : (
            <form
              className="flex flex-col gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
              </div>
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
                  Inquiry Type
                </option>
                <option value="bid" className="bg-black">Project / Bid Inquiry</option>
                <option value="subcontract" className="bg-black">Subcontracting</option>
                <option value="general" className="bg-black">General Question</option>
              </select>
              <textarea
                required
                rows={4}
                placeholder="Tell us about your project..."
                className="bg-black/60 border hairline rounded-sm px-4 py-3 text-sm text-white placeholder:text-slate-light focus:outline-none focus:border-gold resize-none"
              />
              <button
                type="submit"
                className="rounded-sm bg-royal-gradient px-6 py-4 text-xs font-semibold tracking-widest2 text-white gold-outline hover:brightness-110 transition-all"
              >
                SEND MESSAGE
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
