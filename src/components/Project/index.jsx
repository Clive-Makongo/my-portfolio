import React from "react";
import Container from "../Container";
import Row from "../Row";

function Project(props) {
  return (

    <div className="project">
      <Container className="d-flex align-items-center flex-column" style={{ minHeight: "80%" }}>
        <h2>{props[0].title}</h2>
        <img src={props.image} alt="" />
        {console.log(props)}
      </Container>
    </div>
  );
};

export default Project;