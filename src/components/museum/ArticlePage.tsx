import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, BookOpen, Check, Link2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { sources, articles, type Article } from "@/data/heritage";
import { getMedia } from "@/data/media";
import { ArticleCard } from "./ArticleCard";
export function ArticlePage({ article: a }: { article: Article }) {
  const photo = a.image ? getMedia(a.image) : undefined;
  const [copied, setCopied] = useState(false);
  return (
    <main className="article-page">
      <div className="article-heading">
        <Link to="/library" className="text-link">
          <ArrowLeft size={15} /> Knowledge library
        </Link>
        <span className="eyebrow">
          {a.category} · {a.region}
        </span>
        <h1>{a.title}</h1>
        <p>{a.summary}</p>
        <div className="article-info">
          <span>
            <BookOpen size={15} /> Research introduction
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
            {copied ? <Check size={14} /> : <Link2 size={14} />} {copied ? "Link copied" : "Share"}
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
              Original image
            </a>
          </figcaption>
        </figure>
      )}
      <div className="article-layout">
        <aside>
          <span className="eyebrow">IN THIS ARTICLE</span>
          {a.sections.map((s, i) => (
            <a key={s.title} href={`#section-${i}`}>
              {String(i + 1).padStart(2, "0")} <span>{s.title}</span>
            </a>
          ))}
          <a href="#references">References</a>
          <div className="evidence-note">
            <strong>Research transparency</strong>
            <p>{a.evidence}</p>
            <p>Last reviewed: {a.reviewed}</p>
            <p>{a.communityReview}</p>
          </div>
        </aside>
        <article className="article-prose">
          {a.sections.map((s, i) => (
            <section id={`section-${i}`} key={s.title}>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
            </section>
          ))}
          <section id="references" className="references">
            <span className="eyebrow">FOLLOW THE EVIDENCE</span>
            <h2>Sources & further reading</h2>
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
                      {source.id === "moisala"
                        ? "pp. 152–176"
                        : "Page-level claim citations not yet supplied"}
                    </small>
                  </div>
                  <ArrowUpRight size={17} />
                </a>
              ) : null;
            })}
          </section>
          <div className="correction-note">
            <h3>Heritage grows through conversation.</h3>
            <p>Know a different local account, or spotted something that needs correcting?</p>
            <Link to="/contribute" className="text-link">
              Share your knowledge <ArrowRightIcon />
            </Link>
          </div>
        </article>
      </div>
      <section className="reading-section">
        <div className="section-heading">
          <h2>Continue exploring</h2>
        </div>
        <div className="article-grid">
          {articles
            .filter(
              (x) =>
                x.slug !== a.slug &&
                (x.category === a.category || x.sourceIds.some((id) => a.sourceIds.includes(id))),
            )
            .slice(0, 3)
            .map((x) => (
              <ArticleCard article={x} key={x.slug} />
            ))}
        </div>
      </section>
    </main>
  );
}
function ArrowRightIcon() {
  return <ArrowUpRight size={16} />;
}
