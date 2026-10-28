// Per-site brand config — the one file (plus tailwind colors, globals.css
// variables and content/articles.ts) that changes between sibling sites.
export const SITE = {
  id: 'jai-lat',
  name: 'Jai',
  domain: 'jai.lat',
  url: 'https://jai.lat',
  tagline: 'Money that grows',
  description:
    "Independent, plain-English guides to investing, saving and building lasting wealth: the slow, evidence-based moves that compound, with no tips and no hype.",
  locale: 'en',
  heroLead: 'Money that',
  heroAccent: 'grows',
  // 28 Oct 2026 (owner): jai.lat — google.com, pub-2717693315276182, DIRECT, f08c47fec0942fa0.
  adClient: 'ca-pub-2717693315276182',
  analyticsEndpoint: 'https://api.ulyah.com/track',
} as const;
