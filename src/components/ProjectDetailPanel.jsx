import { useCallback, useEffect, useRef, useState } from "react";
import ProjectDetailContent from "./ProjectDetailContent";
import "../styles/project-panel.css";

const CLOSE_DURATION_MS = 300;

function ProjectDetailPanel({ project, onClose }) {
  const closeButtonRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);

  const initiateClose = useCallback(() => {
    if (isClosing) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      onClose();
      return;
    }

    setIsClosing(true);
  }, [isClosing, onClose]);

  useEffect(() => {
    if (!isClosing) return;

    const timer = window.setTimeout(onClose, CLOSE_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [isClosing, onClose]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [project.slug]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") initiateClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [initiateClose]);

  const tags = project.technologies.slice(0, 4);

  return (
    <div className={`project-panel-root ${isClosing ? "is-closing" : ""}`}>
      <button
        type="button"
        className="project-panel-backdrop"
        aria-label="Close project details"
        onClick={initiateClose}
      />

      <aside
        className="project-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-panel-title"
      >
        <header className="project-panel-header">
          <div className="project-panel-header-text">
            <p className="project-panel-year">{project.year}</p>
            <h2 id="project-panel-title" className="project-panel-title">
              {project.shortTitle}
            </h2>
            {tags.length > 0 && (
              <div className="project-panel-tags">
                {tags.map((tag) => (
                  <span key={tag} className="project-panel-tag">{tag}</span>
                ))}
              </div>
            )}
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className="project-panel-close"
            aria-label="Close"
            onClick={initiateClose}
          >
            ×
          </button>
        </header>

        <div className="project-panel-body">
          <ProjectDetailContent project={project} />
        </div>
      </aside>
    </div>
  );
}

export default ProjectDetailPanel;
