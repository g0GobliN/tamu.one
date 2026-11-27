import { Link } from "@tanstack/react-router";
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

const principles = [
  {
    icon: BookOpenCheck,
    title: "Sources on the page",
    text: "Every article names its sources, the kind of evidence behind them and the date it was last reviewed. Nothing asks you to take our word for it.",
  },
  {
    icon: Scale,
    title: "Uncertainty, named",
    text: "Where the record is thin, or scholars disagree, the article says so. A well-argued account of what remains unknown belongs in a museum.",
  },
  {
    icon: Mountain,
    title: "Sacred knowledge, respected",
    text: "Ritual and community knowledge is presented as it is held — not as spectacle, not flattened into a bullet point, not sold.",
  },
  {
    icon: Users,
    title: "Corrections from the community",
    text: "A village name spelled another way, a family account that differs, a photograph credited to the wrong person — those corrections are the point.",
  },
] as const;

export function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <span className="eyebrow">
          <span aria-hidden="true" /> THE STORY BEHIND TAMU
        </span>
        <h1>Remembering, together.</h1>
        <p className="about-lede">
          TAMU is an independent archive of the history, language and living culture of the Gurung
          (Tamu) people — written to be read, sourced so it can be checked, and kept in the open so
          it can keep growing.
        </p>
        <div className="about-actions">
          <Link to="/journey" className="button-primary">
            Begin the journey <ArrowUpRight size={17} />
          </Link>
          <Link to="/library" className="button-quiet">
            Browse the library
          </Link>
        </div>
      </section>

      <section className="about-principles">
        <div className="section-heading">
          <div>
            <span className="eyebrow">HOW WE WORK</span>
            <h2>Four rules we don't bend</h2>
          </div>
        </div>
        <div className="principle-grid">
          {principles.map(({ icon: Icon, title, text }) => (
            <article key={title} className="principle-card">
              <Icon size={22} strokeWidth={1.4} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-record">
        <div>
          <span className="eyebrow">THE RECORD</span>
          <h2>Open, credited, correctable</h2>
          <p>
            The museum is an ordinary website with an uncommon standard: no accounts, no tracking,
            no paywall. Photographs are hosted here and carry their creator, licence and original
            file. Article text and imagery are reviewed with the community rather than about them.
          </p>
          <p>
            The source code is public under the Apache License 2.0, and every change to it moves
            through an issue and a pull request — the same way corrections to the content do.
          </p>
          <p className="about-maintained">
            Built and maintained by{" "}
            <a href={contact.portfolioUrl} target="_blank" rel="noreferrer">
              Vishal Gurung
            </a>{" "}
            · {contact.site}
          </p>
        </div>
        <dl className="record-facts">
          <div>
            <dt>Collections</dt>
            <dd>Five</dd>
          </div>
          <div>
            <dt>Photographs</dt>
            <dd>All credited</dd>
          </div>
          <div>
            <dt>Code licence</dt>
            <dd>Apache 2.0</dd>
          </div>
          <div>
            <dt>Accounts, ads, trackers</dt>
            <dd>None</dd>
          </div>
        </dl>
      </section>

      <section className="about-contact">
        <span className="eyebrow">GET INVOLVED</span>
        <h2>Heritage grows through conversation.</h2>
        <p>
          Share a memory, a photograph, a source nobody has cited yet, or a correction to something
          we got wrong. Every contribution is credited, and nothing is published without asking.
        </p>
        <div className="contact-actions">
          <Link to="/contribute" className="button-primary">
            Contribute to the museum <ArrowUpRight size={17} />
          </Link>
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
          New here? <Link to="/help">Read how the museum works</Link> — sourcing, citing,
          accessibility and contribution rules in one place.
        </p>
      </section>
    </main>
  );
}
