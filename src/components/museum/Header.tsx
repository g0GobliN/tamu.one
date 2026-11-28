import { useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Menu, X, ArrowUpRight, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppLink } from "./AppLink";
import { localeMeta, locales, pathFor, stripLocale, useLocale, useUi } from "@/i18n";

const READING_PLACE_KEY = "tamu:lang-scroll";

/**
 * Switching language is a full page load, which normally lands at the top.
 * Remember the section the reader is in and how far into it they have read, so
 * the other edition opens at the same passage.
 */
function rememberReadingPlace(rest: string) {
  try {
    let section = -1;
    let sectionTop = 0;
    const y = window.scrollY;
    document.querySelectorAll<HTMLElement>("section[id^='section-']").forEach((el) => {
      const top = el.getBoundingClientRect().top + y;
      if (top <= y + 120) {
        section = Number(el.id.slice("section-".length));
        sectionTop = top;
      }
    });
    sessionStorage.setItem(
      READING_PLACE_KEY,
      JSON.stringify({ rest, y, section, offset: y - sectionTop }),
    );
  } catch {
    // No session storage: the switch falls back to opening at the top.
  }
}

export const navItems = [
  { to: "/journey", key: "journey" },
  { to: "/timeline", key: "timeline" },
  { to: "/history", key: "history" },
  { to: "/language", key: "language" },
  { to: "/culture", key: "culture" },
  { to: "/geography", key: "homeland" },
  { to: "/diaspora", key: "diaspora" },
  { to: "/archive", key: "archive" },
  { to: "/help", key: "help" },
] as const;

function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = useLocation({ select: (l) => l.pathname });
  const ui = useUi();
  const rest = stripLocale(pathname);

  return (
    <div className="lang-switch" role="group" aria-label={ui.lang.label}>
      {locales.map((code) => {
        const meta = localeMeta[code];
        const active = code === locale;
        return (
          <a
            key={code}
            href={pathFor(code, rest)}
            onClick={() => rememberReadingPlace(rest)}
            hrefLang={meta.htmlLang}
            lang={meta.htmlLang}
            className={active ? "active" : ""}
            aria-current={active ? "page" : undefined}
            aria-label={meta.label}
          >
            {meta.short}
          </a>
        );
      })}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useLocation({ select: (l) => l.pathname });
  const current = stripLocale(pathname);
  const ui = useUi();

  // On the landing page the home link already matches the current route, so the
  // router has nothing to navigate to and the click does nothing at all. Take the
  // reader back to the top instead.
  const goHome = () => {
    setOpen(false);
    if (current === "/") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="museum-header">
      <div className="header-inner">
        <AppLink to="/" className="brand" onClick={goHome}>
          <Mountain size={30} strokeWidth={1.2} />
          <span>
            TAMU<small>{ui.brand.small}</small>
          </span>
        </AppLink>
        <nav className="desktop-nav" aria-label={ui.nav.mainLabel}>
          {navItems.map((n) => (
            <AppLink
              key={n.to}
              to={n.to}
              className={current === n.to || current.startsWith(`${n.to}/`) ? "active" : ""}
            >
              {ui.nav[n.key]}
            </AppLink>
          ))}
        </nav>
        <div className="header-tools">
          <LanguageSwitcher />
          <span className="header-divider" />
          <Button asChild variant="ghost" size="icon" aria-label={ui.nav.search}>
            <AppLink to="/library">
              <Search size={19} />
            </AppLink>
          </Button>
          <span className="header-divider" />
          <Button variant="ghost" asChild className="contribute-link">
            <AppLink to="/contribute">
              {ui.nav.contribute} <ArrowUpRight size={15} />
            </AppLink>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="mobile-menu"
            onClick={() => setOpen(!open)}
            aria-label={open ? ui.nav.close : ui.nav.open}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label={ui.nav.mobileLabel}>
          {navItems.map((n) => (
            <AppLink key={n.to} to={n.to} onClick={() => setOpen(false)}>
              {ui.nav[n.key]}
              <ArrowUpRight size={16} />
            </AppLink>
          ))}
          <AppLink to="/contribute" onClick={() => setOpen(false)}>
            {ui.nav.contribute}
          </AppLink>
        </nav>
      )}
    </header>
  );
}
