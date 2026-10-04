import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Jai",
  description: "Who we are, what Jai covers, how we research every guide on personal finance and investing and why we stay independent.",
  alternates: { canonical: '/about' }
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-prose2 px-4 py-12">
      <h1 className="font-serif text-3xl font-black">About Jai</h1>
      <div className="ornament-rule mt-4 max-w-sm" />
      <p className="mt-4 text-sm opacity-60">Last reviewed: 4 October 2026</p>
      <div className="article-body mt-6">
        <p>Jai is an independent publication of plain-English guides to saving, investing and building lasting wealth. We focus on the slow, evidence-based habits that compound over a lifetime — budgeting, emergency funds, index investing, retirement accounts, debt and insurance — and we explain them without tips, hype or sales pitches.</p>
        <h2>What we cover</h2>
        <ul>
          <li>Budgeting and saving: emergency funds, spending plans and automating good habits.</li>
          <li>Investing basics: diversification, index funds, asset allocation, fees and risk.</li>
          <li>Retirement planning: how long-term accounts and compound growth work.</li>
          <li>Debt: credit cards, loans, interest and strategies to pay them down.</li>
          <li>Protection: insurance, avoiding scams and making safer financial decisions.</li>
        </ul>
        <h2>How we work</h2>
        <p>Every article is researched and written by our editorial team and checked against reliable sources before it is published. We explain technical terms in plain language, say clearly when evidence is limited or mixed, and update articles when the facts change. Our full standards are set out in our <a href="/editorial-policy" className="text-gold-600 underline">editorial policy</a>.</p>
        <h2>Independence</h2>
        <p>Jai is free to read and supported by advertising served by Google AdSense, which is kept clearly separate from our articles. We do not accept payment for coverage, and advertisers have no say in what we publish.</p>
        <h2>What we are not</h2>
        <p>Our articles are general information, not personalized financial, investment, tax or legal advice. For decisions about your own situation, speak with a licensed financial adviser, tax professional or attorney.</p>
        <h2>Contact</h2>
        <p>Corrections, questions and topic ideas are welcome. See our <a href="/contact" className="text-gold-600 underline">contact page</a> or email <a href="mailto:hello@jai.lat" className="text-gold-600 underline">hello@jai.lat</a>.</p>
      </div>
    </div>
  );
}
