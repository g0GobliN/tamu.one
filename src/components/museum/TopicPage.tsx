import { ArrowRight, ArrowUpRight } from "lucide-react";
import { articles } from "@/data/heritage";
import { getMedia } from "@/data/media";
import type { TopicKey } from "@/data/topics";
import { getArticle, getTopic } from "@/i18n/content";
import { useLocale, useUi } from "@/i18n";
import { InlineArticle } from "./InlineArticle";
import { ReadingLayout } from "./ReadingLayout";
import { AppLink } from "./AppLink";

export function TopicPage({ topicKey }: { topicKey: TopicKey }) {
  const locale = useLocale();
  const ui = useUi();
  const topic = getTopic(locale, topicKey);
  const photo = topic.image ? getMedia(topic.image) : undefined;
  const list = articles
    .filter((a) => topic.categories.includes(a.category))
    .map((a) => getArticle(a, locale));

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
          <div className="theme-list">
            {topic.themes.map((t) =>
              t.slug ? (
                <a key={t.title} href={`#read-${t.slug}`} className="theme-card theme-link">
                  <h3>
                    {t.title}
                    <ArrowUpRight size={18} />
                  </h3>
                  <p>{t.text}</p>
                  <span className="theme-cta">
                    {ui.topic.readBelow} <ArrowRight size={15} />
                  </span>
                </a>
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
      <ReadingLayout
        toc={[
          {
            id: "topic-articles",
            title: topic.title,
            items: list.map((a) => ({
              id: `read-${a.slug}`,
              title: a.title.split(":")[0] ?? a.title,
            })),
          },
        ]}
      >
        <section id="topic-articles" className="ency-chapter">
          {list.length ? (
            list.map((a) => <InlineArticle key={a.slug} article={a} />)
          ) : (
            <p className="research-note">{ui.common.preparing}</p>
          )}
          <AppLink to="/library" className="text-link">
            {ui.common.allArticles} <ArrowRight size={17} />
          </AppLink>
        </section>
      </ReadingLayout>
    </main>
  );
}
