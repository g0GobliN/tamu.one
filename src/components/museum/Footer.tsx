import { Link } from "@tanstack/react-router";
import { Mountain, ArrowUpRight } from "lucide-react";
export function Footer() {
  return (
    <footer className="museum-footer">
      <div className="footer-top">
        <Link to="/" className="footer-brand">
          <Mountain strokeWidth={1} /> TAMU
        </Link>
        <p>
          Thousands of years of stories.
          <br />
          Countless generations. One living heritage.
        </p>
        <Link to="/contribute">
          Help preserve our heritage <ArrowUpRight size={16} />
        </Link>
      </div>
      <div className="footer-bottom">
        <span>© 2026 TAMU · A growing, independent heritage archive</span>
        <div>
          <Link to="/about">About TAMU</Link>
          <Link to="/sources">Sources & credits</Link>
          <Link to="/oral-history">Oral histories</Link>
        </div>
      </div>
    </footer>
  );
}
