import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

function Navigation() {

  return (

    <Navbar className="nav" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand className="joe-freeman" href="#hero">JF</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="navbar" id="basic-navbar-nav">
          <Nav>
            <Nav.Link className="nav-item" href="#about">About</Nav.Link>
            <Nav.Link className="nav-item" href="#skills">Skills</Nav.Link>
            <Nav.Link className="nav-item" href="#projects">Projects</Nav.Link>
            <Nav.Link className="nav-item"  href="#interests">Interests</Nav.Link>
            <Nav.Link className="nav-item" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation