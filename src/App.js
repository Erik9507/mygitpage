import * as React from "react"
import {Routes,Route,Link} from "react-router-dom";
import './App.css';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact'
import Home from './Home'
import Projects from './Projects'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mygitpage/home" element={<Home/>}/>
        <Route path="/mygitpage/experience" element={<Experience/>}/>
        <Route path="/mygitpage/education" element={<Education/>}/>
        <Route path="/mygitpage/projects" element={<Projects/>}/>
        <Route path="/mygitpage/contact" element={<Contact/>}/>
      </Routes>
    </div>
    );
}


export default App;