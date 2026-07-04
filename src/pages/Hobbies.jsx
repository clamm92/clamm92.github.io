import PageHeader from "../components/PageHeader";
import ExternalLink from "../components/ExternalLink";
import HobbyGallery from "../components/hobbies/HobbyGallery";
import HobbySection from "../components/hobbies/HobbySection";
import { hobbiesGallery, hobbiesSections } from "../data/hobbies";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import "../styles/hobbies.css";

const sectionContent = {
  lifting: (
    <p>
      One of my core passions is weightlifting. Ever since reaching my high school
      leaderboard for squats and cleans, lifting has been a constant in my life.
      I train at least five times a week on a structured split, focusing on
      progressive overload and long-term consistency. The gym is a space where I
      feel grounded and focused and reinforces discipline, self-improvement, and
      steady progress.
    </p>
  ),
  chess: (
    <p>
      Chess is the primary game I play and a favorite way to unwind. I enjoy the
      strategy and competitive nature of the game, and I'm currently rated
      approximately 1900 in rapid and 1800 in blitz and bullet, placing me in the
      top few percent on{" "}
      <ExternalLink href="https://www.chess.com/">Chess.com</ExternalLink>. Chess
      helps me reset mentally while still engaging analytical and strategic
      thinking.
    </p>
  ),
  basketball: (
    <p>
      I have been involved in basketball since childhood both as a player and a fan
      (go <ExternalLink href="https://www.nba.com/blazers/">Blazers!</ExternalLink>
      ). I enjoy the competitive and collaborative aspects of team sports and the
      strategic dynamics of the game. I currently play intramural basketball at the
      University of Washington, and occasionally watch NBA games.
    </p>
  ),
  outdoors: (
    <p>
      Spending time outdoors is an important part of my routine. I enjoy long walks
      throughout the Pacific Northwest, especially in Seattle parks like{" "}
      <ExternalLink href="https://www.seattle.gov/parks/allparks/volunteer-park">
        Volunteer Park
      </ExternalLink>
      ,{" "}
      <ExternalLink href="https://www.seattle.gov/parks/parks/cal-anderson-park">
        Cal Anderson Park
      </ExternalLink>
      , and{" "}
      <ExternalLink href="https://www.seattle.gov/parks/allparks/alki-beach-park">
        Alki Beach
      </ExternalLink>
      , and when visiting my hometown Portland,{" "}
      <ExternalLink href="https://www.portland.gov/parks/mt-tabor-park">
        Mount Tabor Park
      </ExternalLink>{" "}
      and the numerous{" "}
      <ExternalLink href="https://gorgefriends.org/find-a-hike/">
        hikes along the Columbia River Gorge
      </ExternalLink>
      . Being in nature helps clear my mind, practice mindfulness, and feel more
      connected to my surroundings.
    </p>
  ),
  music: (
    <p>
      Although I no longer play the viola or piano regularly, classical music
      remains a strong interest of mine. I enjoy attending University of Washington
      School of Music events, particularly the seasonal{" "}
      <ExternalLink href="https://music.washington.edu/ensembles/campus-philharmonia-orchestras">
        UW Campus Philharmonic Orchestra
      </ExternalLink>{" "}
      concerts. The ambience and live performances provide a calm and meaningful
      counterbalance to my technical work.
    </p>
  ),
};

function Hobbies() {
  useDocumentTitle("Hobbies | Connor Lam");

  return (
    <div className="hobbies-page">
      <PageHeader title="Hobbies">
        Outside of building projects and practicing data structures and algorithms
        through platforms like{" "}
        <ExternalLink href="https://www.neetcode.io/">NeetCode</ExternalLink>, I
        place strong emphasis on maintaining a healthy and balanced lifestyle.
      </PageHeader>

      <div className="hobbies-layout">
        <HobbyGallery photos={hobbiesGallery} />

        <section className="hobbies-journal" aria-label="About my hobbies">
          {hobbiesSections.map((section, index) => (
            <HobbySection key={section.id} title={section.title} index={index}>
              {sectionContent[section.id]}
            </HobbySection>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Hobbies;
