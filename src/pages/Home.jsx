import HomeIntro from "../components/HomeIntro";
import ProjectPosterCarousel from "../components/ProjectPosterCarousel";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

function Home() {
  useDocumentTitle("Connor Lam");
  return (
    <>
      <HomeIntro />
      <ProjectPosterCarousel />
    </>
  );
}

export default Home;
