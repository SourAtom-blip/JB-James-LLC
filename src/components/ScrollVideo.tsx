"use client";

type ScrollVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function ScrollVideo({
  src,
  poster,
  className = "",
  children,
}: ScrollVideoProps) {
  return (
    <div
      className={`relative w-full min-h-screen overflow-hidden bg-black ${className}`}
    >
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
