import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero hero-animate" data-hero>
      <div className="hero-inner layout-shell">
        <h1 className="hero-headline">
          Hey, I am Connor Lam.
          <br className="d-none d-sm-block" />
          {" "}A third-year{" "}
          <a
            href="https://ischool.uw.edu/programs/informatics"
            target="_blank"
            rel="noopener noreferrer"
          >
            Informatics
          </a>{" "}
          student at the{" "}
          <a
            href="https://www.washington.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            University of Washington
          </a>
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
          <a
            href="https://drive.google.com/file/d/1L0uaP0Mxw8Ap8_FTUJPqF1rAN-yK7SQm/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View my resume
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default Hero;
