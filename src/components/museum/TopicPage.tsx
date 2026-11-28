import { ArrowRight, ArrowUpRight, BookOpen } from "lucide-react";
import { articles } from "@/data/heritage";
import { getMedia } from "@/data/media";
import { bookSlugs } from "@/data/book";
import type { TopicKey } from "@/data/topics";
import { getArticle, getTopic } from "@/i18n/content";
import { useLocale, useUi } from "@/i18n";
import { localizeMedia } from "@/i18n/media-ne";
import { AppLink } from "./AppLink";

/**
 * A collection page orients and points into the book: what the collection is,
 * its themes, and its chapters in reading order. The prose itself is only ever
 * read in the chapter reader at `/library/<slug>`.
 */
export function TopicPage({ topicKey }: { topicKey: TopicKey }) {
  const locale = useLocale();
  const ui = useUi();
  const topic = getTopic(locale, topicKey);
  const item = topic.image ? getMedia(topic.image) : undefined;
  const photo = item ? localizeMedia(item, locale) : undefined;
  const list = articles
    .filter((a) => topic.categories.includes(a.category))
    .map((a) => getArticle(a, locale));

  /** Book chapters first, in reading order; anything else keeps library order. */
  const chapters = [...list].sort((a, b) => {
    const left = bookSlugs.indexOf(a.slug);
    const right = bookSlugs.indexOf(b.slug);
    if (left < 0 && right < 0) return 0;
    if (left < 0) return 1;
    if (right < 0) return -1;
    return left - right;
  });

  /** The book's chapters and the library's own articles are listed separately. */
  const inBook = chapters.filter((a) => bookSlugs.includes(a.slug));
  const offBook = chapters.filter((a) => !bookSlugs.includes(a.slug));

  return (
    <main>
      <section className={`topic-hero ${photo ? "" : "topic-plain"}`}>
        {photo && (
          <>
            <img src={photo.url} alt={photo.title} width={2000} height={1200} />
            <div className="hero-shade" />
          </>
        )}
        <div className="topic-hero-inner">
          <span className="eyebrow">{topic.eyebrow}</span>
          <h1>{topic.title}</h1>
          <p>{topic.intro}</p>
        </div>
      </section>
      <section className="topic-body">
        <h2>{topic.lead}</h2>
        <div>
          {topic.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <h3 className="theme-list-title">{ui.topic.themesTitle}</h3>
          <div className="theme-list">
            {topic.themes.map((t) =>
              t.slug ? (
                <AppLink
                  key={t.title}
                  to="/library/$slug"
                  params={{ slug: t.slug }}
                  className="theme-card theme-link"
                >
                  <h3>
                    {t.title}
                    <ArrowUpRight size={18} />
                  </h3>
                  <p>{t.text}</p>
                  <span className="theme-cta">
                    {bookSlugs.includes(t.slug) ? ui.topic.readChapter : ui.topic.readArticle}{" "}
                    <ArrowRight size={15} />
                  </span>
                </AppLink>
              ) : (
                <div key={t.title} className="theme-card">
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                  <span className="theme-note">{ui.topic.inCollection}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="hub-chapters">
        <div className="section-heading">
          <h2>{ui.topic.chaptersTitle}</h2>
          <AppLink to="/journey" className="text-link">
            {ui.book.backToBook} <ArrowUpRight size={16} />
          </AppLink>
        </div>
        {inBook.length ? (
          <>
            <h3 className="hub-group-title">{ui.topic.bookChaptersTitle}</h3>
            <ol className="book-chapters">
              {inBook.map((article) => (
                <li key={article.slug}>
                  <AppLink to="/library/$slug" params={{ slug: article.slug }}>
                    <span className="book-chapter-number">
                      {String(bookSlugs.indexOf(article.slug) + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <strong>{article.title}</strong>
                      <small>{article.summary}</small>
                    </div>
                    <ArrowUpRight size={18} />
                  </AppLink>
                </li>
              ))}
            </ol>
          </>
        ) : null}
        {offBook.length ? (
          <>
            <h3 className="hub-group-title">{ui.topic.moreInLibrary}</h3>
            <ol className="book-chapters">
              {offBook.map((article) => (
                <li key={article.slug}>
                  <AppLink to="/library/$slug" params={{ slug: article.slug }}>
                    <span className="book-chapter-number chapter-mark" aria-hidden="true">
                      <BookOpen size={15} strokeWidth={1.6} />
                    </span>
                    <div>
                      <strong>{article.title}</strong>
                      <small>{article.summary}</small>
                    </div>
                    <ArrowUpRight size={18} />
                  </AppLink>
                </li>
              ))}
            </ol>
          </>
        ) : null}
        {!chapters.length && <p className="research-note">{ui.common.preparing}</p>}
        <p className="book-note">{ui.topic.bookNote}</p>
      </section>
    </main>
  );
}
