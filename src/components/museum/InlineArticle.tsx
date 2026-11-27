import { sources } from "@/data/heritage";
import { getMedia } from "@/data/media";
import type { LocalizedArticle } from "@/i18n/content";
import { useUi } from "@/i18n";
import { AppLink } from "./AppLink";

export function InlineArticle({ article: a }: { article: LocalizedArticle }) {
  const ui = useUi();
  const photo = a.image ? getMedia(a.image) : undefined;
  const refs = a.sourceIds
    .map((id) => sources.find((s) => s.id === id))
    .filter((s) => s !== undefined);

  return (
    <article id={`read-${a.slug}`} className="ency-article">
      <h3 className="ency-title">{a.title}</h3>
      <aside className="ency-infobox">
        {photo && (
          <figure>
            <img src={photo.url} alt={photo.title} loading="lazy" />
            <figcaption>
              {a.imageNote ?? photo.title}
              <small>
                {photo.creator} · {photo.license}
              </small>
            </figcaption>
          </figure>
        )}
        <dl>
          <dt>{ui.article.subject}</dt>
          <dd>{a.category}</dd>
          <dt>{ui.article.region}</dt>
          <dd>{a.region}</dd>
          <dt>{ui.article.period}</dt>
          <dd>{a.period}</dd>
          <dt>{ui.article.evidence}</dt>
          <dd>{a.evidence}</dd>
        </dl>
      </aside>
      <p className="ency-lead">{a.summary}</p>
      {!a.bodyTranslated && (
        <p className="translation-note">
          {ui.article.englishOnly} <a href={`/library/${a.slug}`}>{ui.article.seeEnglish}</a>
        </p>
      )}
      {a.sections.map((s) => (
        <section key={s.title}>
          <h4>{s.title}</h4>
          <p>{s.text}</p>
        </section>
      ))}
      <div className="ency-refs">
        <h4>{ui.article.references}</h4>
        <ol>
          {refs.map((s) => (
            <li key={s.id}>
              <a href={s.url} target="_blank" rel="noreferrer">
                {s.author} ({s.year}). <em>{s.title}</em>
              </a>
              {a.sourceNotes?.[s.id] && <small> · {a.sourceNotes[s.id]}</small>}
            </li>
          ))}
        </ol>
        <AppLink to="/library/$slug" params={{ slug: a.slug }} className="ency-more">
          {ui.article.openPage} →
        </AppLink>
      </div>
    </article>
  );
}
