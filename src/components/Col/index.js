import React from "react";

function Col(props) {

  return <div className="col" style={props.style}>{props.children}</div>;

}

export default Col;
