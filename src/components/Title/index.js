import React from "react";
import "./style.css";

function Title(props) {
  return <h1 className="jumbotron bg-primary">{props.title}</h1>;
}

export default Title;
