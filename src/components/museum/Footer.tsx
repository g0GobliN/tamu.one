import { ArrowUpRight, Github, Globe, Instagram, Mail, Mountain } from "lucide-react";
import { contact } from "@/data/contact";
import { AppLink } from "./AppLink";
import { useUi } from "@/i18n";

export function Footer() {
  const ui = useUi();
  const exploreLinks = [
    { to: "/journey", label: ui.footer.journey },
    { to: "/timeline", label: ui.footer.timeline },
    { to: "/library", label: ui.footer.library },
    { to: "/archive", label: ui.footer.archive },
  ] as const;

  const projectLinks = [
    { to: "/about", label: ui.footer.about },
    { to: "/help", label: ui.footer.help },
    { to: "/contribute", label: ui.footer.contribute },
    { to: "/sources", label: ui.footer.sources },
    { to: "/credits", label: ui.footer.credits },
  ] as const;

  return (
    <footer className="museum-footer">
      <div className="footer-grid">
        <div className="footer-brand-col">
          <AppLink to="/" className="footer-brand">
            <Mountain strokeWidth={1} /> TAMU
          </AppLink>
          <p>{ui.footer.blurb}</p>
          <AppLink to="/contribute" className="footer-cta">
            {ui.footer.cta} <ArrowUpRight size={16} />
          </AppLink>
        </div>

        <nav className="footer-links" aria-label={ui.nav.mainLabel}>
          <div>
            <span className="footer-label">{ui.footer.explore}</span>
            {exploreLinks.map((l) => (
              <AppLink key={l.to} to={l.to}>
                {l.label}
              </AppLink>
            ))}
          </div>
          <div>
            <span className="footer-label">{ui.footer.project}</span>
            {projectLinks.map((l) => (
              <AppLink key={l.to} to={l.to}>
                {l.label}
              </AppLink>
            ))}
          </div>
          <div>
            <span className="footer-label">{ui.footer.touch}</span>
            <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
              <Instagram size={15} /> {contact.instagramHandle}
            </a>
            <a href={`mailto:${contact.email}`}>
              <Mail size={15} /> {ui.footer.email}
            </a>
            <a href={contact.githubUrl} target="_blank" rel="noreferrer">
              <Github size={15} /> {contact.githubHandle}
            </a>
            <a href={contact.portfolioUrl} target="_blank" rel="noreferrer">
              <Globe size={15} /> {contact.portfolioLabel}
            </a>
          </div>
        </nav>
      </div>

      <div className="footer-bottom">
        <span>
          © 2026 TAMU · <a href={contact.siteUrl}>{contact.site}</a> · {ui.footer.copyright}
        </span>
        <div>
          <AppLink to="/privacy">{ui.footer.privacy}</AppLink>
          <AppLink to="/terms">{ui.footer.terms}</AppLink>
          <AppLink to="/help">{ui.footer.help}</AppLink>
          <AppLink to="/oral-history">{ui.footer.oralHistories}</AppLink>
        </div>
      </div>
    </footer>
  );
}
