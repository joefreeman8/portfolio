import React from 'react'
import pawhub from '../assets/pawhub.png'
import sniff from '../assets/sniff.png'
import finalspace from '../assets/finalspace.png'

function Projects() {
  return (
    <div className="container projects" id="projects" >
      <h1 className="display-1">My Projects</h1>
      <div className="projects-table row row-cols-2 m-5">
        <div className="col">
          <div className="d-flex justify-content-center ">
            <h3 className="display-3">PawHub</h3>
          </div>
          <img className="project-image col" src={pawhub} alt="pawhub" />
          <p className="col">A full-stack app created with <strong>Python, Django, React.js & TailwindCSS.</strong> A clone of the website the Dogs Trust, this app will allow you to browse, favourite and leave comments on the dogs you like.</p>
        </div>
        <div className="col">
          <div className="d-flex justify-content-center ">
            <h3 className="display-3">Sniff</h3>
          </div>
          <img className="project-image col" src={sniff} alt="sniff" />
          <p className="col">A full-stack <strong>MERN</strong> app - <strong>MongoDB, Express.js, React.js & Node.js with CRUD functionality.</strong> Just what 2022 needs - a dating app for animals. Here you can sign up, sign in & initiate chats with other animals on the app.</p>
        </div>
        <div className="col">
          <div className="d-flex justify-content-center ">
            <h3 className="display-3">Final Space</h3>
          </div>
          <img className="project-image col" src={finalspace} alt="final space" />
          <p className="col">A full-stack <strong>MERN</strong> app - <strong>MongoDB, Express.js, React.js & Node.js with CRUD functionality.</strong> Just what 2022 needs - a dating app for animals. Here you can sign up, sign in & initiate chats with other animals on the app.</p>
        </div>
        <div className="col card">Poke-Dash</div>
      </div>
    </div>

  )
}

export default Projects