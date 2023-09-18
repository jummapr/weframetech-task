/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    // colors: {
    //   "bg-sidebar": "#15132b",
    //   "Accent01": "#5ECFFF",
    //   "primary": "#6418C3",
    //   "Accent02": "#E328AF",
    //   "Dark01": "#0D0B21",
    //   "Dark02": "#15132B",
    //   "Dark04": "#1E1C3A",
    //   "white": "#FFFFFF",
    //   "Green": "#38E25D",
    //   "Grey-01": "#A5A5A5",
    //   "Grey-03": "#F5F5F5",
    //   "Iris/80":"#7879F1",
    //   "Red": "#FF4A55",
    //   "Yellow": "#FFAB2D",
    //   "sidebar-text": "#C4C4C4",
    //   "bg": "#211A75",
    // },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "bg-sidebar": "#15132b",
        "Accent01": "#5ECFFF",
        "primary": "#6418C3",
        "Accent02": "#E328AF",
        "Dark01": "#0D0B21",
        "Dark02": "#15132B",
        "Dark04": "#1E1C3A",
        "white": "#FFFFFF",
        "Green": "#38E25D",
        "Grey-01": "#A5A5A5",
        "Grey-03": "#F5F5F5",
        "Iris/80":"#7879F1",
        "Red": "#FF4A55",
        "Yellow": "#FFAB2D",
        "sidebar-text": "#C4C4C4",
        "bg": "#211A75",
      },
      
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}