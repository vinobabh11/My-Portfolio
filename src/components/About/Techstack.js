import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiAngularjs,
  SiRedux,
  SiNestjs,
  SiStrapi 
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> 
        <p style={{fontSize: '20px'}}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{fontSize: '20px'}}>React.Js</p>
      </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNextdotjs />
          <p style={{fontSize: '20px'}}>Next.Js</p>
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngularjs />
        <p style={{fontSize: '20px'}}>Angular (7+)</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <p style={{fontSize: '20px'}}>Redux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{fontSize: '20px'}}>NodeJs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNestjs /> 
        <p style={{fontSize: '20px'}}>NestJs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{fontSize: '20px'}}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{fontSize: '20px'}}>GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStrapi />
        <p style={{fontSize: '20px'}}>Strapi</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p style={{fontSize: '20px'}}>FireBase</p>
      </Col>
    </Row>
  );
}

export default Techstack;
