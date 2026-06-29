import { getTimelineSections } from "../../data/experienceConfig";
import { experienceData } from "../../data/experience";
import ExperienceTimelineSection from "./ExperienceTimelineSection";
import "../../styles/experience-timeline.css";

function ExperienceTimeline({ selectedSlug, onSelect }) {
  const sections = getTimelineSections(experienceData);

  return (
    <div className="experience-timeline" aria-label="Experience timeline">
      {sections.map((section, index) => (
        <ExperienceTimelineSection
          key={section.key}
          section={section}
          sectionIndex={index}
          selectedSlug={selectedSlug}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default ExperienceTimeline;
