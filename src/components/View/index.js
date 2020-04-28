import React from "react";
import "./view.css";

const View = (props) => (
  <div
    {...props}
    style={{
      maxWidth: "600px",
      margin: "0 auto",
      width: "100vw",
    }}
  >
    {props.children}
  </div>
);

export default View;
