import * as React from "react"
import './App.css';
import Repos from './GithubRepos';
import gh from '../src/img/GitHub.png';
import Extra from './extra'

function Home(){
    return(
      <>
       <nav class="navbar">
      <h2>My Resume</h2>
      <input type="checkbox" id="box" />
      <label for="box" class="checkbtn"> &#9776; </label>
      <ul class="links">
        <li><a href="/mygitpage/home/">Erik Norell</a></li>
        <li><a href="/mygitpage/experience/">Experience</a></li>
        <li><a href="/mygitpage/education/">Education</a></li>
        <li class="active"><a href="/mygitpage/projects/">Projects</a></li>
        <li><a href="/mygitpage/contact/">Contact</a></li>
      </ul>
    </nav>
    <div class="content">
      <div class="content-text">
        <h1>My projects <img className="icon" src={gh} alt="GitHub" /></h1>
        <Repos />
      </div>
    </div>
    <Extra/>
      </>
    );
  }
  export default Home;