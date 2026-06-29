import PageHeader from "../components/PageHeader";
import ExperienceTimeline from "../components/experience/ExperienceTimeline";
import DetailPanel from "../components/detail/DetailPanel";
import DetailContentComposer from "../components/detail/DetailContentComposer";
import ExperienceDetailHeader from "../components/experience/ExperienceDetailHeader";
import { getExperienceBySlug } from "../data/experience";
import { useSlugSelection } from "../hooks/useSlugSelection";

function Experience() {
  const { slug: selectedSlug, select, clear } = useSlugSelection();
  const selectedEntry = selectedSlug ? getExperienceBySlug(selectedSlug) : null;

  return (
    <>
      <PageHeader title="Experience">
        Education, internships, and work so far. Select an entry to read more, or{" "}
        <a
          href="https://drive.google.com/file/d/1L0uaP0Mxw8Ap8_FTUJPqF1rAN-yK7SQm/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          view my resume
        </a>
        .
      </PageHeader>

      <ExperienceTimeline selectedSlug={selectedSlug} onSelect={select} />

      {selectedEntry && (
        <DetailPanel
          key={selectedEntry.slug}
          titleId="experience-panel-title"
          closeLabel="Close experience details"
          onClose={clear}
          header={<ExperienceDetailHeader entry={selectedEntry} />}
        >
          <DetailContentComposer blocks={selectedEntry.contentBlocks} />
        </DetailPanel>
      )}
    </>
  );
}

export default Experience;
