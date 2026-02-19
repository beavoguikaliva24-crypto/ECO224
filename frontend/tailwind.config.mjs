import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  // Vérifie que ces chemins correspondent bien à ton arborescence (image 2df61c.png)
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};

export default config;
