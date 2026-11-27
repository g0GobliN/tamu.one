import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Menu, X, ArrowUpRight, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
export const navItems = [
  { to: "/journey", label: "The Journey" },
  { to: "/timeline", label: "Timeline" },
  { to: "/history", label: "History" },
  { to: "/language", label: "Language" },
  { to: "/culture", label: "Culture" },
  { to: "/geography", label: "Homeland" },
  { to: "/diaspora", label: "Diaspora" },
  { to: "/archive", label: "The Archive" },
  { to: "/help", label: "Help" },
] as const;
export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <header className="museum-header">
      <div className="header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <Mountain size={30} strokeWidth={1.2} />
          <span>
            TAMU<small>A LIVING HERITAGE</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((n) => (
            <Link key={n.to} to={n.to} className={pathname.startsWith(n.to) ? "active" : ""}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="header-tools">
          <Button asChild variant="ghost" size="icon" aria-label="Search the archive">
            <Link to="/library">
              <Search size={19} />
            </Link>
          </Button>
          <span className="header-divider" />
          <Button variant="ghost" asChild className="contribute-link">
            <Link to="/contribute">
              Contribute <ArrowUpRight size={15} />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="mobile-menu"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)}>
              {n.label}
              <ArrowUpRight size={16} />
            </Link>
          ))}
          <Link to="/contribute" onClick={() => setOpen(false)}>
            Contribute
          </Link>
        </nav>
      )}
    </header>
  );
}
