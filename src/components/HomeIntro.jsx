import ExternalLink from "./ExternalLink";
import "../styles/hero.css";

function HomeIntro() {
  return (
    <section className="hero hero-animate" data-hero aria-label="Introduction">
      <div className="hero-inner layout-shell">
        <div className="hero-profile">
          <img
            src="/profile.png"
            alt="Connor Lam"
            className="hero-profile-img"
            width={104}
            height={104}
          />
        </div>

        <h1 className="hero-headline">
          Hey, I am Connor Lam.
          <br className="d-none d-sm-block" />
          {" "}An incoming fourth-year{" "}
          <ExternalLink href="https://ischool.uw.edu/programs/informatics">
            Informatics
          </ExternalLink>{" "}
          student at the{" "}
          <ExternalLink href="https://www.washington.edu/">
            University of Washington
          </ExternalLink>
          , seeking full-time software roles and building impactful software across{" "}
          <span className="hero-emphasis">frontend</span>,{" "}
          <span className="hero-emphasis">backend</span>, and{" "}
          <span className="hero-emphasis">database systems</span>.
        </h1>

        <p className="hero-subtitle hero-subtitle-animate">
          I'm motivated by creating solutions that genuinely impact others, whether
          it's a post-discharge app for sepsis survivors or a Chrome extension that
          makes AI's environmental footprint visible. I'm comfortable moving across
          the stack and learning new tools quickly when a problem demands it.{" "}
          <ExternalLink href="https://drive.google.com/file/d/1L0uaP0Mxw8Ap8_FTUJPqF1rAN-yK7SQm/view?usp=sharing">
            View my resume
          </ExternalLink>
          .
        </p>
      </div>
    </section>
  );
}

export default HomeIntro;
