import type { Config } from 'tailwindcss';

// jai.lat — wealth theme: deep emerald, warm ivory, antique gold.
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { 950: '#0a1811', 900: '#10241c', 800: '#193629', 700: '#254a39' },
        ivory: { 50: '#f6f5f0', 100: '#eceadd', 200: '#dcd8c2' },
        gold: { 300: '#e6cd86', 400: '#d4b25a', 500: '#c69a3a', 600: '#9c7a2c' }
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif']
      },
      maxWidth: { prose2: '44rem' }
    }
  },
  plugins: []
};
export default config;
