import React from 'react'

import Hero from './components/Hero'
import About from './components/About'
import Interests from './components/Interests'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Nav from './components/Nav'


function App() {
  return (
    <>
      <Nav />
      <div className="container-lg">
        <div className="row">
          <div className="col-11">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Interests />
            <Contact />
          </div>
        </div>
      </div>

    </>
  )
}

export default App
