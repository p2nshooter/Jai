import type { Config } from 'tailwindcss';

// jai.lat — teal/emerald 'growth' theme (deliberately distinct from profity.in's gold).
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { 950: '#04211d', 900: '#083832', 800: '#0d4a42', 700: '#155f55' },
        ivory: { 50: '#eef6f4', 100: '#dcece8', 200: '#c3ddd6' },
        gold: { 300: '#5eead4', 400: '#2dd4bf', 500: '#0f9e8c', 600: '#0b7d6f' }
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
