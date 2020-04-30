import React from "react";
import "./top-section.css";

const TopSection = (props) => {
  return (
    <div className="top-section">
      <h1>{props.title}</h1>
      <div>
        <div className="text-wrapper">{props.bodyText}</div>
        <div className="image-container">
          <img
            className="profile-img"
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
