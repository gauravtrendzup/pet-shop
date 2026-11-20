/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F5F4ED",
        orange: "#E86F4D",
        brown: "#24251F",
        peach: "#E8E6DA",
        olive: "#8B9563",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Outfit", "sans-serif"],
        editorial: ["Instrument Serif", "serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 18px 55px rgba(36, 37, 31, 0.09)",
      },
    },
  },
  plugins: [],
};
