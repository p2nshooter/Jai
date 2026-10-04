import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "The limits of the information published on Jai about personal finance and investing, and when to consult a professional.",
  alternates: { canonical: '/disclaimer' }
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-prose2 px-4 py-12">
      <h1 className="font-serif text-3xl font-black">Disclaimer</h1>
      <div className="ornament-rule mt-4 max-w-sm" />
      <p className="mt-4 text-sm opacity-60">Last reviewed: 4 October 2026</p>
      <div className="article-body mt-6">
        <p>Jai publishes general educational information about personal finance and investing. Please read it with the following limits in mind.</p>
        <h2>Not financial advice</h2>
        <p>Everything on Jai is general educational information. It does not take into account your objectives, financial situation or needs, and it is not a recommendation to buy, sell or hold any security, fund or financial product.</p>
        <h2>Investing involves risk</h2>
        <p>The value of investments can go down as well as up, and you may get back less than you invest. Past performance is not a reliable indicator of future results. Examples and calculations on the site are illustrations, not predictions.</p>
        <h2>Rules and figures change</h2>
        <p>Tax rules, account limits, interest rates and product terms vary by country and change over time. Always verify current details with official sources or the provider before acting.</p>
        <h2>No products, no commissions</h2>
        <p>Jai does not sell financial products and does not receive commissions from banks, brokers or insurers. Mentions of product types are for education only.</p>
        <h2>Accuracy</h2>
        <p>We research carefully and review articles regularly, but information can become outdated. If you spot an error, please <a href="/contact" className="text-gold-600 underline">tell us</a>.</p>
        <h2>Advertising</h2>
        <p>Ads on the site are served by Google AdSense. We do not choose individual advertisers and are not responsible for their offers.</p>
      </div>
    </div>
  );
}
