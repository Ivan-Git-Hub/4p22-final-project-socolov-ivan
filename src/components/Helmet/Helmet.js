import React from "react";

const Helmet = (props) => {
  document.title = "4p22-final-project-socolov-ivan - " + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
