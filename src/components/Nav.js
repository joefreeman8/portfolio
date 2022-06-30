import React from 'react'


function Nav() {
  return (
    <nav className="sticky-top">
      <div className="nav navbar navbar-expand{-sm|-md|-lg|-xl|-xxl} text-decoration-none">
        <a className="joe-freeman" href="#hero">JF</a>
      </div>
      <div className="nav navbar navbar-expand{-sm|-md|-lg|-xl|-xxl} text-decoration-none">

        <a className="nav-item" href="#about">About</a>
        <a className="nav-item" href="#skills">Skills</a>
        <a className="nav-item" href="#projects">Projects</a>
        <a className="nav-item" href="#interests">Interests</a>
        <a className="nav-item" href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Nav