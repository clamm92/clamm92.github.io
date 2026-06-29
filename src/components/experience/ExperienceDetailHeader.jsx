import { STATUS_CONFIG } from "../../data/experienceConfig";

function ExperienceDetailHeader({ entry }) {
  const status = STATUS_CONFIG[entry.status];
  const previewTags = entry.preview?.tags?.slice(0, 4) ?? [];

  return (
    <>
      <p className="detail-panel-meta">
        {entry.dates}
        {entry.location ? ` · ${entry.location}` : ""}
        {status?.label && (
          <span className={`timeline-status ${status.className}`}>
            {status.label}
          </span>
        )}
      </p>
      <h2 id="experience-panel-title" className="detail-panel-title">
        {entry.title}
      </h2>
      <p className="detail-panel-subtitle">
        {entry.link ? (
          <a href={entry.link} target="_blank" rel="noopener noreferrer">
            {entry.organization}
          </a>
        ) : (
          entry.organization
        )}
      </p>
      {previewTags.length > 0 && (
        <div className="detail-panel-tags">
          {previewTags.map((tag) => (
            <span key={tag} className="detail-panel-tag">
              {tag}
            </span>
          ))}
        </div>
      )}
    </>
  );
}

export default ExperienceDetailHeader;
