import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="project-link">
      <Link className="project" to="/github">
        <h3 className="link">Get GitHub user Repository</h3>
        <img src="./github.png" className="app-img" alt="github app"></img>
      </Link>
      <Link className="project" to="/todo">
        <h3 className="link">To Do App</h3>
        <div className="app-img-div">
          <img src="./todo.png" className="app-img" alt="todo app"></img>
        </div>
      </Link>
      <Link className="project" to="/form">
        <h3 className="link">Form Validation</h3>
        <div className="app-img-div">
          <img
            src="./formValid.png"
            className="app-img"
            alt="form validaion app"
          ></img>
        </div>
      </Link>
    </div>
  );
}

export default Home;
