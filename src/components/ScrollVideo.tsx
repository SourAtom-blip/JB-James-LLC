"use client";

import { useEffect, useRef, useState } from "react";

type ScrollVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  /** load eagerly instead of waiting for scroll proximity (use for the hero) */
  eager?: boolean;
  children?: React.ReactNode;
};

export default function ScrollVideo({
  src,
  poster,
  className = "",
  eager = false,
  children,
}: ScrollVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(eager);

  useEffect(() => {
    if (eager) return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [eager]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full min-h-screen overflow-hidden bg-black ${className}`}
    >
      {shouldLoad && (
        <video
          className="scroll-video-canvas"
          src={src}
          poster={poster}
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
        />
      )}
      {!shouldLoad && poster && (
        <img
          src={poster}
          alt=""
          className="scroll-video-canvas object-cover"
          loading="lazy"
        />
      )}
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      {children}
    </div>
  );
}
