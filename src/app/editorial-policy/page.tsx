import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "How Jai researches, writes, reviews and corrects its articles, the sources we rely on and the standards we hold ourselves to.",
  alternates: { canonical: '/editorial-policy' }
};

export default function EditorialPolicyPage() {
  return (
    <div className="mx-auto max-w-prose2 px-4 py-12">
      <h1 className="font-serif text-3xl font-black">Editorial Policy</h1>
      <div className="ornament-rule mt-4 max-w-sm" />
      <p className="mt-4 text-sm opacity-60">Last reviewed: 4 October 2026</p>
      <div className="article-body mt-6">
        <p>Readers trust Jai to explain personal finance and investing accurately and honestly. This page sets out how we try to deserve that trust.</p>
        <h2>Our standards</h2>
        <ul>
          <li><strong>Useful first:</strong> every article answers a real question and leaves the reader with something practical.</li>
          <li><strong>Accurate and sourced:</strong> factual claims are checked against reliable sources before publication.</li>
          <li><strong>Honest about uncertainty:</strong> we say when evidence is limited, mixed or still developing.</li>
          <li><strong>Plain language:</strong> technical terms are explained the first time they appear.</li>
          <li><strong>Independent:</strong> no advertiser, brand or company can pay for coverage or influence what we write.</li>
        </ul>
        <h2>Sources we rely on</h2>
        <ul>
          <li>Official publications of financial regulators and central banks.</li>
          <li>Peer-reviewed research in economics and behavioral finance.</li>
          <li>Product documents published by the providers themselves, such as fund fact sheets and fee schedules.</li>
          <li>Long-run market data from recognized index providers and public statistical agencies.</li>
        </ul>
        <h2>How articles are made</h2>
        <p>Each article is researched and drafted by our editorial team, then edited for accuracy, clarity and usefulness. We remove claims we cannot support and avoid sensational headlines. We hold every article on the site to these standards and revise or remove those that fall short.</p>
        <h2>Updates and corrections</h2>
        <p>We review articles regularly and when rules, research or products change. When we find a mistake, we correct it promptly. You can report errors through our <a href="/contact" className="text-gold-600 underline">contact page</a>.</p>
        <h2>Advertising</h2>
        <p>The site is funded by advertising served by Google AdSense, clearly separated from editorial content.</p>
      </div>
    </div>
  );
}
