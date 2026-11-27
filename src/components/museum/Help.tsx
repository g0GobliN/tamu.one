import {
  ArrowUpRight,
  BookOpen,
  Compass,
  FileText,
  Github,
  Instagram,
  Keyboard,
  Mail,
  MessageSquareWarning,
  ShieldCheck,
} from "lucide-react";
import { contact } from "@/data/contact";
import { useUi } from "@/i18n";
import { AppLink } from "./AppLink";

const cardIcons = [Compass, BookOpen, FileText, Keyboard] as const;
const cardTargets = ["/journey", "/library", "/sources", "/contribute"] as const;

export function Help() {
  const ui = useUi();
  return (
    <main className="help-page">
      <header className="help-hero">
        <span className="eyebrow">
          <span aria-hidden="true" /> {ui.help.eyebrow}
        </span>
        <h1>{ui.help.title}</h1>
        <p className="help-lede">{ui.help.lede}</p>
      </header>

      <section className="help-start">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{ui.help.startEyebrow}</span>
            <h2>{ui.help.startTitle}</h2>
          </div>
        </div>
        <div className="help-grid">
          {ui.help.cards.map((card, index) => {
            const Icon = cardIcons[index] ?? Compass;
            return (
              <article key={card.title} className="help-card">
                <Icon size={22} strokeWidth={1.4} aria-hidden="true" />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <AppLink to={cardTargets[index] ?? "/journey"} className="text-link">
                  {card.label} <ArrowUpRight size={15} />
                </AppLink>
              </article>
            );
          })}
        </div>
      </section>

      <section className="help-faq">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{ui.help.faqEyebrow}</span>
            <h2>{ui.help.faqTitle}</h2>
          </div>
        </div>
        <div className="faq-list">
          {ui.help.faqs.map((f) => (
            <details key={f.question}>
              <summary>{f.question}</summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="help-docs">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{ui.help.docsEyebrow}</span>
            <h2>{ui.help.docsTitle}</h2>
          </div>
        </div>
        <ul className="doc-list">
          {ui.help.docs.map((d) => (
            <li key={d.title}>
              <strong>{d.title}</strong>
              <span>{d.text}</span>
            </li>
          ))}
        </ul>
        <p className="help-docs-note">{ui.help.docsNote}</p>
      </section>

      <section className="help-contact">
        <div>
          <span className="eyebrow">{ui.help.contactEyebrow}</span>
          <h2>{ui.help.contactTitle}</h2>
          <p>{ui.help.contactP}</p>
        </div>
        <div className="contact-actions">
          <a href={`mailto:${contact.email}`} className="button-primary">
            <Mail size={16} /> {contact.email}
          </a>
          <a href={contact.instagramUrl} target="_blank" rel="noreferrer" className="button-quiet">
            <Instagram size={16} /> {contact.instagramHandle}
          </a>
          <a href={contact.githubUrl} target="_blank" rel="noreferrer" className="button-quiet">
            <Github size={16} /> {contact.githubHandle}
          </a>
        </div>
        <p className="help-safety">
          <MessageSquareWarning size={16} aria-hidden="true" /> {ui.help.security}{" "}
          <AppLink to="/privacy">
            <ShieldCheck size={15} aria-hidden="true" /> {ui.help.privacy}
          </AppLink>
        </p>
      </section>
    </main>
  );
}
