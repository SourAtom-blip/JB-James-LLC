"use client";

import { useEffect } from "react";

const VIDEOS_TO_PREFETCH = [
  "/videos/ground-paving-ops.mp4",
  "/videos/portfolio-construction.mp4",
  "/videos/crew-onsite.mp4",
];

export default function VideoPrefetch() {
  useEffect(() => {
    const schedule =
      "requestIdleCallback" in window
        ? window.requestIdleCallback
        : (cb: IdleRequestCallback) => setTimeout(cb, 1500);

    const links: HTMLLinkElement[] = [];

    const handle = schedule(() => {
      VIDEOS_TO_PREFETCH.forEach((src) => {
        const link = document.createElement("link");
        link.rel = "prefetch";
        link.as = "video";
        link.href = src;
        document.head.appendChild(link);
        links.push(link);
      });
    });

    return () => {
      links.forEach((l) => l.remove());
      if ("cancelIdleCallback" in window && typeof handle === "number") {
        window.cancelIdleCallback(handle);
      }
    };
  }, []);

  return null;
}
