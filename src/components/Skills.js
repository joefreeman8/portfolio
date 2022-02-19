import AOS from 'aos'
import 'aos/dist/aos.css'

function Skills() {

  AOS.init({
    delay: 500,
    duration: 3000,
    easing: 'ease',

  })
  return (
    <div className="skills container" id="skills">
      <div data-aos="flip-up">
        <h1 className="display-1 mt-5" >Skills and Tools</h1>
        <hr className="col-12 bg-dark border-5 border-top border-dark mt-5"></hr>
        <div className="row mt-5">
          <ul className="col">
            <div className="h5 fw-bold mb-3">FRONT END</div>
            <li className="mb-2">HTML5</li>
            <li className="mb-2">CSS</li>
            <li className="mb-2">JavaScript</li>
            <li className="mb-2">React.js</li>
            <li className="mb-2">SASS</li>
            <li className="mb-2">Bulma</li>
            <li className="mb-2">Bootstrap</li>
            <li className="mb-2">Tailwind</li>
            <li className="mb-2">MUI</li>
          </ul>
          <ul className="col">
            <div className="h5 fw-bold mb-3">BACK END</div>
            <li className="mb-2">Node.js</li>
            <li className="mb-2">Mongoose</li>
            <li className="mb-2">Python 3</li>
            <li className="mb-2">Django</li>
            <li className="mb-2">Insomnia</li>
            <li className="mb-2">TablePlus</li>
          </ul>
          <ul className="col">
            <div className="h5 fw-bold mb-3">PACKAGE</div>
            <li className="mb-2">npm</li>
            <li className="mb-2">pip</li>
            <br></br>
            <div className="h5 fw-bold mb-3">STORAGE</div>
            <li className="mb-2">Heroku</li>
            <li className="mb-2">Netlify</li>
            <li className="mb-2">Cloudinary</li>
          </ul>
          <ul className="col">
            <div className="h5 fw-bold mb-3">VERSION CONTROLS</div>
            <li className="mb-2">Git</li>
            <li className="mb-2">GitHub</li>
          </ul>
        </div>
        <hr className="bg-dark border-5 border-top border-dark"></hr>
      </div>
    </div>
  )
}

export default Skills