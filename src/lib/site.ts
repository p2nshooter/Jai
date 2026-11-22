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
  // 22 Nov 2026 (pemilik): „hapus seluruh kode adsense tumpuk dan meta tag nya … sisakan 3 adsense saja“: akun utama = ca-pub-5928074389292014 (adsense-stack.json di ulyah.com).
  adClient: 'ca-pub-5928074389292014',
  analyticsEndpoint: 'https://api.ulyah.com/track',
} as const;
