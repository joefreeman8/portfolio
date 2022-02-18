import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <nav>
      <div className="navbar">
        <Link className="" to="/about">About Me</Link>
        <Link className="" to="/skills">Skills</Link>
        <Link className="" to="/projects">Projects</Link>
        <Link className="" to="/contact">contact</Link>
      </div>
    </nav>
  )
}

export default Nav