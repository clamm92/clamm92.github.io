import DetailPanel from "./detail/DetailPanel";
import ProjectDetailContent from "./ProjectDetailContent";

function ProjectDetailPanel({ project, onClose }) {
  const tags = project.technologies.slice(0, 4);

  return (
    <DetailPanel
      titleId="project-panel-title"
      closeLabel="Close project details"
      onClose={onClose}
      header={
        <>
          <p className="detail-panel-meta">{project.year}</p>
          <h2 id="project-panel-title" className="detail-panel-title">
            {project.shortTitle}
          </h2>
          {tags.length > 0 && (
            <div className="detail-panel-tags" aria-label="Project technologies">
              {tags.map((tag) => (
                <span key={tag} className="detail-panel-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </>
      }
    >
      <ProjectDetailContent project={project} />
    </DetailPanel>
  );
}

export default ProjectDetailPanel;
