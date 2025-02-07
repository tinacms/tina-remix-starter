import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(-100%)' },
          '45%': { transform: 'translateX(100%)' },
          '55%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        'wave': 'wave 6s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite'
      },
      backgroundImage: {
        'footer-gradient-light': `linear-gradient(
          to bottom, 
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 1)
        ),
        linear-gradient(
          50deg,
          transparent 0%,
          rgba(255, 255, 255, 0) 10%,
          rgb(57, 146, 255, 0.2) 30%,
          rgb(107, 217, 104, 0.2) 40%,
          rgb(254, 204, 27, 0.3) 50%,
          rgb(216, 59, 210, 0.2) 60%,
          rgb(244, 66, 80, 0.2) 70%,
          rgba(255, 255, 255, 0) 90%,
          transparent 100%
        )`,
        'footer-gradient-dark': `linear-gradient(
          90deg,
          transparent 0%,
          rgba(255, 255, 255, 0) 20%,
          rgba(255, 255, 255, 0.1) 50%,
          rgba(255, 255, 255, 0) 80%,
          transparent 100%
        )`
      }
    },
  },
  plugins: [],
} satisfies Config;
