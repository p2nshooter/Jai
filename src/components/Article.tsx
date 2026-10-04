import Link from 'next/link';
import { SITE } from '@/lib/site';
import { CATEGORIES, ARTICLES } from '@/content/articles';
import type { Article } from '@/content/types';

export function ArticleCard({ article }: { article: Article }) {
  const cat = CATEGORIES.find((c) => c.slug === article.category);
  const es = article.lang === 'es';
  return (
    <Link href={`/articles/${article.slug}`} className="premium-card block p-5" lang={article.lang}>
      <p className="text-[11px] font-semibold uppercase tracking-wider text-gold-600">{cat?.name}</p>
      <h3 className="mt-1.5 font-serif text-lg font-bold leading-snug">{article.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-800/70">{article.excerpt}</p>
      <p className="mt-3 text-xs text-gold-600">{es ? `${article.minutes} min de lectura` : `${article.minutes} min read`}</p>
    </Link>
  );
}

/** Inline **bold** only — the content is our own, so no other markup is honoured. */
function inline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part
  );
}

/**
 * One paragraph string. English articles are plain prose; the Spanish desk
 * may carry light block markdown: ### subheads, - and 1. lists, > quotes and
 * | tables |. Anything else is a paragraph.
 */
function Block({ text }: { text: string }) {
  const lines = text.split('\n');
  if (text.startsWith('### ')) return <h3>{inline(text.slice(4))}</h3>;
  if (lines.every((l) => /^- /.test(l))) return <ul>{lines.map((l, i) => <li key={i}>{inline(l.slice(2))}</li>)}</ul>;
  if (lines.every((l) => /^\d+\. /.test(l))) return <ol>{lines.map((l, i) => <li key={i}>{inline(l.replace(/^\d+\. /, ''))}</li>)}</ol>;
  if (lines.every((l) => l.startsWith('>'))) return <blockquote>{inline(lines.map((l) => l.replace(/^>\s?/, '')).join(' '))}</blockquote>;
  if (lines.length > 2 && lines.every((l) => l.startsWith('|'))) {
    const cells = (l: string) => l.replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
    const [head, , ...rows] = lines;
    return (
      <div className="table-wrap">
        <table>
          <thead><tr>{cells(head!).map((c, i) => <th key={i}>{inline(c)}</th>)}</tr></thead>
          <tbody>{rows.map((r, i) => <tr key={i}>{cells(r).map((c, k) => <td key={k}>{inline(c)}</td>)}</tr>)}</tbody>
        </table>
      </div>
    );
  }
  // A lead-in line followed by a list ("Ejemplos:\n- a\n- b").
  const firstItem = lines.findIndex((l) => /^- /.test(l));
  if (firstItem > 0 && lines.slice(firstItem).every((l) => /^- /.test(l))) {
    return (
      <>
        <p>{inline(lines.slice(0, firstItem).join(' '))}</p>
        <ul>{lines.slice(firstItem).map((l, i) => <li key={i}>{inline(l.slice(2))}</li>)}</ul>
      </>
    );
  }
  return <p>{inline(text)}</p>;
}

/**
 * Full article body. No ad unit is placed by hand: once AdSense approves the
 * site, Auto ads (switched on in the AdSense dashboard) choose the positions.
 */
export function ArticleBody({ article }: { article: Article }) {
  const es = article.lang === 'es';
  return (
    <article className="mx-auto max-w-prose2 px-4" lang={article.lang}>
      <h1 className="font-serif text-3xl font-black leading-tight sm:text-4xl">{article.title}</h1>
      <p className="mt-3 text-sm text-gold-600">
        {new Date(article.date).toLocaleDateString(es ? 'es' : 'en-GB', { year: 'numeric', month: 'long', day: 'numeric' })} ·{' '}
        {es ? `${article.minutes} min de lectura` : `${article.minutes} min read`} · {article.author}
      </p>
      <div className="ornament-rule mt-5" />

      <div className="article-body dropcap mt-6">
        {article.sections.map((s, i) => (
          <section key={i}>
            {s.h && <h2>{s.h}</h2>}
            {s.p.map((para, j) => (
              <Block key={j} text={para} />
            ))}
          </section>
        ))}
      </div>

      <div className="ornament-rule mt-8" />
      <p className="mt-4 text-xs leading-relaxed text-ink-800/60">
        {es
          ? 'Este artículo es educativo y general: no es asesoría personalizada. Verifica las reglas y cifras vigentes en fuentes oficiales de tu país y consulta a un profesional calificado antes de tomar decisiones.'
          : 'This article is educational and general in nature — not personalised advice. Verify current rules and figures with official sources, and consult a qualified professional before making decisions.'}
      </p>
    </article>
  );
}

export function RelatedArticles({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;
  return (
    <div className="mx-auto mt-12 max-w-prose2 px-4">
      <h2 className="font-serif text-xl font-bold">Keep reading</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {articles.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </div>
  );
}

export function HomeContent() {
  const latest = ARTICLES.filter((a) => !a.lang).sort((a, b) => (a.date < b.date ? 1 : -1));
  const featured = latest[0];
  const featuredCat = featured ? CATEGORIES.find((c) => c.slug === featured.category) : undefined;
  return (
    <div>
      {/* Hero — animated orbs + grid ornament + the newest piece as the splash. */}
      <section className="relative overflow-hidden border-b border-[color:var(--accent-soft)]">
        <div className="mk-grid-bg absolute inset-0" aria-hidden />
        <div className="mk-orb" style={{ width: 360, height: 360, left: -130, top: -90, background: 'var(--accent)' }} aria-hidden />
        <div className="mk-orb mk-orb-2" style={{ width: 300, height: 300, right: -70, bottom: -130, background: 'var(--accent)' }} aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[1.1fr_1fr] lg:py-20">
          <div className="mk-fade-up">
            <span className="mk-chip text-gold-600">Independent · Original · Jargon-free</span>
            <h1 className="mt-5 font-serif text-4xl font-black leading-tight sm:text-6xl">
              {SITE.heroLead} <span className="accent-text">{SITE.heroAccent}</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-800/75 sm:text-lg">{SITE.description}</p>
            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <p className="font-serif text-3xl font-black text-gold-600">{ARTICLES.length}</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-800/60">Original guides</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-black text-gold-600">{CATEGORIES.length}</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-800/60">Topic desks</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-black text-gold-600">100%</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-800/60">Reader-first, no hype</p>
              </div>
            </div>
          </div>
          {featured && (
            <div className="relative self-center">
              <div className="mk-ring" style={{ width: 340, height: 340, right: -40, top: -40 }} aria-hidden />
              <Link href={`/articles/${featured.slug}`} className="premium-card mk-fade-up mk-d2 relative block p-7">
                <span className="mk-chip text-gold-600">★ Featured · {featuredCat?.name}</span>
                <h2 className="mt-4 font-serif text-2xl font-black leading-snug">{featured.title}</h2>
                <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-ink-800/70">{featured.excerpt}</p>
                <p className="mt-4 text-sm font-bold text-gold-600">Read the full story →</p>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Topic desks */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-2xl font-bold">Explore by topic</h2>
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">{CATEGORIES.length} desks</span>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {CATEGORIES.map((c, i) => (
            <Link key={c.slug} href={`/category/${c.slug}`} className={`premium-card mk-lift mk-fade-up mk-d${Math.min(i + 1, 6)} p-5`}>
              <span className="mk-icon-bubble" aria-hidden>{c.icon}</span>
              <p className="mt-3 font-serif text-base font-bold">{c.name}</p>
              <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink-800/60">{c.tagline}</p>
              <p className="mt-2 text-[11px] font-semibold text-gold-600">{ARTICLES.filter((a) => a.category === c.slug).length} guides →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-2xl font-bold">Latest guides</h2>
          <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-gold-600">
            <span className="mk-live-dot" /> Updated often
          </span>
        </div>
        <div className="ornament-rule mt-3 max-w-xs" />
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>
    </div>
  );
}

export function CategoryContent({ cat, articles }: { cat: (typeof CATEGORIES)[number]; articles: Article[] }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-3xl">{cat.icon}</p>
      <h1 className="mt-2 font-serif text-3xl font-black">{cat.name}</h1>
      <p className="mt-2 max-w-xl text-ink-800/70">{cat.tagline}</p>
      <div className="ornament-rule mt-5 max-w-sm" />
      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </div>
  );
}
