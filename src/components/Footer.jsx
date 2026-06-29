import "../styles/footer.css";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/clamm92/",
    label: "GitHub",
    iconClass: "bi bi-github",
  },
  {
    href: "https://www.linkedin.com/in/connor-lam/",
    label: "LinkedIn",
    iconClass: "bi bi-linkedin",
  },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner layout-shell">
        <ul className="site-footer-contact">
          <li className="site-footer-name">Connor Lam</li>
          <li>
            <a href="mailto:connorlam92@gmail.com" className="site-footer-email">
              connorlam92@gmail.com
            </a>
          </li>
        </ul>

        <div className="site-footer-social">
          {SOCIAL_LINKS.map(({ href, label, iconClass }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer-social-link"
              aria-label={label}
            >
              <i className={iconClass} />
            </a>
          ))}
        </div>

        <p className="site-footer-meta">Last updated: May 2026</p>
      </div>
    </footer>
  );
}

export default Footer;
