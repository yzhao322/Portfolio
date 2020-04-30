import React from "react";
import "./style.css";

function Container(props) {
  return (
    <div className="container" id="container">
      <h2>{props.name}</h2>
    </div>
  )
}

export default Container;
