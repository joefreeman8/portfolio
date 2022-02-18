import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Nav from './components/Nav'


function App() {
  return (
    <>
      <Router>
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Router>
    </>
  )
}

export default App
