import { useSearchParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import ProjectIndex from "../components/ProjectIndex";
import ProjectDetailPanel from "../components/ProjectDetailPanel";
import { getProjectBySlug, getSortedProjects } from "../data/projects";

function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSlug = searchParams.get("slug");
  const selectedProject = selectedSlug ? getProjectBySlug(selectedSlug) : null;
  const projects = getSortedProjects();

  const openProject = (slug) => setSearchParams({ slug });
  const closePanel = () => setSearchParams({});

  return (
    <>
      <PageHeader title="Projects">
        Everything I've built — full-stack apps, browser extensions, data
        visualizations, and hackathon projects. Select a project to read more.
      </PageHeader>

      <ProjectIndex
        projects={projects}
        selectedSlug={selectedSlug}
        onSelect={openProject}
      />

      {selectedProject && (
        <ProjectDetailPanel
          key={selectedProject.slug}
          project={selectedProject}
          onClose={closePanel}
        />
      )}
    </>
  );
}

export default Projects;
