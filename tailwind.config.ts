/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "token-e603e94d": "rgb(18, 18, 18)",
        "token-76df4f11": "rgb(23, 23, 23)",
        "token-f09a9676": "rgb(41, 41, 41)",
        "token-3de97c3c": "rgb(255, 255, 255)",
        "token-3752026f": "rgb(128, 128, 128)",
        "token-e0fac5c4": "#fca311",
        "token-db66b1f6": "hsl(37, 100%, 43%)",
        "token-013b20f1": "rgb(3, 226, 107)",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        "fade-in": "fade-in 1000ms var(--animation-delay, 0ms) ease forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "fade-in": {
          from: { opacity: 0, transform: "translateY(-10px)" },
          to: { opacity: 1, transform: "none" },
        },
      },
    },
  },
  plugins: [],
};
