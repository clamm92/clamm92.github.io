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
        <div className="detail-panel-media">
          {hasLinks && (
            <div className="detail-panel-actions">
              <ProjectLinks links={project.links} />
            </div>
          )}

          {hasImages && (
            <section className="detail-panel-block" style={{ "--block-index": 0 }}>
              <h3 className="detail-panel-section-title">Screenshots</h3>
              <div className="detail-panel-gallery">
                {project.images.map((image) => {
                  const imgSrc = typeof image === "object" ? image.src : image;
                  const isExternal = typeof image === "object" && image.externalLink;
                  return (
                    <button
                      key={imgSrc}
                      type="button"
                      className="detail-panel-gallery-thumb"
                      onClick={() => handleImageClick(image)}
                    >
                      <img src={imgSrc} alt={`${project.shortTitle} screenshot`} />
                      {isExternal && (
                        <span className="detail-panel-gallery-badge">PDF</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      )}

      <div className="detail-panel-blocks">
        <section className="detail-panel-block" style={{ "--block-index": 1 }}>
          <h3 className="detail-panel-section-title">Context</h3>
          <p className="detail-panel-section-text">{project.problem}</p>
        </section>

        <section className="detail-panel-block" style={{ "--block-index": 2 }}>
          <h3 className="detail-panel-section-title">Approach</h3>
          <p className="detail-panel-section-text">{project.solution}</p>
        </section>

        <section className="detail-panel-block" style={{ "--block-index": 3 }}>
          <h3 className="detail-panel-section-title">Result</h3>
          <p className="detail-panel-section-text">{project.impact}</p>
        </section>

        {project.technologies?.length > 0 && (
          <section className="detail-panel-block" style={{ "--block-index": 4 }}>
            <h3 className="detail-panel-section-title">Tech stack</h3>
            <div className="detail-panel-tech">
              {project.technologies.map((tech) => (
                <span key={tech} className="detail-panel-tech-tag">
                  {tech}
                </span>
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
