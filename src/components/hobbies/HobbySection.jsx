import { useInView } from "../../hooks/useInView";

function HobbySection({ title, index, children }) {
  const [sectionRef, isInView] = useInView();
  const headingId = `hobby-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <section
      ref={sectionRef}
      className={`hobby-section ${isInView ? "is-visible" : ""}`}
      style={{ "--section-index": index }}
      aria-labelledby={headingId}
    >
      <h2 id={headingId} className="hobby-section-title">
        {title}
      </h2>
      <div className="hobby-prose">{children}</div>
    </section>
  );
}

export default HobbySection;
