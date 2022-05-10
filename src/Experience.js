import * as React from "react";
import './App.css';
import Wscript from './Js/experienceScript';
import Extra from './extra'


function Experience(){
    return(
  <>
  <nav className="navbar">
        <h2>My Resume</h2>
        <input type="checkbox" id="box"></input>
        <label htmlFor="box" className="checkbtn">
          &#9776;
        </label>
        <ul className="links">
          <li><a href="/mygitpage/home">Erik Norell</a></li>
          <li className="active"><a href="/mygitpage/experience">Experience</a></li>
          <li><a href="/mygitpage/education">Education</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="/mygitpage/contact">Contact</a></li>
      </ul>
    </nav>

      <div className="content">

          <div className="content-text">
            <h1>My Work Experience</h1>
            <Wscript/>
            <br/>
            <h4>Other Qualifications</h4>
                <ul>
                    <li>Knowledge and skills in the following computer systems</li>
                  <ul>
                  <li>Hogia Cloud</li>
                  <li>Zhipster</li>
                  <li>Trygg</li>
                  <li>Fleetplaner</li>
                  <li>IFS</li>
                  </ul>
              <li>Good knowledge in Office 365</li>
              <li>B-Driver's license</li>
              <li>Forklift licence</li>
               </ul>
          </div>
        </div>
        <Extra/>
  </>
    );
  }
  export default Experience;

