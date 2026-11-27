import { articles } from "@/data/heritage";
import { InlineArticle } from "@/components/museum/InlineArticle";
import { ReadingLayout } from "@/components/museum/ReadingLayout";
import { getArticle } from "@/i18n/content";
import { useLocale, useUi } from "@/i18n";

const chapterSlugs: string[][] = [
  ["gurung-and-tamu", "clans", "population"],
  ["ancient-origins", "migrations", "khola-sothar"],
  ["ghandruk", "manang"],
  ["tamu-lhosar", "traditional-dress", "ritual-specialists", "pae-arghun", "ghatu", "rodhi"],
  ["tamu-kyi"],
  ["gurkha-history", "united-kingdom"],
];

export function Journey() {
  const locale = useLocale();
  const ui = useUi();
  const chapters = ui.journey.chapters.map((chapter, index) => ({
    ...chapter,
    slugs: chapterSlugs[index] ?? [],
  }));

  return (
    <main className="journey-read">
      <section className="page-heading">
        <span className="eyebrow">{ui.journey.eyebrow}</span>
        <h1>{ui.journey.title}</h1>
        <p>{ui.journey.intro}</p>
      </section>
      <ReadingLayout
        toc={chapters.map((c, i) => ({
          id: `chapter-${i + 1}`,
          title: c.title,
          items: c.slugs.flatMap((slug) => {
            const a = articles.find((x) => x.slug === slug);
            if (!a) return [];
            const localized = getArticle(a, locale);
            return [
              { id: `read-${slug}`, title: localized.title.split(":")[0] ?? localized.title },
            ];
          }),
        }))}
      >
        {chapters.map((c, i) => (
          <section key={c.title} id={`chapter-${i + 1}`} className="ency-chapter">
            <h2>
              <span>{i + 1}</span>
              {c.title}
            </h2>
            <p className="ency-lead">{c.intro}</p>
            {c.slugs.map((slug) => {
              const a = articles.find((x) => x.slug === slug);
              return a ? <InlineArticle key={slug} article={getArticle(a, locale)} /> : null;
            })}
          </section>
        ))}
      </ReadingLayout>
    </main>
  );
}
