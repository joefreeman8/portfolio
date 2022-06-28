import React from 'react'


function Nav() {
  return (
    <nav className="">
      <div className="joeFreeman">
        Joe Freeman
      </div>
      <div className="nav navbar navbar-expand{-sm|-md|-lg|-xl|-xxl} text-decoration-none">

        <a className="text-decoration-none nav-item" href="#about">About</a>
        <a className="text-decoration-none nav-item" href="#skills">Skills</a>
        <a className="text-decoration-none nav-item" href="#projects">Projects</a>
        <a className="text-decoration-none nav-item" href="#interests">Interests</a>
        <a className="text-decoration-none nav-item" href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Nav