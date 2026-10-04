/** @type {import('next').NextConfig} */
// Five machine-written articles were removed (owner rule: hand-written only,
// no duplicates — docs/ADSENSE-BLUEPRINT.md in ulyah.com). Their urls go to the
// hand-written guide on the same topic so no link or index entry dies.
const REMOVED_MACHINE_ARTICLES = {
  'understanding-portfolio-optimization': 'diversification-explained',
  'understanding-the-power-of-dollar-cost-averaging': 'dollar-cost-averaging',
  'understanding-the-relationship-between-risk-and-return': 'risk-tolerance-finding-yours',
  'leveraging-asset-allocation': 'diversification-explained',
  'tax-loss-harvesting-beyond-the-hype': 'diversification-explained',
};
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  async redirects() {
    return Object.entries(REMOVED_MACHINE_ARTICLES).map(([from, to]) => ({
      source: `/articles/${from}`,
      destination: `/articles/${to}`,
      permanent: true,
    }));
  },
};
module.exports = nextConfig;
const { initOpenNextCloudflareForDev } = require('@opennextjs/cloudflare');
initOpenNextCloudflareForDev();
