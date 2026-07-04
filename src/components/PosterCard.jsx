import { useNavigate } from "react-router-dom";
import "../styles/poster-carousel.css";

function PosterCard({ project, style }) {
  const navigate = useNavigate();
  const tags = project.technologies.slice(0, 3);

  const handleClick = () => {
    navigate(`/projects?slug=${project.slug}`, {
      state: { scrollProjectsToTopOnClose: true },
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <article
      className="poster-card"
      style={{
        ...style,
        "--poster-accent": project.accentColor,
        "--poster-accent-dark": project.accentColorDark ?? project.accentColor,
      }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      aria-label={`View ${project.shortTitle}`}
    >
      <div className="poster-card-top">
        <span className="poster-card-year">{project.year}</span>
        <span className="poster-card-arrow" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </span>
      </div>

      <div className="poster-card-center" aria-hidden="true" />

      <div className="poster-card-text">
        <div className="poster-card-summary">
          <h3 className="poster-card-title">{project.shortTitle}</h3>
          {tags.length > 0 && (
            <div className="poster-card-tags">
              {tags.map((tag) => (
                <span key={tag} className="poster-card-tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
        <div className="poster-card-tagline-wrap">
          <p className="poster-card-tagline">{project.tagline}</p>
        </div>
      </div>
    </article>
  );
}

export default PosterCard;
