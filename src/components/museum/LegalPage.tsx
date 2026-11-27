import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { contact } from "@/data/contact";

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

export function LegalPage({ eyebrow, title, updated, intro, sections }: LegalPageProps) {
  return (
    <main className="legal-page">
      <header className="legal-head">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="legal-updated">Last updated {updated}</p>
        <p className="legal-intro">{intro}</p>
      </header>

      <div className="legal-body">
        {sections.map((section, index) => (
          <section key={section.heading} id={`section-${index + 1}`}>
            <h2>
              <span>{String(index + 1).padStart(2, "0")}</span> {section.heading}
            </h2>
            {section.paragraphs?.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {section.bullets && (
              <ul>
                {section.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <footer className="legal-foot">
        <p>
          Questions about this page? Write to{" "}
          <a href={`mailto:${contact.email}`}>
            <Mail size={15} /> {contact.email}
          </a>{" "}
          or see <Link to="/help">help &amp; docs</Link>.
        </p>
      </footer>
    </main>
  );
}
