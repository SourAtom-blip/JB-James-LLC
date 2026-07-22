import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          black: "#000000",
          deep: "#0A0A0A",
        },
        gold: {
          DEFAULT: "#F5C518",
          soft: "#E6B800",
          dim: "#B8940F",
        },
        royal: {
          DEFAULT: "#1E40AF",
          deep: "#002366",
        },
        slate: {
          light: "#9CA3AF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F5C518 0%, #E6B800 100%)",
        "royal-gradient": "linear-gradient(135deg, #1E40AF 0%, #002366 100%)",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
