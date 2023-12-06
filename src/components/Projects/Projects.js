import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import musicPlayer from "../../Assets/Projects/music-player.png";
import gitSearch from "../../Assets/Projects/git-search.png";
import sunnySide from "../../Assets/Projects/sunny-side.png";
import kidadvisor from "../../Assets/Projects/kidadvisor.png";
import vkh from "../../Assets/Projects/vkh.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={musicPlayer}
              isBlog={false}
              title="Music Player"
              description="It's a music player in ReactJs and Bootstrap. It has a Static library in it which comes through the some api. We can manage the music and move it Forward and Backward. Also able to skip the song and play next song."
              ghLink="https://github.com/vinobabh11/Music-player-app"
              demoLink="https://vinobabh11.github.io/Music-player-app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gitSearch}
              isBlog={false}
              title="Git Search"
              description="This is a search engine for github user. I have used github api to call and search the user. I have implemented light and dark mode in it. Used react, bootstrap and axios."
              ghLink="https://github.com/vinobabh11/git-search-app"
              demoLink="https://vinobabh11.github.io/git-search-app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sunnySide}
              isBlog={false}
              title="Responsive website in Html"
              description="Basic responsive website in HTML, CSS, Javascript."
              ghLink="https://github.com/vinobabh11/Sunnyside_website"
              demoLink="https://vinobabh11.github.io/Sunnyside_website/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kidadvisor}
              isBlog={false}
              title="KidAdvisor"
              description="A Canada-based website catering to users seeking information about local activities, including dining, adventure, and sports options."
              liveLink="https://www.kidadvisor.ca/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vkh}
              isBlog={false}
              title="Seforall"
              description="A platform dedicated to enhancing knowledge about renewable energy
              resources of all kinds"
              liveLink="https://policyhub.seforall.org/en" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
