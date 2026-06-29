import { Link } from "react-router-dom";
import { getFeaturedProjects } from "../data/projects";
import { useInView } from "../hooks/useInView";
import PosterCard from "./PosterCard";
import "../styles/poster-carousel.css";

function ProjectPosterCarousel() {
  const featured = getFeaturedProjects();
  const [sectionRef, isInView] = useInView();

  return (
    <section
      ref={sectionRef}
      className={`poster-carousel-section ${isInView ? "is-visible" : ""}`}
      aria-labelledby="poster-carousel-heading"
    >
      <header className="poster-carousel-header layout-shell">
        <h2 id="poster-carousel-heading" className="poster-carousel-heading">
          Selected work
        </h2>
        <p className="poster-carousel-intro">
          A few projects where I shipped real software, from a clinical capstone
          to client work and hackathon builds.
        </p>
      </header>

      <div className="poster-carousel-track" role="list">
        {featured.map((project, index) => (
          <div
            key={project.slug}
            className="poster-carousel-item"
            style={{ "--stagger-index": index }}
            role="listitem"
          >
            <PosterCard project={project} />
          </div>
        ))}
      </div>

      <div className="poster-carousel-footer layout-shell">
        <Link to="/projects" className="poster-carousel-more">
          View all projects<span aria-hidden="true"> →</span>
        </Link>
      </div>
    </section>
  );
}

export default ProjectPosterCarousel;
