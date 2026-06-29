import { useInView } from "../../hooks/useInView";
import ExperienceTimelineRow from "./ExperienceTimelineRow";

function ExperienceTimelineSection({ section, selectedSlug, onSelect, sectionIndex }) {
  const [sectionRef, isInView] = useInView();

  return (
    <section
      ref={sectionRef}
      id={`section-${section.key}`}
      className={`timeline-section${isInView ? " is-visible" : ""}`}
      aria-labelledby={`timeline-heading-${section.key}`}
      style={{ "--section-index": sectionIndex }}
    >
      <h2 id={`timeline-heading-${section.key}`} className="timeline-section-heading">
        {section.heading}
      </h2>

      <div className="timeline-section-track">
        <div className="timeline-line" aria-hidden="true" />
        <div className="timeline-rows">
          {section.entries.map((entry, index) => (
            <ExperienceTimelineRow
              key={entry.slug}
              entry={entry}
              index={index}
              isSelected={entry.slug === selectedSlug}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceTimelineSection;
