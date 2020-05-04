import React from "react";
import ReactLoading from "react-loading";
import "./loader.css";

const Loader = (props) => {
  return (
    <div className="loading-container">
      <ReactLoading type="bars" color={props.color} />
    </div>
  );
};

export default Loader;
