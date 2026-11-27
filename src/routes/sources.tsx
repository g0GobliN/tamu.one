import { createFileRoute } from "@tanstack/react-router";
import { sources } from "@/data/heritage";
import { media } from "@/data/media";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/sources")({
  head: () =>
    pageHead(
      "Sources & credits",
      "The research and photographs behind the TAMU archive, with full credits and licences.",
      "/sources",
    ),
  component: Sources,
});

function Sources() {
  return (
    <main className="prose-page">
      <span className="eyebrow">FOLLOW THE EVIDENCE</span>
      <h1 style={{ fontSize: "clamp(2.8rem,7vw,5rem)", margin: "1rem 0" }}>Sources & credits</h1>
      <h2>Research</h2>
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
      <h2>Photographs</h2>
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
            <small>{m.license} · Wikimedia Commons</small>
          </a>
        ))}
      </div>
    </main>
  );
}
