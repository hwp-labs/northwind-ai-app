import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   Raleway: ["var(--font-Raleway)"],
      //   Poppins: ["var(--font-Poppins)"],
      //   Montserrat: ["var(--font-Montserrat)"],
      // },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
