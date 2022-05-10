import * as React from "react";
import "./App.css";
import EDU from "./Js/educationScript";
import Extra from "./extra";

function Education() {
  return (
    <>
      <nav class="navbar">
        <h2>My Resume</h2>
        <input type="checkbox" id="box" />
        <label for="box" class="checkbtn">
          &#9776;
        </label>
        <ul class="links">
          <li><a href="/mygitpage/home">Erik Norell</a></li>
          <li><a href="/mygitpage/experience">Experience</a></li>
          <li class="active"><a href="/mygitpage/education">Education</a></li>
          <li><a href="/mygitpage/projects">Projects</a></li>
          <li><a href="/mygitpage/contact">Contact</a></li>
        </ul>
      </nav>
      <div class="content">
        <div class="content-text">
          <h1>My Education</h1>
          <div class="container">
            <EDU/>
          </div>

          <br />
        </div>
      </div>
      <Extra />
    </>
  );
}
export default Education;
