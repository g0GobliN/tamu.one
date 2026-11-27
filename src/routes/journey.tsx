import { createFileRoute } from '@tanstack/react-router';
import { pageHead } from '@/lib/seo';
import { articles } from '@/data/heritage';
import { InlineArticle } from '@/components/museum/InlineArticle';
import { ReadingLayout } from '@/components/museum/ReadingLayout';

export const Route = createFileRoute('/journey')({
  head: () => pageHead('The Journey', 'A guided path through the Gurung story: names, origins, homeland, culture, language and diaspora — with links to each full article.'),
  component: Journey,
});

const chapters: { title: string; intro: string; slugs: string[] }[] = [
  {
    title: 'Who are the Tamu?',
    intro: 'Begin with our names, our clans and our numbers — who the Gurung people are, in Nepal and around the world.',
    slugs: ['gurung-and-tamu', 'clans', 'population'],
  },
  {
    title: 'Where we come from',
    intro: 'Origins, migrations and the ancestral places remembered in ritual and investigated by researchers.',
    slugs: ['ancient-origins', 'migrations', 'khola-sothar'],
  },
  {
    title: 'The places we call home',
    intro: 'Villages and valleys beneath Annapurna, Lamjung and Manang — the landscapes that shaped our way of life.',
    slugs: ['ghandruk', 'manang'],
  },
  {
    title: 'A living culture',
    intro: 'Festivals, dress, ritual specialists and performance — traditions practised and renewed today.',
    slugs: ['tamu-lhosar', 'traditional-dress', 'ritual-specialists', 'pae-arghun', 'ghatu', 'rodhi'],
  },
  {
    title: 'Our language',
    intro: 'Tamu Kyi — its relationships, its village voices, and the work of keeping it alive.',
    slugs: ['tamu-kyi'],
  },
  {
    title: 'Beyond the mountains',
    intro: 'Gurkha service, migration and new communities — the Tamu story carried across the world.',
    slugs: ['gurkha-history', 'united-kingdom'],
  },
];

function Journey() {
  return (
    <main className="journey-read">
      <section className="page-heading"><span className="eyebrow">A GUIDED PATH</span><h1>The Journey</h1><p>The whole Tamu story in six chapters. Read it from start to finish as one continuous story.</p></section>
      <ReadingLayout toc={chapters.map((c, i) => ({ id: `chapter-${i + 1}`, title: c.title, items: c.slugs.flatMap((slug) => { const a = articles.find((x) => x.slug === slug); return a ? [{ id: `read-${slug}`, title: a.title.split(':')[0] ?? a.title }] : []; }) }))}>
        {chapters.map((c, i) => (
          <section key={c.title} id={`chapter-${i + 1}`} className="ency-chapter">
            <h2><span>{i + 1}</span>{c.title}</h2>
            <p className="ency-lead">{c.intro}</p>
            {c.slugs.map((slug) => {
              const a = articles.find((x) => x.slug === slug);
              return a ? <InlineArticle key={slug} article={a} /> : null;
            })}
          </section>
        ))}
      </ReadingLayout>
    </main>
  );
}
