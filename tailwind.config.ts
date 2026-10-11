import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ssh: {
          blue: "var(--ssh-blue)",
          ink: "var(--ssh-ink)",
          slate: "var(--ssh-slate)",
          warm: "var(--ssh-warm-white)",
          gold: "var(--ssh-nest-gold)",
          orange: "var(--ssh-orange)"
        }
      },
      fontFamily: {
        sans: ["var(--font-plex)", "system-ui", "sans-serif"],
        display: ["var(--font-newsreader)", "Georgia", "serif"],
        metric: ["var(--font-space)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
