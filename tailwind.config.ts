import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nature: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#2d6a4f",
          800: "#1b4332", // Primary Forest Green
          900: "#081c15",
          950: "#040d0a",
        },
        earth: {
          50: "#faf7f4",
          100: "#f3ede5",
          200: "#e6dacb",
          300: "#d4c0aa",
          400: "#b99c7d",
          500: "#9f7d5c",
          600: "#806044",
          700: "#5c432d",
          800: "#3d2b1f", // Rich Soil Brown
          900: "#241810",
        },
        gold: {
          50: "#fdfbf4",
          100: "#fbf6e4",
          200: "#f5e8be",
          300: "#eed591",
          400: "#e5bc5d",
          500: "#d4af37", // Warm Gold
          600: "#b89025",
          700: "#926e1c",
          800: "#76571a",
          900: "#624719",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
