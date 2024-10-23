/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero.jpg')",
      },
      colors: {
        neonGreen: "#D6FF38",
        neonPurple: "#7000FF",
      },
      boxShadow: {
        "bottom-left": "-8px 8px 0 black",
        "bottom-left-focus": "-15px 15px 0 rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
