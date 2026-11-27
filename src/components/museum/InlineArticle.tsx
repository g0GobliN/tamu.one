import { Link } from "@tanstack/react-router";
import { sources, type Article } from "@/data/heritage";
import { getMedia } from "@/data/media";

export function InlineArticle({ article: a }: { article: Article }) {
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
          <dt>Subject</dt>
          <dd>{a.category}</dd>
          <dt>Region</dt>
          <dd>{a.region}</dd>
          <dt>Period</dt>
          <dd>{a.period}</dd>
          <dt>Evidence</dt>
          <dd>{a.evidence}</dd>
        </dl>
      </aside>
      <p className="ency-lead">{a.summary}</p>
      {a.sections.map((s) => (
        <section key={s.title}>
          <h4>{s.title}</h4>
          <p>{s.text}</p>
        </section>
      ))}
      <div className="ency-refs">
        <h4>References</h4>
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
        <Link to="/library/$slug" params={{ slug: a.slug }} className="ency-more">
          Open as its own page →
        </Link>
      </div>
    </article>
  );
}
