import { useState } from "react";
import ImageLightbox from "./ImageLightbox";
import DetailGalleryThumbs from "./detail/DetailGalleryThumbs";
import DetailTextSection from "./detail/DetailTextSection";
import ProjectLinks from "./ProjectLinks";

function ProjectDetailContent({ project }) {
  const [modalImage, setModalImage] = useState(null);

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
              <DetailGalleryThumbs
                images={project.images}
                labelContext={project.shortTitle}
                enlargeActionLabel="Enlarge screenshot"
                onImageSelect={setModalImage}
              />
            </section>
          )}
        </div>
      )}

      <div className="detail-panel-blocks">
        <DetailTextSection title="Context" text={project.problem} blockIndex={1} />
        <DetailTextSection title="Approach" text={project.solution} blockIndex={2} />
        <DetailTextSection title="Result" text={project.impact} blockIndex={3} />

        {project.technologies?.length > 0 && (
          <section className="detail-panel-block" style={{ "--block-index": 4 }}>
            <h3 className="detail-panel-section-title">Tech stack</h3>
            <div className="detail-panel-tech" aria-label="Technologies used">
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
        <ImageLightbox
          src={modalImage.src}
          alt={modalImage.alt}
          onClose={() => setModalImage(null)}
        />
      )}
    </>
  );
}

export default ProjectDetailContent;
