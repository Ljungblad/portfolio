import React from "react";
import { Router, Link } from "@reach/router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./App.css";

function App() {
  return (
    <div className="page-wrapper">
      <header>
        <nav>
          <Link className="home" to="/">
            Home
          </Link>
          <Link className="about" to="about">
            About
          </Link>
          <Link className="contact" to="contact">
            Contact
          </Link>
          <Link className="projects" to="projects">
            Projects
          </Link>
        </nav>
        <Router>
          <Home path="/"></Home>
          <About path="about"></About>
          <Contact path="contact"></Contact>
          <Projects path="projects"></Projects>
        </Router>
      </header>
    </div>
  );
}

export default App;
