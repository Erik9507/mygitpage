import * as React from "react"
import './App.css';
import phoneImg from '../src/img/outline_phone_iphone_black_24dp.png'
import homeImg from '../src/img/outline_home_black_24dp.png'
import mailImg from '../src/img/outline_email_black_24dp.png'
import Extra from './extra'

function Experience(){
    return(
  <>
  <nav class="navbar">
      <h2>My Resume</h2>
      <input type="checkbox" id="box" />
      <label for="box" class="checkbtn"> &#9776; </label>
      <ul class="links">
      <li><a href="/mygitpage/home">Erik Norell</a></li>
      <li><a href="/mygitpage/experience">Experience</a></li>
      <li><a href="/mygitpage/education">Education</a></li>
        <li><a href="/mygitpage/projects">Projects</a></li>
        <li class="active"><a href="/mygitpage/contact">Contact</a></li>
      </ul>
    </nav>
    <div class="content">
      <div class="content-text">
        <h1>Contact Information</h1>

        <button>
          <img
            class="icon"
            src={phoneImg}
            alt="Phone-icon"
          /><span class="first">Show Number</span
          ><span class="sec">0738432077</span>
        </button>
        <br />

        <button>
          <img
            class="icon"
            src={homeImg}
            alt="Home-icon"
          /><span class="first">Show Adress</span
          ><span class="sec">Snidaregatan 13</span>
        </button>
        <br />
        <button>
          <img
            class="icon"
            src={mailImg}
            alt="mail-icon"
          /><span class="first">Show E-Mail</span
          ><span class="sec">eriknorell1995@gmail.com</span>
        </button>
        <br />

        <h3>Get in touch</h3>
        <p>
          Feel free to contact me. To the right is a link to my Linked-in
          profile. You can also give me a call, send me a text or an E-mail and
          i will get back to you as soon as i can.
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </p>
      </div>
    </div>
    <Extra/>
  </>
    );
  }
  export default Experience;