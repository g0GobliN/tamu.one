import { useState } from "react";
import {
  ArrowUpRight,
  Camera,
  Check,
  Copy,
  Github,
  Instagram,
  Languages,
  Library,
  Mail,
  Mic,
  PencilLine,
  Quote,
  ShieldCheck,
  X,
} from "lucide-react";
import { contact } from "@/data/contact";
import { useUi } from "@/i18n";
import { AppLink } from "./AppLink";

const typeIcons = [Quote, Camera, PencilLine, Languages, Library] as const;

function mailtoFor(subject: string, body: string) {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function Contribute() {
  const ui = useUi();
  const [copied, setCopied] = useState<number | null>(null);
  const types = ui.contribute.types;

  async function copyTemplate(index: number) {
    const type = types[index];
    if (!type) return;
    try {
      await navigator.clipboard.writeText(
        `To: ${contact.email}\nSubject: ${type.subject}\n\n${type.body}`,
      );
      setCopied(index);
      window.setTimeout(() => setCopied(null), 2500);
    } catch {
      window.location.href = mailtoFor(type.subject, type.body);
    }
  }

  return (
    <main className="contribute-page">
      <header className="contribute-hero">
        <span className="eyebrow">
          <span aria-hidden="true" /> {ui.contribute.eyebrow}
        </span>
        <h1>{ui.contribute.title}</h1>
        <p className="contribute-lede">{ui.contribute.lede1}</p>
        <p className="contribute-lede">{ui.contribute.lede2}</p>
        <div className="contribute-jump">
          <a href="#ways" className="button-primary">
            {ui.contribute.choose} <ArrowUpRight size={17} />
          </a>
          <a href="#how" className="button-quiet">
            {ui.contribute.howItWorks}
          </a>
          <a href="#recording" className="button-quiet">
            {ui.contribute.recordingAdvice}
          </a>
        </div>
      </header>

      <section id="ways" className="contribute-ways">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{ui.contribute.waysEyebrow}</span>
            <h2>{ui.contribute.waysTitle}</h2>
          </div>
        </div>
        <ul className="way-grid">
          {types.map((type, index) => {
            const Icon = typeIcons[index] ?? Quote;
            const isCopied = copied === index;
            return (
              <li key={type.title} className="way-card">
                <Icon size={22} strokeWidth={1.4} aria-hidden="true" />
                <h3>{type.title}</h3>
                <p className="way-summary">{type.summary}</p>
                <ul className="way-list">
                  {type.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="way-actions">
                  <a href={mailtoFor(type.subject, type.body)} className="button-primary">
                    <Mail size={15} /> {ui.contribute.openDraft}
                  </a>
                  <button
                    type="button"
                    className="button-quiet"
                    onClick={() => copyTemplate(index)}
                    aria-label={`${ui.contribute.copyAria}: ${type.title}`}
                  >
                    {isCopied ? <Check size={15} /> : <Copy size={15} />}
                    {isCopied ? ui.contribute.copied : ui.contribute.copy}
                  </button>
                </div>
                <span className="way-state" role="status" aria-live="polite">
                  {isCopied ? ui.contribute.templateCopied : ""}
                </span>
              </li>
            );
          })}
        </ul>
      </section>

      <section id="how" className="contribute-process">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{ui.contribute.processEyebrow}</span>
            <h2>{ui.contribute.processTitle}</h2>
          </div>
        </div>
        <ol className="process-steps">
          {ui.contribute.process.map((step, index) => (
            <li key={step.title}>
              <span className="process-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="process-note">
          {ui.contribute.processNoteA}{" "}
          <AppLink to="/terms">{ui.contribute.processNoteTerms}</AppLink>{" "}
          {ui.contribute.processNoteMid}{" "}
          <AppLink to="/privacy">{ui.contribute.processNotePrivacy}</AppLink>
          {ui.contribute.processNoteEnd}
        </p>
      </section>

      <section id="limits" className="contribute-limits">
        <div>
          <span className="eyebrow">{ui.contribute.limitsEyebrow}</span>
          <h2>{ui.contribute.limitsTitle}</h2>
          <p>{ui.contribute.limitsIntro}</p>
        </div>
        <ul>
          {ui.contribute.limits.map((limit) => (
            <li key={limit}>
              <X size={15} aria-hidden="true" /> {limit}
            </li>
          ))}
        </ul>
      </section>

      <section id="recording" className="contribute-recording">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{ui.contribute.recordingEyebrow}</span>
            <h2>{ui.contribute.recordingTitle}</h2>
          </div>
        </div>
        <p className="recording-intro">
          {ui.contribute.recordingIntroA} <Mic size={16} aria-hidden="true" />{" "}
          {ui.contribute.recordingIntroB}
        </p>
        <div className="recording-grid">
          {ui.contribute.tips.map((tip) => (
            <article key={tip.title}>
              <h3>{tip.title}</h3>
              <p>{tip.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contribute-contact">
        <div>
          <span className="eyebrow">{ui.contribute.contactEyebrow}</span>
          <h2>{ui.contribute.contactTitle}</h2>
          <p>{ui.contribute.contactP}</p>
          <p className="contribute-safety">
            <ShieldCheck size={16} aria-hidden="true" /> {ui.contribute.safety}
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
        <p className="contribute-code">
          {ui.contribute.codeNoteA} <AppLink to="/help">{ui.contribute.helpLink}</AppLink>{" "}
          {ui.contribute.codeNoteEnd}
        </p>
      </section>
    </main>
  );
}
