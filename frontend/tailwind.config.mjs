import type { Config } from "tailwindcss";
import daisyui from "daisyui"; // Import moderne

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui], // Utilise la variable importée
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};

export default config;
