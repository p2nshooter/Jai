import type { Metadata } from 'next';

/**
 * Our own promotion (owner, 18 Oct 2026): AXTO and XAA, introduced for Jai's
 * readers in Jai's own words — labelled openly, no financial advice, no ad slot.
 */
export const metadata: Metadata = {
  title: 'Tools for patient investors — AXTO & XAA',
  description:
    'A labelled note from our publisher: AXTO, AI that runs on your own key and keeps statements private, and XAA, which builds websites for small finance firms.',
  alternates: { canonical: '/tools' }
};

const link = (base: string) => `${base}/?utm_source=jai.lat&utm_medium=referral&utm_campaign=ecosystem`;

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-prose2 px-4 py-12">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600">✦ Our own promotion</p>
      <h1 className="mt-2 font-serif text-3xl font-black">Tools that keep costs low and paperwork private</h1>
      <div className="ornament-rule mt-4 max-w-sm" />
      <p className="mt-4 text-sm opacity-60">Last reviewed: 19 October 2026</p>
      <div className="article-body mt-6">
        <p>
          Jai is about the slow, unglamorous habits that let money compound: low fees, steady contributions and fewer expensive mistakes. For one page we set
          investing aside: the two projects below belong to the company that publishes Jai. Because they are ours, this is an advertisement — and you should
          weigh it the way we ask you to weigh every pitch: by cost, by what it really does, and by what it asks of you.
        </p>

        <h2>AXTO — AI on your own terms, and your own bill</h2>
        <p>
          A subscription you forget about is a small, compounding loss. <a href={link('https://axto.io')} className="text-gold-600 underline" rel="noopener">AXTO</a>{' '}
          takes a different approach to artificial intelligence:
        </p>
        <ul>
          <li>
            <strong>Your own key.</strong> You connect a key from an AI provider and pay that provider for what you use; AXTO only relays the request. Some
            providers, such as Google Gemini and Groq, offer free tiers for light use.
          </li>
          <li>
            <strong>Private paperwork.</strong> Privacy Vault strips account numbers and names out of statements, contracts and spreadsheets locally, so
            the AI only ever sees the redacted copy.
          </li>
          <li>
            <strong>Understanding, not deciding.</strong> AI Studio can explain a fund factsheet or compare two fee schedules side by side, with answers from
            several models. It cannot tell you what to buy, and it should not: decisions about your money deserve an independent, regulated adviser.
          </li>
        </ul>

        <h2>XAA — a website for advisers and small finance firms</h2>
        <p>
          Independent advisers, bookkeepers and small fintech teams need a site that is clear, fast and trustworthy.{' '}
          <a href={link('https://xaa.es')} className="text-gold-600 underline" rel="noopener">XAA</a> is a European studio that designs and codes made-to-measure sites and platforms — from a plain company site with a booking form to client portals and SaaS products. Each project moves in priced stages: you approve one,
          see it finished, settle it by PayPal, bank transfer or USDT, and only then start the next — so the total stays visible from day one. Templates offer
          a cheaper beginning, and the studio’s own pages are written in English, Spanish and Indonesian.
        </p>

        <h2>Jai stays independent</h2>
        <p>
          Our guides never point you to AXTO or XAA, and their existence changed nothing we publish. Our articles are general education, not personal financial
          advice. If these tools fit your budget, use them; if not, the cheapest tool is still the one you never needed.
        </p>
      </div>
    </div>
  );
}
