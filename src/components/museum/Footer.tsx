import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, Instagram, Mail, Mountain } from "lucide-react";
import { contact } from "@/data/contact";

const exploreLinks = [
  { to: "/journey", label: "The Journey" },
  { to: "/timeline", label: "Timeline" },
  { to: "/library", label: "Knowledge library" },
  { to: "/archive", label: "The Archive" },
] as const;

const projectLinks = [
  { to: "/about", label: "About TAMU" },
  { to: "/help", label: "Help & docs" },
  { to: "/contribute", label: "Contribute" },
  { to: "/sources", label: "Sources & credits" },
] as const;

export function Footer() {
  return (
    <footer className="museum-footer">
      <div className="footer-grid">
        <div className="footer-brand-col">
          <Link to="/" className="footer-brand">
            <Mountain strokeWidth={1} /> TAMU
          </Link>
          <p>
            Thousands of years of stories. Countless generations. One living heritage — kept in the
            open, for anyone who wants to read it.
          </p>
          <Link to="/contribute" className="footer-cta">
            Help preserve our heritage <ArrowUpRight size={16} />
          </Link>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <div>
            <span className="footer-label">Explore</span>
            {exploreLinks.map((l) => (
              <Link key={l.to} to={l.to}>
                {l.label}
              </Link>
            ))}
          </div>
          <div>
            <span className="footer-label">The project</span>
            {projectLinks.map((l) => (
              <Link key={l.to} to={l.to}>
                {l.label}
              </Link>
            ))}
          </div>
          <div>
            <span className="footer-label">Stay in touch</span>
            <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
              <Instagram size={15} /> {contact.instagramHandle}
            </a>
            <a href={`mailto:${contact.email}`}>
              <Mail size={15} /> Email
            </a>
            <a href={contact.githubUrl} target="_blank" rel="noreferrer">
              <Github size={15} /> {contact.githubHandle}
            </a>
          </div>
        </nav>
      </div>

      <div className="footer-bottom">
        <span>© 2026 TAMU · An independent heritage archive, built in the open</span>
        <div>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/help">Help</Link>
          <Link to="/oral-history">Oral histories</Link>
        </div>
      </div>
    </footer>
  );
}
