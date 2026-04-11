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
        terra: "#AC521C",
        "terra-dark": "#8B4217",
        sand: "#C6B29A",
        warm: "#F5F2EE",
        dark: "#343434",
        border: "#ABB0B2",
      },
      fontFamily: {
        sans: ["Open Sans", "Helvetica Neue", "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
