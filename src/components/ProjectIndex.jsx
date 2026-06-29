import "../styles/project-index.css";

function formatTechTags(technologies, max = 3) {
  if (!technologies?.length) return "";
  return technologies.slice(0, max).join(" · ");
}

function ProjectIndex({ projects, selectedSlug, onSelect }) {
  return (
    <section className="project-index" aria-label="Project list">
      {projects.map((project, index) => {
        const isSelected = project.slug === selectedSlug;
        const indexLabel = String(index + 1).padStart(2, "0");

        return (
          <button
            key={project.slug}
            type="button"
            className={`project-index-row ${isSelected ? "is-selected" : ""}`}
            style={{ "--row-index": index }}
            onClick={() => onSelect(project.slug)}
            aria-pressed={isSelected}
          >
            <span className="project-index-number">{indexLabel}</span>
            <span className="project-index-year">{project.year}</span>
            <span className="project-index-title">{project.shortTitle}</span>
            <span className="project-index-tech">
              {formatTechTags(project.technologies)}
            </span>
            <span className="project-index-arrow" aria-hidden="true">→</span>
          </button>
        );
      })}
    </section>
  );
}

export default ProjectIndex;
