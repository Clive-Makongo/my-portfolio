import React from "react";
import "./style.css";

function CardBtn(props) {
  return (
    <button onClick={props.onClick} type="button" class="btn btn-outline-secondary">
      {props.text}
    </button>
  );
}

export default CardBtn;
