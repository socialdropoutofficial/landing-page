/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // ✅ Fonts
      fontFamily: {
        exo: ["'Exo 2'", "sans-serif"], // Headlines
        montserrat: ["'Montserrat'", "sans-serif"], // Buttons & UI
      },

      // ✅ Brand Colors
      colors: {
        sd: {
          purple: "#7A2DF8",       // Main accent purple
          purpleDark: "#5B17E6",   // Deep purple for gradients
          black: "#0b0b0d",        // Base dark background
          gray: "#121216",         // Slightly lighter background
        },
      },

      // ✅ Shadows / Glow
      boxShadow: {
        glow: "0 0 25px rgba(122,45,248,0.35)", // Soft purple glow
        strong: "0 0 40px rgba(91,23,230,0.6)", // Strong hover glow
      },

      // ✅ Keyframes
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(8deg)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(-6deg)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.35" },
        },
      },

      // ✅ Animations
      animation: {
        float: "float 6s ease-in-out infinite",
        floatSlow: "floatSlow 10s ease-in-out infinite",
        spinSlow: "spinSlow 20s linear infinite",
        pulseSoft: "pulseSoft 8s ease-in-out infinite",
      },

      // ✅ Background gradients (luxury palettes)
      backgroundImage: {
        "luxury-gradient": "linear-gradient(to bottom right, #14121C, #2B1548, #5B17E6)",
        "deep-purple": "linear-gradient(to right, #121216, #5B17E6)",
        "royal-dark": "linear-gradient(to bottom, #0B0B0D, rgba(122,45,248,0.4))",
      },
    },
  },
  plugins: [],
}
