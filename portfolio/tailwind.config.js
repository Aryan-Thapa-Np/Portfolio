/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#137FEC",
        secondary: "#94a3b8",
        dark: "#101922",
        indigo: "#4F46E5",
        light: "#f9f9f9",
        light_dark: "#101922",
        Tertiary: "#64748B",
        blue_shadow: "rgba(19, 127, 236, 0.2-0.3)",
        dark_shadow: "rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        space: ['"Space Grotesk"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
