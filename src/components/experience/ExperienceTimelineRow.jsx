import { getRowPreviewTags, STATUS_CONFIG } from "../../data/experienceConfig";

function ExperienceTimelineRow({ entry, index, isSelected, onSelect }) {
  const status = STATUS_CONFIG[entry.status];
  const previewTags = getRowPreviewTags(entry);
  const accent = entry.accentColor ?? "var(--color-accent)";

  return (
    <button
      type="button"
      className={`timeline-row${isSelected ? " is-selected" : ""}`}
      style={{
        "--row-index": index,
        "--entry-accent": accent,
      }}
      onClick={() => onSelect(entry.slug)}
      aria-pressed={isSelected}
    >
      <span className="timeline-row-marker" aria-hidden="true">
        <span className="timeline-row-dot" />
      </span>
      <span className="timeline-row-dates">{entry.dates}</span>
      <span className="timeline-row-main">
        <span className="timeline-row-title">{entry.title}</span>
        <span className="timeline-row-org">
          {entry.organization}
          {entry.location ? ` · ${entry.location}` : ""}
        </span>
        {status?.label && (
          <span className={`timeline-status ${status.className}`}>
            {status.label}
          </span>
        )}
      </span>
      <span className="timeline-row-tags">
        {previewTags.join(" · ")}
      </span>
      <span className="timeline-row-arrow" aria-hidden="true">
        →
      </span>
    </button>
  );
}

export default ExperienceTimelineRow;
