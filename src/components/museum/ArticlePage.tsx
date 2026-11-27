import { ArrowLeft, ArrowUpRight, BookOpen, Check, Link2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { sources } from "@/data/heritage";
import { getMedia } from "@/data/media";
import { getArticleBySlug, getArticles } from "@/i18n/content";
import { useLocale, useUi } from "@/i18n";
import { ArticleCard } from "./ArticleCard";
import { AppLink } from "./AppLink";

function ArrowRightIcon() {
  return <ArrowUpRight size={16} />;
}

export function ArticlePage({ slug }: { slug: string }) {
  const locale = useLocale();
  const ui = useUi();
  const a = getArticleBySlug(slug, locale);
  const [copied, setCopied] = useState(false);

  if (!a) return null;

  const photo = a.image ? getMedia(a.image) : undefined;
  const continued = getArticles(locale)
    .filter(
      (x) =>
        x.slug !== a.slug &&
        (x.rawCategory === a.rawCategory || x.sourceIds.some((id) => a.sourceIds.includes(id))),
    )
    .slice(0, 3);

  return (
    <main className="article-page">
      <div className="article-heading">
        <AppLink to="/library" className="text-link">
          <ArrowLeft size={15} /> {ui.article.back}
        </AppLink>
        <span className="eyebrow">
          {a.category} · {a.region}
        </span>
        <h1>{a.title}</h1>
        <p>{a.summary}</p>
        <div className="article-info">
          <span>
            <BookOpen size={15} /> {ui.article.introduction}
          </span>
          <span>{a.evidence}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(window.location.href);
                setCopied(true);
              } catch {
                setCopied(false);
              }
            }}
          >
            {copied ? <Check size={14} /> : <Link2 size={14} />}{" "}
            {copied ? ui.article.copied : ui.article.share}
          </Button>
        </div>
      </div>
      {photo && (
        <figure className="article-cover">
          <img src={photo.url} alt={photo.title} width={1800} height={1100} />
          <figcaption>
            {a.imageNote ?? photo.title} · {photo.creator} ·{" "}
            <a href={photo.licenseUrl} target="_blank" rel="noreferrer">
              {photo.license}
            </a>{" "}
            ·{" "}
            <a
              href={`https://commons.wikimedia.org/wiki/File:${photo.file}`}
              target="_blank"
              rel="noreferrer"
            >
              {ui.sources.commons}
            </a>
          </figcaption>
        </figure>
      )}
      <div className="article-layout">
        <aside>
          <span className="eyebrow">{ui.article.inThis}</span>
          {a.sections.map((s, i) => (
            <a key={s.title} href={`#section-${i}`}>
              {String(i + 1).padStart(2, "0")} <span>{s.title}</span>
            </a>
          ))}
          <a href="#references">{ui.article.references}</a>
          <div className="evidence-note">
            <strong>{ui.article.transparency}</strong>
            <p>{a.evidence}</p>
            <p>
              {ui.article.lastReviewed} {a.reviewed}
            </p>
            <p>{ui.article.communityReview}</p>
          </div>
        </aside>
        <article className="article-prose">
          {!a.bodyTranslated && (
            <p className="translation-note">
              {ui.article.englishOnly} <a href={`/library/${a.slug}`}>{ui.article.seeEnglish}</a>
            </p>
          )}
          {a.sections.map((s, i) => (
            <section id={`section-${i}`} key={s.title}>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
            </section>
          ))}
          <section id="references" className="references">
            <span className="eyebrow">{ui.article.evidenceEyebrow}</span>
            <h2>{ui.article.sourcesTitle}</h2>
            {a.sourceIds.map((id, i) => {
              const source = sources.find((s) => s.id === id);
              return source ? (
                <a href={source.url} target="_blank" rel="noreferrer" key={id}>
                  <span>{i + 1}</span>
                  <div>
                    <strong>
                      {source.author} · {source.year}
                    </strong>
                    <p>{source.title}</p>
                    <small>
                      {source.kind} ·{" "}
                      {source.id === "moisala" ? "pp. 152–176" : ui.article.citationMissing}
                    </small>
                  </div>
                  <ArrowUpRight size={17} />
                </a>
              ) : null;
            })}
          </section>
          <div className="correction-note">
            <h3>{ui.article.correctionTitle}</h3>
            <p>{ui.article.correctionText}</p>
            <AppLink to="/contribute" className="text-link">
              {ui.article.correctionCta} <ArrowRightIcon />
            </AppLink>
          </div>
        </article>
      </div>
      <section className="reading-section">
        <div className="section-heading">
          <h2>{ui.article.continue}</h2>
        </div>
        <div className="article-grid">
          {continued.map((x) => (
            <ArticleCard article={x} key={x.slug} />
          ))}
        </div>
      </section>
    </main>
  );
}
