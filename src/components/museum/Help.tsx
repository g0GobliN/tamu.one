import { Link } from "@tanstack/react-router";
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

const startingPoints = [
  {
    icon: Compass,
    title: "Start with the journey",
    text: "The Journey reads continuously from origins to the diaspora — the closest thing to walking the museum in order.",
    to: "/journey" as const,
    label: "Open the journey",
  },
  {
    icon: BookOpen,
    title: "Look something up",
    text: "The knowledge library filters every article by topic, category, region and evidence level, so you can go straight to Ghandruk or Tamu Kyi.",
    to: "/library" as const,
    label: "Open the library",
  },
  {
    icon: FileText,
    title: "Follow the sources",
    text: "Each article ends with its references. The sources page collects every one of them in a single list you can work from.",
    to: "/sources" as const,
    label: "Open the sources",
  },
  {
    icon: Keyboard,
    title: "Read it your way",
    text: "Pages work with the keyboard, respect reduced-motion settings and stay readable on a phone. If something is hard to use, tell us and it gets fixed.",
    to: "/contribute" as const,
    label: "Report a problem",
  },
];

const faqs = [
  {
    question: "Can I cite TAMU in my work?",
    answer:
      "Use it as a map, not as the destination. Quote the museum if you find its framing useful, but cite the underlying source it points to — author, year and title are listed in every article. The library's articles state how strong that evidence is so you know what you are citing.",
  },
  {
    question: "Can I reuse the photographs?",
    answer:
      "Each photograph keeps its creator, licence and licence URL, listed on the article, in the archive and in src/data/media.ts. CC BY and CC BY-SA terms apply — credit the photographer, link the licence, and share adaptations under the same licence where the licence says so.",
  },
  {
    question: "I spotted an error. What should I do?",
    answer:
      "Open a content correction issue or write to us with the article, the sentence and a source for the correction. Community and family accounts are welcome and are labelled as such — the museum is meant to be corrected.",
  },
  {
    question: "Who runs the museum?",
    answer:
      "It is an independent project, not an institution. Content, design and code are maintained in the open; the source code is public under the Apache License 2.0, and every change goes through an issue and a pull request.",
  },
  {
    question: "Is anything tracked or sold?",
    answer:
      "No accounts, no analytics, no advertising, no tracking cookies. The privacy page describes the small amount of infrastructure logging that exists and how to have your contribution removed.",
  },
  {
    question: "Can I contribute a recording or a family photograph?",
    answer:
      "Yes — that is the most valuable kind of contribution. Send it with the story you want told, the names and places as you want them written, and how you would like to be credited. Nothing is published without your agreement.",
  },
];

const docs = [
  {
    title: "CONTRIBUTING.md",
    text: "The issue → pull request → merge workflow, the checks CI runs and the sourcing rules for new articles.",
  },
  {
    title: "CODE_OF_CONDUCT.md",
    text: "Contributor Covenant 2.1 — how people are expected to treat each other in issues, pull requests and messages.",
  },
  {
    title: "SECURITY.md",
    text: "Private reporting for vulnerabilities. Never open a public issue for a security problem.",
  },
  {
    title: "LICENSE and NOTICE",
    text: "Apache 2.0 for the code, and the exact scope of what that licence does not cover: article text and photographs.",
  },
];

export function Help() {
  return (
    <main className="help-page">
      <header className="help-hero">
        <span className="eyebrow">
          <span aria-hidden="true" /> HELP &amp; DOCUMENTATION
        </span>
        <h1>How the museum works</h1>
        <p className="help-lede">
          Where to start, how the evidence is handled, what you may reuse, and how to tell us
          something is wrong. Everything a reader or a contributor needs, in one page.
        </p>
      </header>

      <section className="help-start">
        <div className="section-heading">
          <div>
            <span className="eyebrow">START HERE</span>
            <h2>Four ways in</h2>
          </div>
        </div>
        <div className="help-grid">
          {startingPoints.map(({ icon: Icon, title, text, to, label }) => (
            <article key={title} className="help-card">
              <Icon size={22} strokeWidth={1.4} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
              <Link to={to} className="text-link">
                {label} <ArrowUpRight size={15} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="help-faq">
        <div className="section-heading">
          <div>
            <span className="eyebrow">QUESTIONS</span>
            <h2>Asked often enough to answer here</h2>
          </div>
        </div>
        <div className="faq-list">
          {faqs.map((f) => (
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
            <span className="eyebrow">FOR CONTRIBUTORS</span>
            <h2>Project documents</h2>
          </div>
        </div>
        <ul className="doc-list">
          {docs.map((d) => (
            <li key={d.title}>
              <strong>{d.title}</strong>
              <span>{d.text}</span>
            </li>
          ))}
        </ul>
        <p className="help-docs-note">
          All of them live at the root of the repository, alongside the code. Every change to the
          project follows the same path: an issue, then a pull request, then review and merge.
        </p>
      </section>

      <section className="help-contact">
        <div>
          <span className="eyebrow">NOT ANSWERED HERE?</span>
          <h2>Write to us</h2>
          <p>
            A correction, a recording, a photograph, a source nobody has cited yet — or a page that
            would not load. There is no form and no queue, just a person reading it.
          </p>
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
          <MessageSquareWarning size={16} aria-hidden="true" /> For a security problem, use the
          private reporting route in SECURITY.md rather than a public issue.{" "}
          <Link to="/privacy">
            <ShieldCheck size={15} aria-hidden="true" /> Read the privacy policy
          </Link>
        </p>
      </section>
    </main>
  );
}
