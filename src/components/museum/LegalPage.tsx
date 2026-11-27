import { Mail } from "lucide-react";
import { contact } from "@/data/contact";
import type { LegalPageContent } from "@/data/legal";
import { useUi } from "@/i18n";
import { AppLink } from "./AppLink";

type LegalPageProps = LegalPageContent;

export function LegalPage({ eyebrow, title, updated, intro, sections }: LegalPageProps) {
  const ui = useUi();
  return (
    <main className="legal-page">
      <header className="legal-head">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="legal-updated">
          {ui.legal.updated} {updated}
        </p>
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
          {ui.legal.footQuestion}{" "}
          <a href={`mailto:${contact.email}`}>
            <Mail size={15} /> {contact.email}
          </a>{" "}
          {ui.legal.footOr} <AppLink to="/help">{ui.legal.footHelp}</AppLink>.
        </p>
      </footer>
    </main>
  );
}
