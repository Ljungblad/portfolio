import React from "react";
import "./view.css";

const View = (props) => (
  <div
    {...props}
    style={{
      margin: "0 auto",
      width: "100vw",
      height: "100vh",
    }}
  >
    {props.children}
    <div>
      <h2>Footer</h2>
    </div>
  </div>
);

export default View;
