import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getArticles } from "@/i18n/content";
import { useLocale, useUi } from "@/i18n";
import { ArticleCard } from "./ArticleCard";

export function Library({ variant = "library" }: { variant?: "library" | "archive" }) {
  const ui = useUi();
  const locale = useLocale();
  const list = getArticles(locale);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [filters, setFilters] = useState(false);
  const [region, setRegion] = useState("All");
  const [evidence, setEvidence] = useState("All");
  const [sort, setSort] = useState("collection");

  const categories = Object.keys(ui.labels.categories);
  const needle = query.trim().toLocaleLowerCase(locale);
  const found = list.filter((a) => {
    if (category !== "All" && a.rawCategory !== category) return false;
    if (region !== "All" && a.region !== region) return false;
    if (evidence !== "All" && a.rawEvidence !== evidence) return false;
    if (!needle) return true;
    return [a.title, a.summary, a.region, a.period].some((field) =>
      field.toLocaleLowerCase(locale).includes(needle),
    );
  });
  const results =
    sort === "title" ? [...found].sort((a, b) => a.title.localeCompare(b.title, locale)) : found;

  const title = variant === "archive" ? ui.library.archiveTitle : ui.library.title;
  const intro = variant === "archive" ? ui.library.archiveIntro : ui.library.intro;

  return (
    <main className="library-page">
      <section className="page-heading">
        <span className="eyebrow">{ui.library.eyebrow}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
      </section>
      <section className="library-content">
        <div className="search-row">
          <div className="search-input">
            <Search size={20} />
            <input
              aria-label={ui.library.searchLabel}
              placeholder={ui.library.searchPlaceholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <Button
                size="icon"
                variant="ghost"
                aria-label={ui.library.clearSearch}
                onClick={() => setQuery("")}
              >
                <X size={17} />
              </Button>
            )}
          </div>
          <Button variant="outline" onClick={() => setFilters(!filters)}>
            <SlidersHorizontal size={17} /> {ui.library.filters}
          </Button>
        </div>
        <div className="category-tabs" aria-label={ui.library.categoriesLabel}>
          {["All", ...categories].map((c) => (
            <Button
              key={c}
              variant="ghost"
              className={category === c ? "selected" : ""}
              onClick={() => setCategory(c)}
            >
              {c === "All"
                ? ui.library.allSubjects
                : ui.labels.categories[c as keyof typeof ui.labels.categories]}
            </Button>
          ))}
        </div>
        {filters && (
          <div className="filter-panel">
            <label>
              {ui.library.region}
              <select value={region} onChange={(e) => setRegion(e.target.value)}>
                <option value="All">{ui.library.all}</option>
                {[...new Set(list.map((a) => a.region))].map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </label>
            <label>
              {ui.library.evidence}
              <select value={evidence} onChange={(e) => setEvidence(e.target.value)}>
                <option value="All">{ui.library.all}</option>
                {[...new Set(list.map((a) => a.rawEvidence))].map((r) => (
                  <option key={r} value={r}>
                    {ui.labels.evidence[r]}
                  </option>
                ))}
              </select>
            </label>
            <Button
              variant="ghost"
              onClick={() => {
                setRegion("All");
                setEvidence("All");
                setQuery("");
                setCategory("All");
              }}
            >
              {ui.library.reset}
            </Button>
          </div>
        )}
        <div className="results-heading">
          <span>
            {results.length} {results.length === 1 ? ui.library.resultOne : ui.library.resultMany}
            <small> {ui.library.sourced}</small>
          </span>
          <label>
            {ui.library.sortBy}{" "}
            <select
              aria-label={ui.library.sortLabel}
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="collection">{ui.library.collectionOrder}</option>
              <option value="title">{ui.library.titleAZ}</option>
            </select>
          </label>
        </div>
        {results.length ? (
          <div className="article-grid">
            {results.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <Search size={32} />
            <h2>{ui.library.emptyTitle}</h2>
            <p>{ui.library.emptyText}</p>
            <Button
              variant="outline"
              onClick={() => {
                setQuery("");
                setCategory("All");
                setRegion("All");
                setEvidence("All");
              }}
            >
              {ui.library.clearAll}
            </Button>
          </div>
        )}
        <p className="research-note">{ui.library.note}</p>
      </section>
    </main>
  );
}
