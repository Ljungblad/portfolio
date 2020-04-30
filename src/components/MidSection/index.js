import React from "react";
import "./mid-section.css";

const MidSection = (props) => {
  return (
    <div className="mid-section-wrapper">
      <h3 className="mid-section-title">{props.midTitle}</h3>
      <div className="mid-section-textbox">{props.midBodyText}</div>
    </div>
  );
};

export default MidSection;
