// Adsterra direct-tag ad configuration for jai.lat.
// highperformanceformat.com = iframe display banners (isolated per slot);
// effectivecpmnetwork.com = native banner, social bar and smart link.
// Rendered by src/components/Ads.tsx.
export type BannerSlot = 'leaderboard' | 'rectangle' | 'banner468' | 'halfpage' | 'skyscraper' | 'mobile';
type Banner = { key: string; width: number; height: number };
interface AdsConfig {
  banners: Partial<Record<BannerSlot, Banner>>;
  native: { container: string; src: string } | null;
  socialBar: string | null;
  smartLink: string | null;
}

export const ADS: AdsConfig = {
  banners: {
    leaderboard: { key: 'dc0318c07533a305904a3400d80c5c10', width: 728, height: 90 },
    rectangle: { key: '3797fb15b94741bbe13b6e8b31108656', width: 300, height: 250 },
    banner468: { key: '46788357c829594a358e686b0f50370e', width: 468, height: 60 },
    halfpage: { key: 'f94365e7ae38d0f669a9131439f26ca0', width: 160, height: 600 },
    skyscraper: { key: '2f36df409ae36fd4668b61ff05bc29e3', width: 160, height: 300 },
  },
  native: {
    container: '99c2118a94e7cc3e6e6b997e36806a96',
    src: 'https://pl30477689.effectivecpmnetwork.com/99c2118a94e7cc3e6e6b997e36806a96/invoke.js',
  },
  socialBar: 'https://pl30477697.effectivecpmnetwork.com/e6/9a/d4/e69ad4af7a586ffc0d6006419cbb061b.js',
  smartLink: 'https://www.effectivecpmnetwork.com/nip8evjs7i?key=c0be534595f3ea831c14933542d013cc',
};
