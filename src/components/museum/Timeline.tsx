import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { articles } from "@/data/heritage";
import { eras } from "@/data/timeline";
import { getArticle, getTimeline } from "@/i18n/content";
import { eraLabel, useLocale, useUi } from "@/i18n";
import { AppLink } from "./AppLink";

export function Timeline() {
  const locale = useLocale();
  const ui = useUi();
  const [era, setEra] = useState<string>("All");
  const [open, setOpen] = useState<number | null>(null);
  const list = [...getTimeline(locale)]
    .sort((a, b) => a.sort - b.sort)
    .filter((e) => era === "All" || e.era === era);

  return (
    <main>
      <section className="page-heading">
        <span className="eyebrow">{ui.timeline.eyebrow}</span>
        <h1>{ui.timeline.title}</h1>
        <p>{ui.timeline.intro}</p>
      </section>
      <section className="tl-wrap">
        <div className="category-tabs" aria-label={ui.timeline.periodsLabel}>
          {["All", ...eras].map((e) => (
            <button
              key={e}
              className={`tl-filter ${era === e ? "selected" : ""}`}
              onClick={() => {
                setEra(e);
                setOpen(null);
              }}
            >
              {e === "All" ? ui.timeline.allPeriods : eraLabel(ui, e)}
            </button>
          ))}
        </div>
        <ol className="tl-list">
          {list.map((e) => {
            const isOpen = open === e.sort;
            const related = e.slugs.flatMap((s) => {
              const article = articles.find((a) => a.slug === s);
              return article ? [getArticle(article, locale)] : [];
            });
            return (
              <li key={e.sort} className={`tl-item ${isOpen ? "open" : ""}`}>
                <button
                  className="tl-head"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : e.sort)}
                >
                  <span className="tl-year">{e.year}</span>
                  <span className="tl-title">
                    {e.title}
                    <small>{eraLabel(ui, e.era)}</small>
                  </span>
                </button>
                {isOpen && (
                  <div className="tl-body">
                    <p>{e.text}</p>
                    {related.length > 0 && (
                      <>
                        <span className="eyebrow">{ui.timeline.related}</span>
                        <ul>
                          {related.map((a) => (
                            <li key={a.slug}>
                              <AppLink to="/library/$slug" params={{ slug: a.slug }}>
                                {a.title} <ArrowRight size={14} />
                              </AppLink>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </section>
    </main>
  );
}
