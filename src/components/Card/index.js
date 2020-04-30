import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card-wrapper">
      <img
        className="card-img"
        src={props.imgURL}
        alt="Project"
        loading="lazy"
      />
      <div className="card-content-container">
        <h5 className="card-title">{props.cardTitle}</h5>
        <a href={props.projectURL}>
          <button className="card-btn">Visit Website</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
