import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vinoba Bhardwaj </span>
            from <span className="purple"> Ambala, Haryana, India.</span>
            <br /> I am a dedicated React.js developer with two years of full-time experience. My primary objective is to continually expand my expertise in the field, fostering a successful and progressive career.
            <br />
            Additionally, I am currently employed as a Associate software developer at
            Keymouse IT services.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Fitness & Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Current Affairs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
