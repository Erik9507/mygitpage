import * as React from "react"
import './App.css';
import script from './Js/homeScript';
import Extra from './extra'


function Home(){
    return(
      <>
       <nav className="navbar">
        <h2>My Resume</h2>
        <input type="checkbox" id="box" />
        <label htmlFor="box" className="checkbtn">&#9776;</label>     
        <ul className="links">
          <li className="active"><a href="/mygitpage/home">Erik Norell</a></li>
          <li><a href="/mygitpage/experience/">Experience</a></li>
          <li><a href="/mygitpage/education/">Education</a></li>
          <li><a href="/mygitpage/projects/">Projects</a></li>
          <li><a href="/mygitpage/contact/">Contact</a></li>
        </ul>
      </nav>
      <div id="easterEgg"></div>
      <div className="content">
        <div id="meme"></div>
  
        <div className="content-text">
          <button id="hiddenMeme">.</button>
          <h1>About Me</h1>
          
          <p>
            Driven prospective system developer with an interest in problem
            solving. Striving to deepen my knowledge and skills in system
            development. I have a great interest in frontend development and also
            Web APIs
          </p>
          <h3>More about me</h3>
          <p>
            I am an active person with a great interest in training in various
            forms. I play a lot of paddle, mountain climbing and strength
            training. Besides traing i have a big interest in movies and music. I
            am also very social and spend alot of time with friends and family.
          </p>
          <br />
          <h1>My Home Office</h1>
          
        </div>
      </div>
      <Extra />
      <script src ={script}></script>
      </>
  
    );
  }
  export default Home;