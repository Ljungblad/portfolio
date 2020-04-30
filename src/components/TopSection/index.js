import React from "react";
import "./top-section.css";

const TopSection = (props) => {
  return (
    <div className="top-section-wrapper">
      <h1 className="top-section-title">{props.title}</h1>
      <div>
        <div className="top-section-textbox">{props.bodyText}</div>
        <div className="top-section-image-container">
          <img
            className="top-section-profile-img"
            src={props.portraitImg}
            alt="portrait"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
