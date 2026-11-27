import {
  ArrowUpRight,
  BookOpenCheck,
  Github,
  Globe,
  Instagram,
  Mail,
  Mountain,
  Scale,
  Users,
} from "lucide-react";
import { contact } from "@/data/contact";
import { useUi } from "@/i18n";
import { AppLink } from "./AppLink";

const principleIcons = [BookOpenCheck, Scale, Mountain, Users] as const;

export function About() {
  const ui = useUi();
  return (
    <main className="about-page">
      <section className="about-hero">
        <span className="eyebrow">
          <span aria-hidden="true" /> {ui.about.eyebrow}
        </span>
        <h1>{ui.about.title}</h1>
        <p className="about-lede">{ui.about.lede}</p>
        <div className="about-actions">
          <AppLink to="/journey" className="button-primary">
            {ui.about.begin} <ArrowUpRight size={17} />
          </AppLink>
          <AppLink to="/library" className="button-quiet">
            {ui.about.browse}
          </AppLink>
        </div>
      </section>

      <section className="about-principles">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{ui.about.principlesEyebrow}</span>
            <h2>{ui.about.principlesTitle}</h2>
          </div>
        </div>
        <div className="principle-grid">
          {ui.about.principles.map(({ title, text }, index) => {
            const Icon = principleIcons[index] ?? BookOpenCheck;
            return (
              <article key={title} className="principle-card">
                <Icon size={22} strokeWidth={1.4} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="about-record">
        <div>
          <span className="eyebrow">{ui.about.recordEyebrow}</span>
          <h2>{ui.about.recordTitle}</h2>
          <p>{ui.about.recordP1}</p>
          <p>{ui.about.recordP2}</p>
          <p className="about-maintained">
            {ui.about.maintained}{" "}
            <a href={contact.portfolioUrl} target="_blank" rel="noreferrer">
              Vishal Gurung
            </a>{" "}
            · {contact.site}
          </p>
        </div>
        <dl className="record-facts">
          {ui.about.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="about-contact">
        <span className="eyebrow">{ui.about.contactEyebrow}</span>
        <h2>{ui.about.contactTitle}</h2>
        <p>{ui.about.contactP}</p>
        <div className="contact-actions">
          <AppLink to="/contribute" className="button-primary">
            {ui.about.contribute} <ArrowUpRight size={17} />
          </AppLink>
          <a href={`mailto:${contact.email}`} className="button-quiet">
            <Mail size={16} /> {contact.email}
          </a>
          <a href={contact.instagramUrl} target="_blank" rel="noreferrer" className="button-quiet">
            <Instagram size={16} /> {contact.instagramHandle}
          </a>
          <a href={contact.githubUrl} target="_blank" rel="noreferrer" className="button-quiet">
            <Github size={16} /> {contact.githubHandle}
          </a>
          <a href={contact.portfolioUrl} target="_blank" rel="noreferrer" className="button-quiet">
            <Globe size={16} /> {contact.portfolioLabel}
          </a>
        </div>
        <p className="about-help">
          {ui.about.helpNote} <AppLink to="/help">{ui.about.helpLink}</AppLink> {ui.about.helpRest}
        </p>
      </section>
    </main>
  );
}
