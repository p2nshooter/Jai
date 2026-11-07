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
  // 7 Nov 2026 (owner): sixteen accounts stacked (src/lib/adsense.ts); ca-pub-5693981744147503 is the primary account — the only
  // loader — and ca-pub-6019445914743449 is removed („Domain yg lain kode adsensenya boleh di hapus ikuti dengan perintah terbaru“).
  adClient: 'ca-pub-5693981744147503',
  analyticsEndpoint: 'https://api.ulyah.com/track',
} as const;
