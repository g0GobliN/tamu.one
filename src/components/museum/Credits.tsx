import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Camera, ExternalLink } from "lucide-react";
import { media } from "@/data/media";

export function Credits() {
  return (
    <main className="credits-page">
      <header className="credits-hero">
        <span className="eyebrow">
          <span aria-hidden="true" /> PHOTOGRAPHY
        </span>
        <h1>Every photograph, and its paperwork</h1>
        <p className="credits-lede">
          {media.length} photographs carry this museum. Each one is the work of a named photographer
          and is used under a Creative Commons licence — credited here, on the pages that use it,
          and in the archive. If you reuse an image, credit the photographer and follow the licence
          linked beneath it.
        </p>
      </header>

      <section className="credits-note">
        <strong>How the licences work</strong>
        <p>
          <em>CC BY</em> asks for attribution only. <em>CC BY-SA</em> asks for attribution and that
          adaptations be shared under the same licence. None of these images may be relicensed or
          sold as your own work. The Apache 2.0 licence that covers this project's code does not
          cover these photographs.{" "}
          <Link to="/terms" className="text-link">
            Full terms <ArrowUpRight size={14} />
          </Link>
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
          Most of these files come from Wikimedia Commons, where the original description pages hold
          the full licence deed and revision history. Spot a missing or wrong credit?{" "}
          <Link to="/contribute" className="text-link">
            Tell us <ArrowUpRight size={14} />
          </Link>
        </p>
      </footer>
    </main>
  );
}
