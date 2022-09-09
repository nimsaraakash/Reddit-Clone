import React from "react";
import "./Styles/LeftSideBar.css";

function SectionTitle(props) {
  return (
    <div>
      <h1 className="section-title">{props.title}</h1>
    </div>
  );
}

export default SectionTitle;
