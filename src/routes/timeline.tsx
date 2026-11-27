import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { pageHead } from "@/lib/seo";
import { articles } from "@/data/heritage";
import { eras, timeline } from "@/data/timeline";

export const Route = createFileRoute("/timeline")({
  head: () =>
    pageHead(
      "Timeline",
      "Explore Gurung history by date, from ancestral journeys to the worldwide Tamu community today.",
    ),
  component: Timeline,
});

function Timeline() {
  const [era, setEra] = useState<string>("All");
  const [open, setOpen] = useState<number | null>(null);
  const list = [...timeline]
    .sort((a, b) => a.sort - b.sort)
    .filter((e) => era === "All" || e.era === era);
  return (
    <main>
      <section className="page-heading">
        <span className="eyebrow">EXPLORE BY DATE</span>
        <h1>Timeline of Gurung history</h1>
        <p>Pick a period, tap any moment to learn more, and open the stories behind it.</p>
      </section>
      <section className="tl-wrap">
        <div className="category-tabs" aria-label="Periods">
          {["All", ...eras].map((e) => (
            <button
              key={e}
              className={`tl-filter ${era === e ? "selected" : ""}`}
              onClick={() => {
                setEra(e);
                setOpen(null);
              }}
            >
              {e === "All" ? "All periods" : e}
            </button>
          ))}
        </div>
        <ol className="tl-list">
          {list.map((e) => {
            const isOpen = open === e.sort;
            const related = e.slugs.flatMap((s) => articles.filter((a) => a.slug === s));
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
                    <small>{e.era}</small>
                  </span>
                </button>
                {isOpen && (
                  <div className="tl-body">
                    <p>{e.text}</p>
                    {related.length > 0 && (
                      <>
                        <span className="eyebrow">RELATED STORIES</span>
                        <ul>
                          {related.map((a) => (
                            <li key={a.slug}>
                              <Link to="/library/$slug" params={{ slug: a.slug }}>
                                {a.title} <ArrowRight size={14} />
                              </Link>
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
