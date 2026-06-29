import PageHeader from "../components/PageHeader";
import ProjectIndex from "../components/ProjectIndex";
import ProjectDetailPanel from "../components/ProjectDetailPanel";
import { getProjectBySlug, getSortedProjects } from "../data/projects";
import { useSlugSelection } from "../hooks/useSlugSelection";

function Projects() {
  const { slug: selectedSlug, select, clear } = useSlugSelection();
  const selectedProject = selectedSlug ? getProjectBySlug(selectedSlug) : null;
  const projects = getSortedProjects();

  return (
    <>
      <PageHeader title="Projects">
        Every project I've built: full-stack apps, browser extensions, data
        visualizations, and hackathon projects. Select a project to read more.
      </PageHeader>

      <ProjectIndex
        projects={projects}
        selectedSlug={selectedSlug}
        onSelect={select}
      />

      {selectedProject && (
        <ProjectDetailPanel
          key={selectedProject.slug}
          project={selectedProject}
          onClose={clear}
        />
      )}
    </>
  );
}

export default Projects;
