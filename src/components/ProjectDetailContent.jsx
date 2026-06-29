import { useState } from "react";
import ProjectLinks from "./ProjectLinks";

function ProjectDetailContent({ project }) {
  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (image) => {
    if (typeof image === "object" && image.externalLink) {
      window.open(image.externalLink, "_blank", "noopener,noreferrer");
      return;
    }
    const src = typeof image === "object" ? image.src : image;
    setModalImage(src);
  };

  const hasLinks = project.links?.length > 0;
  const hasImages = project.images?.length > 0;

  return (
    <>
      {(hasLinks || hasImages) && (
        <div className="project-panel-media">
          {hasLinks && (
            <div className="project-panel-actions">
              <ProjectLinks links={project.links} />
            </div>
          )}

          {hasImages && (
            <section className="project-panel-section">
              <h3 className="project-panel-section-title">Screenshots</h3>
              <div className="project-panel-gallery">
                {project.images.map((image) => {
                  const imgSrc = typeof image === "object" ? image.src : image;
                  const isExternal = typeof image === "object" && image.externalLink;
                  return (
                    <button
                      key={imgSrc}
                      type="button"
                      className="project-panel-gallery-thumb"
                      onClick={() => handleImageClick(image)}
                    >
                      <img src={imgSrc} alt={`${project.shortTitle} screenshot`} />
                      {isExternal && (
                        <span className="project-panel-gallery-badge">PDF</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      )}

      <div className="project-panel-sections">
        <section className="project-panel-section">
          <h3 className="project-panel-section-title">Context</h3>
          <p className="project-panel-section-text">{project.problem}</p>
        </section>

        <section className="project-panel-section">
          <h3 className="project-panel-section-title">What I built</h3>
          <p className="project-panel-section-text">{project.solution}</p>
        </section>

        <section className="project-panel-section">
          <h3 className="project-panel-section-title">Result</h3>
          <p className="project-panel-section-text">{project.impact}</p>
        </section>

        {project.technologies?.length > 0 && (
          <section className="project-panel-section">
            <h3 className="project-panel-section-title">Tech stack</h3>
            <div className="project-panel-tech">
              {project.technologies.map((tech) => (
                <span key={tech} className="project-panel-tech-tag">{tech}</span>
              ))}
            </div>
          </section>
        )}
      </div>

      {modalImage && (
        <div className="image-modal-overlay" onClick={() => setModalImage(null)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="image-modal-close"
              onClick={() => setModalImage(null)}
            >
              ×
            </button>
            <img src={modalImage} alt="Enlarged view" className="image-modal-img" />
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectDetailContent;
