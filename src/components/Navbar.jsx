import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/header.css";

const STICKY_THRESHOLD = 32;
let headerHasAnimated = false;

const navLinks = [
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/hobbies", label: "Hobbies" },
];

function AppNavbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(
    () => typeof window !== "undefined" && window.scrollY >= STICKY_THRESHOLD
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerState, setHeaderState] = useState(() => {
    if (typeof window === "undefined") return "visible";
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    const onHome = window.location.pathname === "/";
    const isSticky = window.scrollY >= STICKY_THRESHOLD;
    if (!headerHasAnimated && onHome && !isSticky && isDesktop) return "animate";
    return "visible";
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= STICKY_THRESHOLD);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    const isSticky = window.scrollY >= STICKY_THRESHOLD;

    if (!headerHasAnimated && isHome && !isSticky && isDesktop) {
      headerHasAnimated = true;
      setHeaderState("animate");
    } else {
      headerHasAnimated = true;
      setHeaderState("visible");
    }
  }, [isHome]);

  const headerClasses = [
    "site-header",
    isHome && !scrolled ? "site-header--blend" : "site-header--solid",
    headerState === "animate" && "site-header--animate",
    headerState === "visible" && "site-header--visible",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header id="site-header" className={headerClasses}>
      <div className="site-header-inner layout-shell">
        <Link to="/" className="site-logo">
          Connor Lam
        </Link>

        <button
          type="button"
          className="site-nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <nav className={`site-nav-collapse ${menuOpen ? "open" : ""}`}>
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`site-nav-link ${location.pathname === to ? "active" : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default AppNavbar;
