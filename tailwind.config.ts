import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        cloud: "cloud-animation infinite linear",
        fadeOut: "fadeOut linear forwards",
      },
      keyframes: {
        "cloud-animation": {
          "0%": { transform: "translateX(-200%)" },
          "100%": { transform: "translateX(200%)" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      color: {
        primary: "#F0F4EF",
        secondary: "#4d1d85",
        accent: "#B4CDED",
        dark: "#0D1821",
        accent2: "rgba(27,239,197,0.75)",
        menus: "#200e35",
      },
    },
  },
  plugins: [],
};
export default config;
