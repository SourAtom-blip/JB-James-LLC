import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { cldVideo } from "@/lib/cloudinary";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JB James Construction, LLC | Heavy Highway & Bridge Contractor",
  description:
    "JB James Construction, LLC is a full-service heavy highway, paving, and bridge contractor delivering infrastructure that lasts generations.",
  keywords: [
    "heavy highway contractor",
    "bridge construction",
    "asphalt paving",
    "earthwork",
    "Louisiana construction",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <head>
        <link
          rel="preload"
          as="video"
          href={cldVideo("hero-bridge-flyover_fwxjyr")}
          type="video/mp4"
          fetchPriority="high"
        />
        <link
          rel="prefetch"
          as="video"
          href={cldVideo("ground-paving-ops_ayrmjb")}
        />
        <link rel="prefetch" as="video" href={cldVideo("crew-onsite_pu28mk")} />
        <link rel="prefetch" as="video" href={cldVideo("0722_1_prufhi")} />
      </head>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
