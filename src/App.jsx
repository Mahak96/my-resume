import { useState } from 'react'
import './App.css'
import Contact from './components/contact';
import Education from './components/education';
import Experience from './components/experience';
import Projects from './components/projects';
import Skills from './components/skills';
import Certificate from './components/certificate';

function App() {


  return (
    <>
      <div>
       <h1>MAHAK</h1>
           <Contact />
           <Education />
           <Experience />
           <Projects />
           <Skills />
           <Certificate />
      </div>
      
    </>
  )
}

export default App
