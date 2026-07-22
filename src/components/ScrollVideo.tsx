"use client";

import { useEffect, useRef, useState } from "react";

type ScrollVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  /** load immediately instead of waiting for scroll proximity (use for the hero only) */
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
  const [videoReady, setVideoReady] = useState(false);

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
      { rootMargin: "200px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [eager]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full min-h-screen overflow-hidden bg-black ${className}`}
    >
      {poster && (
        <img
          src={poster}
          alt=""
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="scroll-video-canvas object-cover"
        />
      )}
      {shouldLoad && (
        <video
          className={`scroll-video-canvas object-cover transition-opacity duration-500 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          src={src}
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
          onPlaying={() => setVideoReady(true)}
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
