import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bookParts, bookSlugs } from "@/data/book";
import { getArticleBySlug } from "@/i18n/content";
import { useLocale, useUi } from "@/i18n";
import { AppLink } from "./AppLink";

/**
 * The cover and contents of the book. The chapters themselves live at
 * `/library/<slug>`, so this page never reprints prose; it only shows the
 * order and hands the reader to the first chapter.
 */
export function Journey() {
  const locale = useLocale();
  const ui = useUi();

  const bySlug = new Map(
    bookSlugs.flatMap((slug) => {
      const article = getArticleBySlug(slug, locale);
      return article ? [[slug, article] as const] : [];
    }),
  );
  const first = bySlug.get(bookSlugs[0] ?? "");

  return (
    <main className="book-cover">
      <section className="page-heading book-heading">
        <span className="eyebrow">{ui.book.eyebrow}</span>
        <h1>{ui.book.title}</h1>
        <p>{ui.book.intro}</p>
        <div className="book-actions">
          {first && (
            <Button asChild size="lg">
              <AppLink to="/library/$slug" params={{ slug: first.slug }}>
                {ui.book.startCta} <ArrowRight />
              </AppLink>
            </Button>
          )}
          <AppLink to="/library" className="text-link">
            {ui.book.browseNote} <ArrowUpRight size={16} />
          </AppLink>
        </div>
      </section>

      <section className="book-contents">
        <div className="section-heading">
          <h2>{ui.book.contents}</h2>
          <span>
            {bySlug.size} {ui.book.chaptersWord}
          </span>
        </div>
        {bookParts.map((part, partIndex) => {
          const chapters = part.slugs.flatMap((slug) => {
            const article = bySlug.get(slug);
            return article ? [article] : [];
          });
          if (!chapters.length) return null;
          const text = ui.book.parts[part.key];
          return (
            <section key={part.key} className="book-part" id={`part-${partIndex + 1}`}>
              <header className="book-part-head">
                <span className="eyebrow">
                  {ui.book.partWord} {partIndex + 1}
                </span>
                <h3>{text.title}</h3>
                <p>{text.intro}</p>
              </header>
              <ol className="book-chapters">
                {chapters.map((article) => (
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
            </section>
          );
        })}
        <p className="book-note">{ui.book.partNote}</p>
      </section>
    </main>
  );
}
