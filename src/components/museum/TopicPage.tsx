import { Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { articles } from '@/data/heritage';
import { getMedia } from '@/data/media';
import type { Topic } from '@/data/topics';
import { InlineArticle } from './InlineArticle';
import { ReadingLayout } from './ReadingLayout';

export function TopicPage({ topic }: { topic: Topic }) {
  const photo = topic.image ? getMedia(topic.image) : undefined;
  const list = articles.filter((a) => topic.categories.includes(a.category));
  return (
    <main>
      <section className={`topic-hero ${photo ? '' : 'topic-plain'}`}>
        {photo && <><img src={photo.url} alt={photo.title} width={2000} height={1200} /><div className="hero-shade" /></>}
        <div className="topic-hero-inner"><span className="eyebrow">{topic.eyebrow}</span><h1>{topic.title}</h1><p>{topic.intro}</p></div>
      </section>
      <section className="topic-body">
        <h2>{topic.lead}</h2>
        <div>
          {topic.body.map((p) => <p key={p}>{p}</p>)}
          <div className="theme-list">{topic.themes.map((t) => t.slug ? (
            <a key={t.title} href={`#read-${t.slug}`} className="theme-card theme-link"><h3>{t.title}<ArrowUpRight size={18} /></h3><p>{t.text}</p><span className="theme-cta">Read below <ArrowRight size={15} /></span></a>
          ) : (
            <div key={t.title} className="theme-card"><h3>{t.title}</h3><p>{t.text}</p><span className="theme-note">In this collection</span></div>
          ))}</div>
        </div>
      </section>
      <ReadingLayout toc={[{ id: 'topic-articles', title: topic.title, items: list.map((a) => ({ id: `read-${a.slug}`, title: a.title.split(':')[0] ?? a.title })) }]}>
        <section id="topic-articles" className="ency-chapter">
          {list.length ? list.map((a) => <InlineArticle key={a.slug} article={a} />) : <p className="research-note">Articles for this collection are being prepared.</p>}
          <Link to="/library" className="text-link">All articles <ArrowRight size={17} /></Link>
        </section>
      </ReadingLayout>
    </main>
  );
}
