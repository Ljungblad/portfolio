import React from "react";
import "./view.css";

// Components
import Footer from "../Footer";

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
    <Footer />
  </div>
);

export default View;
