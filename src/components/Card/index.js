import React from "react";
import "./card.css";

const Card = (props) => {
  const [isHidden, setIsHidden] = React.useState("");

  const toggleHideImg = () => {
    const updatedImg = isHidden === "hidden" ? "" : "hidden";
    setIsHidden(updatedImg);
  };

  return (
    <div className="card-wrapper">
      <img
        className={`card-img ${isHidden}`}
        src={props.imgURL}
        alt="Project"
        loading="lazy"
        onClick={toggleHideImg}
      />
      <div className="card-content-container">
        <h5 className="card-title" onClick={toggleHideImg}>
          {props.cardTitle}
        </h5>
        <a href={props.projectURL}>
          <button className="card-btn">Visit Website</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
