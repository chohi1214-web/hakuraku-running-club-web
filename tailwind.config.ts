import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "#eef9ff",
          100: "#d9f1ff",
          200: "#b5e6ff",
          300: "#80d5ff",
          400: "#42bcff",
          500: "#159cff",
          600: "#0079db",
          700: "#0060b0"
        }
      },
      boxShadow: {
        soft: "0 12px 40px -20px rgba(15, 23, 42, 0.22)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      animation: {
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "dash-run": "dashRun 14s linear infinite",
        "pulse-ring": "pulseRing 2.2s ease-out infinite"
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        dashRun: {
          "0%": { strokeDashoffset: "0" },
          "100%": { strokeDashoffset: "-200" }
        },
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "0.9" },
          "80%, 100%": { transform: "scale(1.6)", opacity: "0" }
        }
      }
    }
  },
  plugins: []
};

export default config;
