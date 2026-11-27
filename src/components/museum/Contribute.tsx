import { Link } from "@tanstack/react-router";
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
import {
  contributionLimits,
  contributionProcess,
  contributionTypes,
  recordingTips,
  type ContributionType,
} from "@/data/contribute";

const icons: Record<ContributionType["id"], typeof Quote> = {
  memory: Quote,
  photograph: Camera,
  correction: PencilLine,
  language: Languages,
  source: Library,
};

function mailtoFor(type: ContributionType) {
  const subject = encodeURIComponent(type.subject);
  const body = encodeURIComponent(type.body);
  return `mailto:${contact.email}?subject=${subject}&body=${body}`;
}

export function Contribute() {
  const [copied, setCopied] = useState<string | null>(null);

  async function copyTemplate(type: ContributionType) {
    try {
      await navigator.clipboard.writeText(
        `To: ${contact.email}\nSubject: ${type.subject}\n\n${type.body}`,
      );
      setCopied(type.id);
      window.setTimeout(() => setCopied(null), 2500);
    } catch {
      window.location.href = mailtoFor(type);
    }
  }

  return (
    <main className="contribute-page">
      <header className="contribute-hero">
        <span className="eyebrow">
          <span aria-hidden="true" /> A SHARED RESPONSIBILITY
        </span>
        <h1>Become part of the story</h1>
        <p className="contribute-lede">
          Every memory is a thread. A family story, a photograph in a drawer, one word of Tamu Kyi
          written down for the first time, a correction to something you read here — this museum
          gets better every time someone sends one.
        </p>
        <p className="contribute-lede">
          Nothing below is a form that swallows your message. Each one opens a real email, already
          written, so all you have to do is fill in what you know and press send.
        </p>
        <div className="contribute-jump">
          <a href="#ways" className="button-primary">
            Choose what to share <ArrowUpRight size={17} />
          </a>
          <a href="#how" className="button-quiet">
            How it works
          </a>
          <a href="#recording" className="button-quiet">
            Recording advice
          </a>
        </div>
      </header>

      <section id="ways" className="contribute-ways">
        <div className="section-heading">
          <div>
            <span className="eyebrow">FIVE WAYS IN</span>
            <h2>What would you like to share?</h2>
          </div>
        </div>
        <ul className="way-grid">
          {contributionTypes.map((type) => {
            const Icon = icons[type.id];
            const isCopied = copied === type.id;
            return (
              <li key={type.id} className="way-card">
                <Icon size={22} strokeWidth={1.4} aria-hidden="true" />
                <h3>{type.title}</h3>
                <p className="way-summary">{type.summary}</p>
                <ul className="way-list">
                  {type.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="way-actions">
                  <a href={mailtoFor(type)} className="button-primary">
                    <Mail size={15} /> Open email draft
                  </a>
                  <button
                    type="button"
                    className="button-quiet"
                    onClick={() => copyTemplate(type)}
                    aria-label={`Copy the ${type.title} template`}
                  >
                    {isCopied ? <Check size={15} /> : <Copy size={15} />}
                    {isCopied ? "Copied" : "Copy template"}
                  </button>
                </div>
                <span className="way-state" role="status" aria-live="polite">
                  {isCopied ? "Template copied — paste it into any email or message." : ""}
                </span>
              </li>
            );
          })}
        </ul>
      </section>

      <section id="how" className="contribute-process">
        <div className="section-heading">
          <div>
            <span className="eyebrow">WHAT HAPPENS NEXT</span>
            <h2>Three steps, no black box</h2>
          </div>
        </div>
        <ol className="process-steps">
          {contributionProcess.map((step, index) => (
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
          You keep ownership of what you send, and you can ask for it to be credited differently or
          removed later. The full arrangement is in the <Link to="/terms">terms</Link> and the{" "}
          <Link to="/privacy">privacy policy</Link>.
        </p>
      </section>

      <section id="limits" className="contribute-limits">
        <div>
          <span className="eyebrow">WHAT WE CAN'T HOLD</span>
          <h2>Some things stay out of a public museum</h2>
          <p>
            Respect is part of the method. These are the contributions that will be declined or kept
            back, and it is not a judgement on the person offering them.
          </p>
        </div>
        <ul>
          {contributionLimits.map((limit) => (
            <li key={limit}>
              <X size={15} aria-hidden="true" /> {limit}
            </li>
          ))}
        </ul>
      </section>

      <section id="recording" className="contribute-recording">
        <div className="section-heading">
          <div>
            <span className="eyebrow">ORAL HISTORY</span>
            <h2>Recording an elder, this weekend</h2>
          </div>
        </div>
        <p className="recording-intro">
          You do not need equipment or training. <Mic size={16} aria-hidden="true" /> The best
          recording ever made of a village is usually one somebody took on a phone before it was too
          late.
        </p>
        <div className="recording-grid">
          {recordingTips.map((tip) => (
            <article key={tip.title}>
              <h3>{tip.title}</h3>
              <p>{tip.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contribute-contact">
        <div>
          <span className="eyebrow">READY, OR JUST CURIOUS?</span>
          <h2>Write to us first if you would rather ask than send</h2>
          <p>
            A short message is enough — “I have photographs from Sikles, can I send them?” is a
            perfectly good opening. Say what you have and we will tell you what would be useful.
          </p>
          <p className="contribute-safety">
            <ShieldCheck size={16} aria-hidden="true" /> We never publish a contribution, or a
            contributor's details, without your agreement.
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
          Contributing code or reporting a bug works differently: every change starts as an issue,
          then a pull request. The <Link to="/help">help page</Link> explains both paths.
        </p>
      </section>
    </main>
  );
}
