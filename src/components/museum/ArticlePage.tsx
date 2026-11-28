import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock,
  Link2,
  Search,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { getArticleBySlug, getArticles } from "@/i18n/content";
import { useLocale, useUi } from "@/i18n";
import { sources } from "@/data/heritage";
import { getMedia } from "@/data/media";
import { bookParts, bookPlace, bookSlugs } from "@/data/book";
import { localizeMedia } from "@/i18n/media-ne";
import { ArticleCard } from "./ArticleCard";
import { AppLink } from "./AppLink";

const BOLD_ITALIC = /(\*\*[^*]+\*\*|_[^_]+_)/g;

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Marks every occurrence of the reader's search inside a run of prose. */
function Highlighted({ text, query }: { text: string; query: string }) {
  if (!query) return <>{text}</>;
  const parts = text.split(new RegExp(`(${escapeRegExp(query)})`, "gi"));
  return (
    <>
      {parts.map((part, i) =>
        part.toLocaleLowerCase() === query.toLocaleLowerCase() ? (
          <mark key={i}>{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

/** Renders the light inline Markdown used in the library: **bold** and _italic_. */
function inline(text: string, keyPrefix: string, query: string) {
  return text
    .split(BOLD_ITALIC)
    .filter(Boolean)
    .map((part, i) => {
      const key = `${keyPrefix}-${i}`;
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={key}>
            <Highlighted text={part.slice(2, -2)} query={query} />
          </strong>
        );
      }
      if (part.startsWith("_") && part.endsWith("_") && part.length > 2) {
        return (
          <em key={key}>
            <Highlighted text={part.slice(1, -1)} query={query} />
          </em>
        );
      }
      return (
        <span key={key}>
          <Highlighted text={part} query={query} />
        </span>
      );
    });
}

/** One section body, keeping its blank-line paragraph breaks. */
function SectionText({
  text,
  sectionKey,
  query,
}: {
  text: string;
  sectionKey: string;
  query: string;
}) {
  const blocks = text
    .split(/\n\s*\n/)
    .map((block) => block.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean);
  return (
    <>
      {blocks.map((block, i) => (
        <p key={`${sectionKey}-${i}`}>{inline(block, `${sectionKey}-${i}`, query)}</p>
      ))}
    </>
  );
}

function plainText(text: string) {
  return text.replace(/\*\*|_/g, "");
}

/** A short passage around the first match, so a result shows why it matched. */
function snippetFor(text: string, query: string) {
  const clean = plainText(text);
  const at = clean.toLocaleLowerCase().indexOf(query.toLocaleLowerCase());
  if (at < 0) return `${clean.slice(0, 120).trim()}…`;
  const start = Math.max(0, at - 55);
  const end = Math.min(clean.length, at + query.length + 95);
  return `${start > 0 ? "…" : ""}${clean.slice(start, end).trim()}…`;
}

function wordCount(sections: { text: string }[]) {
  return sections.reduce((total, s) => total + s.text.split(/\s+/).filter(Boolean).length, 0);
}

export function ArticlePage({ slug }: { slug: string }) {
  const locale = useLocale();
  const ui = useUi();
  const a = getArticleBySlug(slug, locale);
  const [copied, setCopied] = useState(false);
  const [query, setQuery] = useState("");
  const [progress, setProgress] = useState(0);
  const [pickerOpen, setPickerOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);
  const pickerButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setQuery("");
    setPickerOpen(false);
  }, [slug]);

  // The chapter list closes the way a menu should: outside click, or Escape back to its button.
  useEffect(() => {
    if (!pickerOpen) return;
    const closeOnPointerDown = (event: PointerEvent) => {
      if (!pickerRef.current?.contains(event.target as Node)) setPickerOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setPickerOpen(false);
      pickerButtonRef.current?.focus();
    };
    document.addEventListener("pointerdown", closeOnPointerDown);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnPointerDown);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [pickerOpen]);

  useEffect(() => {
    const onScroll = () => {
      const travel = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(travel > 0 ? Math.min(100, Math.max(0, (window.scrollY / travel) * 100)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug]);

  const needle = query.trim();
  const hits = useMemo(() => {
    if (!a || !needle) return [];
    const lower = needle.toLocaleLowerCase();
    return a.sections.flatMap((s, index) =>
      s.title.toLocaleLowerCase().includes(lower) ||
      plainText(s.text).toLocaleLowerCase().includes(lower)
        ? [{ index, title: s.title, snippet: snippetFor(s.text, needle) }]
        : [],
    );
  }, [a, needle]);

  if (!a) return null;

  const item = a.image ? getMedia(a.image) : undefined;
  const photo = item ? localizeMedia(item, locale) : undefined;
  const position = bookSlugs.indexOf(a.slug);
  const place = bookPlace(a.slug);
  const previousSlug = position > 0 ? bookSlugs[position - 1] : undefined;
  const nextSlug = position >= 0 ? bookSlugs[position + 1] : undefined;
  const previous = previousSlug ? getArticleBySlug(previousSlug, locale) : undefined;
  const next = nextSlug ? getArticleBySlug(nextSlug, locale) : undefined;
  const minutes = Math.max(2, Math.round(wordCount(a.sections) / 220));
  const continued = getArticles(locale)
    .filter(
      (x) =>
        x.slug !== a.slug &&
        (x.rawCategory === a.rawCategory || x.sourceIds.some((id) => a.sourceIds.includes(id))),
    )
    .slice(0, 3);

  return (
    <main className="article-page">
      <div className="reading-progress" aria-hidden="true" style={{ width: `${progress}%` }} />
      <article className="reading">
        <header className="reading-heading">
          <div className="reading-topline">
            <AppLink to="/journey" className="text-link">
              <ArrowLeft size={15} /> {ui.book.backToBook}
            </AppLink>
            {previous && (
              <AppLink to="/library/$slug" params={{ slug: previous.slug }} className="text-link">
                {ui.article.previous}: {previous.title}
              </AppLink>
            )}
          </div>
          {place && (
            <AppLink to="/journey" className="part-label">
              {ui.book.partWord} {place.partIndex + 1} · {ui.book.parts[place.part.key].title}
            </AppLink>
          )}
          <span className="eyebrow">
            {a.category} · {a.region}
          </span>
          <h1>{a.title}</h1>
          <p className="reading-lead">{a.summary}</p>
          <div className="reading-meta">
            {place && (
              <div className="chapter-picker" ref={pickerRef}>
                <button
                  ref={pickerButtonRef}
                  type="button"
                  className="chapter-number"
                  aria-expanded={pickerOpen}
                  aria-haspopup="true"
                  onClick={() => setPickerOpen((open) => !open)}
                >
                  {ui.article.chapter} {String(place.chapter).padStart(2, "0")} / {place.total}
                  <ChevronDown size={13} aria-hidden="true" />
                </button>
                {pickerOpen && (
                  <nav className="chapter-picker-menu" aria-label={ui.article.chapterPicker}>
                    {bookParts.map((part, partIndex) => (
                      <div key={part.key} className="chapter-picker-group">
                        <span className="eyebrow">
                          {ui.book.partWord} {partIndex + 1} · {ui.book.parts[part.key].title}
                        </span>
                        <ol>
                          {part.slugs.map((chapterSlug) => {
                            const chapter = getArticleBySlug(chapterSlug, locale);
                            if (!chapter) return null;
                            return (
                              <li key={chapterSlug}>
                                <AppLink
                                  to="/library/$slug"
                                  params={{ slug: chapterSlug }}
                                  aria-current={chapterSlug === a.slug ? "page" : undefined}
                                  onClick={() => setPickerOpen(false)}
                                >
                                  <span className="chapter-picker-number">
                                    {String(bookSlugs.indexOf(chapterSlug) + 1).padStart(2, "0")}
                                  </span>
                                  {chapter.title}
                                </AppLink>
                              </li>
                            );
                          })}
                        </ol>
                      </div>
                    ))}
                  </nav>
                )}
              </div>
            )}
            <span>
              <Clock size={15} /> {minutes} {ui.article.minuteRead}
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
        </header>

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

        <div className="reading-tools">
          <div className="chapter-search">
            <Search size={17} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={ui.article.searchPlaceholder}
              aria-label={ui.article.searchInChapter}
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label={ui.library.clearSearch}
              >
                <X size={16} />
              </button>
            )}
          </div>
          <nav className="chapter-map" aria-label={ui.article.contents}>
            <span className="eyebrow">{ui.article.inThis}</span>
            <ol>
              {a.sections.map((s, i) => (
                <li key={s.title}>
                  <a href={`#section-${i}`}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          {needle && (
            <div className="chapter-search-results" role="status">
              <span className="eyebrow">
                {hits.length} {hits.length === 1 ? ui.article.matchOne : ui.article.matchMany}
              </span>
              {hits.length ? (
                hits.map((hit) => (
                  <a key={hit.index} href={`#section-${hit.index}`}>
                    <strong>{hit.title}</strong>
                    <span>{hit.snippet}</span>
                  </a>
                ))
              ) : (
                <p>{ui.article.searchEmpty}</p>
              )}
            </div>
          )}
        </div>

        <div className="reading-body">
          {!a.bodyTranslated && (
            <p className="translation-note">
              {ui.article.englishOnly} <a href={`/library/${a.slug}`}>{ui.article.seeEnglish}</a>
            </p>
          )}
          {a.sections.map((s, i) => (
            <section id={`section-${i}`} key={s.title} className="reading-chapter">
              <span className="chapter-index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2>{s.title}</h2>
              <SectionText text={s.text} sectionKey={`${i}-${s.title}`} query={needle} />
            </section>
          ))}

          <section id="references" className="sources-block">
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

          <div className="article-colophon">
            <div>
              <strong>{ui.article.transparency}</strong>
              <p>{a.evidence}</p>
            </div>
            <div>
              <strong>{ui.article.lastReviewed}</strong>
              <p>{a.reviewed}</p>
            </div>
            <div>
              <strong>{ui.article.communityReview}</strong>
              <p>{a.period}</p>
            </div>
          </div>

          <div className="correction-note">
            <h3>{ui.article.correctionTitle}</h3>
            <p>{ui.article.correctionText}</p>
            <AppLink to="/contribute" className="text-link">
              {ui.article.correctionCta} <ArrowUpRight size={16} />
            </AppLink>
          </div>
        </div>

        {place && !next && (
          <div className="next-chapter end-of-book">
            <span className="eyebrow">{ui.article.endEyebrow}</span>
            <h2>{ui.article.endTitle}</h2>
            <p>{ui.article.endText}</p>
            <div className="end-of-book-links">
              <AppLink to="/journey" className="text-link">
                {ui.article.backToContents} <ArrowUpRight size={16} />
              </AppLink>
              <AppLink to="/library" className="text-link">
                {ui.article.browseLibrary} <ArrowUpRight size={16} />
              </AppLink>
            </div>
          </div>
        )}

        {next && (
          <AppLink to="/library/$slug" params={{ slug: next.slug }} className="next-chapter">
            <span className="eyebrow">{ui.article.nextEyebrow}</span>
            <small>
              {ui.article.chapter} {String(position + 2).padStart(2, "0")}
            </small>
            <h2>{next.title}</h2>
            <p>{next.summary}</p>
            <span className="next-chapter-cta">
              {ui.article.readNext} <ArrowRight size={17} />
            </span>
          </AppLink>
        )}
      </article>

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
