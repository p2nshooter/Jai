import type { Config } from 'tailwindcss';

// jai.lat — 'Tesoro de la reina de Saba': black lacquer, parchment and gold leaf
// (docs/ADSENSE-BLUEPRINT.md §4 in ulyah.com). Unique to this site.
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { 950: '#0b0907', 900: '#16110b', 800: '#2a2016', 700: '#3d2f20' },
        ivory: { 50: '#faf4e6', 100: '#f1e6cb', 200: '#e3d2a9' },
        gold: { 300: '#f3d98c', 400: '#e6bf5e', 500: '#c99a3a', 600: '#9a6f1f' }
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
