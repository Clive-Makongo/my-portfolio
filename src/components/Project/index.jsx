import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./style.css";

function Project(props) {
  return (

    <div className="project">
      <Container className="d-flex align-items-center flex-column" style={{ minHeight: "80%" }}>
        <Row>
          <h4 className="title">{props[0].title}</h4>
        </Row>
        <Row>
          <Col size="md-9">
            <img id="project-pics" src={props[0].image} alt="" />
          </Col>
          <Col size="md-3">
            <div className="d-flex flex-column justify-content-around align-items-start project-text">
              <p > <strong>Link to application: </strong>  <br /> {props[0].pages}</p>
              <p> <strong>Link to Github:</strong> <br /> {props[0].github}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Project;