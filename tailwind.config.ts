import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: {
      navy: "#071746",
      ink: "#101b3d",
      lime: "#83d51b",
      pale: "#f4f9ee",
      muted: "#667085"
    },
    boxShadow: { soft: "0 18px 55px rgba(7,23,70,.12)" },
    backgroundImage: {
      "hero-shade": "linear-gradient(90deg, rgba(4,17,57,.98) 0%, rgba(4,17,57,.86) 42%, rgba(4,17,57,.10) 100%)"
    }
  }},
  plugins: []
};
export default config;
