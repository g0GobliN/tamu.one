import { sources } from "@/data/heritage";
import { media } from "@/data/media";
import { useUi } from "@/i18n";

export function Sources() {
  const ui = useUi();
  return (
    <main className="prose-page">
      <span className="eyebrow">{ui.sources.eyebrow}</span>
      <h1 style={{ fontSize: "clamp(2.8rem,7vw,5rem)", margin: "1rem 0" }}>{ui.sources.title}</h1>
      <h2>{ui.sources.research}</h2>
      <div className="source-list">
        {sources.map((s) => (
          <a key={s.id} href={s.url} target="_blank" rel="noreferrer">
            <strong>
              {s.author} · {s.year}
            </strong>
            {s.title}
            <br />
            <small>{s.kind}</small>
          </a>
        ))}
      </div>
      <h2>{ui.sources.photographs}</h2>
      <div className="source-list">
        {media.map((m) => (
          <a
            key={m.id}
            href={`https://commons.wikimedia.org/wiki/File:${m.file}`}
            target="_blank"
            rel="noreferrer"
          >
            <strong>{m.title}</strong>
            {m.creator} · {m.date}
            <br />
            <small>
              {m.license} · {ui.sources.commons}
            </small>
          </a>
        ))}
      </div>
    </main>
  );
}
