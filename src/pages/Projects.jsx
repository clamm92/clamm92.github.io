import { useCallback, useRef } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import ProjectIndex from "../components/ProjectIndex";
import ProjectDetailPanel from "../components/ProjectDetailPanel";
import { getProjectBySlug, getSortedProjects } from "../data/projects";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useSlugSelection } from "../hooks/useSlugSelection";

function Projects() {
  useDocumentTitle("Projects | Connor Lam");
  const location = useLocation();
  const { slug: selectedSlug, select, clear } = useSlugSelection();
  const selectedProject = selectedSlug ? getProjectBySlug(selectedSlug) : null;
  const projects = getSortedProjects();
  const scrollToTopOnCloseRef = useRef(
    Boolean(location.state?.scrollProjectsToTopOnClose)
  );

  const handleClose = useCallback(() => {
    clear();
    if (scrollToTopOnCloseRef.current) {
      scrollToTopOnCloseRef.current = false;
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [clear]);

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
          onClose={handleClose}
        />
      )}
    </>
  );
}

export default Projects;
