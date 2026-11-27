import { ArrowUpRight, Camera, ExternalLink } from "lucide-react";
import { media } from "@/data/media";
import { useUi } from "@/i18n";
import { AppLink } from "./AppLink";

export function Credits() {
  const ui = useUi();
  return (
    <main className="credits-page">
      <header className="credits-hero">
        <span className="eyebrow">
          <span aria-hidden="true" /> {ui.credits.eyebrow}
        </span>
        <h1>{ui.credits.title}</h1>
        <p className="credits-lede">
          {media.length} {ui.credits.lede}
        </p>
      </header>

      <section className="credits-note">
        <strong>{ui.credits.howTitle}</strong>
        <p>
          <em>CC BY</em> {ui.credits.howA} <em>CC BY-SA</em> {ui.credits.howB} {ui.credits.howRest}{" "}
          <AppLink to="/terms" className="text-link">
            {ui.credits.terms} <ArrowUpRight size={14} />
          </AppLink>
        </p>
      </section>

      <ul className="credit-grid">
        {media.map((photo) => (
          <li key={photo.id} className="credit-card">
            <img src={photo.url} alt={photo.title} loading="lazy" width={1600} height={1067} />
            <div className="credit-body">
              <h2>{photo.title}</h2>
              <p className="credit-creator">
                <Camera size={14} aria-hidden="true" /> {photo.creator}
              </p>
              <div className="credit-meta">
                <a
                  href={photo.licenseUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="credit-license"
                >
                  {photo.license}
                </a>
                <span aria-hidden="true">·</span>
                <span>{photo.date}</span>
              </div>
              <a
                href={`https://commons.wikimedia.org/wiki/File:${photo.file}`}
                target="_blank"
                rel="noreferrer"
                className="credit-file"
              >
                <ExternalLink size={12} aria-hidden="true" /> {photo.file}
              </a>
            </div>
          </li>
        ))}
      </ul>

      <footer className="credits-foot">
        <p>
          {ui.credits.foot}{" "}
          <AppLink to="/contribute" className="text-link">
            {ui.credits.footCta} <ArrowUpRight size={14} />
          </AppLink>
        </p>
      </footer>
    </main>
  );
}
