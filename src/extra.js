import * as React from "react"

import gh from '../src/img/GitHub.png';
import li from '../src/img/Linked-in.png';
import './App.css';

function Extra(){
    return(
        <>
        <div className="extra">
          <div className="bild">
          </div>
          <a
            href="https://www.linkedin.com/in/erik-norell-738b6115b/"
            target="blank"
          >
            <button>
              <img className="icon" src={li} alt="Linked-in" /> LinkedIn
            </button>
          </a>
    
          <a href="https://github.com/Erik9507" target="blank">
            <button>
              <img className="icon" src={gh} alt="GitHub" /> GitHub
            </button>
          </a>
        </div>
        <footer>Copyright &copy; 2022 by Erik Norell</footer>
        </>
    )
}
export default Extra;