import React from "react";
import "./style.css";

function CardBtn(props) {
  return (
    <button onClick={props.onClick} type="button" className="btn btn-outline-secondary " data-btn={props.id}>
      {props.text}
    </button>
  );
}

export default CardBtn;
