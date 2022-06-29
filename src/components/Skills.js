import AOS from 'aos'
import 'aos/dist/aos.css'

import htmlIcon from '../assets/techUsed/icons8-html-5.svg'
import cssIcon from '../assets/techUsed/icons8-css3.svg'
import javascriptIcon from '../assets/techUsed/icons8-javascript.svg'
import reactIcon from '../assets/techUsed/icons8-react-native.svg'
import bootstrapIcon from '../assets/techUsed/bootstrap-fill.svg'
import muiIcon from '../assets/techUsed/material-ui.svg'
import bulmaIcon from '../assets/techUsed/bulma.svg'
import tailwindIcon from '../assets/techUsed/tailwind-css-2.svg'


function Skills() {

  AOS.init({
    offset: 700,
    duration: 500,
    easing: 'linear',

  })

  const tags = [
    {
      name: 'HTML5',
      imageSrc: htmlIcon,
    },
    {
      name: 'CSS3',
      imageSrc: cssIcon,
    },
    {
      name: 'JavaScript',
      imageSrc: javascriptIcon,
    },
    {
      name: 'React.js',
      imageSrc: reactIcon,
    },
    {
      name: 'Bootstrap',
      imageSrc: bootstrapIcon,
    },
    {
      name: 'Material UI',
      imageSrc: muiIcon,
    },
    {
      name: 'Bulma',
      imageSrc: bulmaIcon,
    },
    {
      name: 'Tailwind',
      imageSrc: tailwindIcon,
    }

  ]

  return (
    <section className="skills container" id="skills">
      <div data-aos="zoom-in-left">
        <h1 className="display-1 mt-5 pt-5" >Skills and Tools</h1>
        <hr className="col-12 bg-dark border-5 border-top border-dark mt-5"></hr>
        <div className="row mt-5">
          <div className="frontend-tech">
            {tags.map((tag, index) => (
              <div className="tech" key={index}>
                <img src={tag.imageSrc} alt={tag.name} height="70" />
                <h4>{tag.name}</h4>
              </div>
            )
            )}
          </div>
        </div>
      </div>
    </section>
  )
  //   <section className="skills container" id="skills">
  //     <div data-aos="zoom-in-left">
  //       <h1 className="display-1 mt-5 pt-5" >Skills and Tools</h1>
  //       <hr className="col-12 bg-dark border-5 border-top border-dark mt-5"></hr>
  //       <div className="row mt-5">
  //         <ul className="col">
  //           <div className="h4 fw-bold mb-3">FRONT END</div>
  //           <li className="mb-2">
  //             <img src={htmlIcon} height="70" className="skill-icon" />
  //             <p className="skill-caption p2">
  //               HTML
  //             </p>
  //           </li>
  //           <li className="mb-2">
  //             <img src={cssIcon} height="70" className="skill-icon" />
  //             <p className="skill-caption p2">
  //               CSS
  //             </p>
  //           </li>
  //           <li className="mb-2">
  //             <img src={javascriptIcon} height="70" className="skill-icon" />
  //             <p className="skill-caption p2">
  //               JavaScript
  //             </p>
  //           </li>
  //           <li className="mb-2">
  //             <img src={reactIcon} height="70" className="skill-icon" />
  //             <p className="skill-caption p2">
  //               React.js
  //             </p>
  //           </li>
  //           <li className="mb-2">
  //             <img src={bootstrapIcon} height="70" className="skill-icon" />
  //             <p className="skill-caption p2">
  //               Bootstrap
  //             </p>
  //           </li>
  //           <li className="mb-2">
  //             <img src={muiIcon} height="70" className="skill-icon" />
  //             <p className="skill-caption p2">
  //               Material UI
  //             </p>
  //           </li>
  //           <li className="mb-2">
  //             <img src={bulmaIcon} height="70" className="skill-icon" />
  //             <p className="skill-caption p2">
  //               Bulma
  //             </p>
  //           </li>
  //           <li className="mb-2">
  //             <img src={tailwindIcon} height="70" className="skill-icon" />
  //             <p className="skill-caption p2">
  //               Tailwind
  //             </p>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </section>
  // )




  //   <section className="skills container" id="skills">
  //     <div data-aos="zoom-in-left">
  //       <h1 className="display-1 mt-5 pt-5" >Skills and Tools</h1>
  //       <hr className="col-12 bg-dark border-5 border-top border-dark mt-5"></hr>
  //       <div className="row mt-5">
  //         <ul className="col">
  //           <div className="h4 fw-bold mb-3">FRONT END</div>
  //           <li className="mb-2">HTML5</li>
  //           <li className="mb-2">CSS</li>
  //           <li className="mb-2">JavaScript</li>
  //           <li className="mb-2">React.js</li>
  //           <li className="mb-2">SASS</li>
  //           <li className="mb-2">Bulma</li>
  //           <li className="mb-2">Bootstrap</li>
  //           <li className="mb-2">Tailwind</li>
  //           <li className="mb-2">MUI</li>
  //         </ul>
  //         <ul className="col">
  //           <div className="h4 fw-bold mb-3">BACK END</div>
  //           <li className="mb-2">Node.js</li>
  //           <li className="mb-2">Mongoose</li>
  //           <li className="mb-2">Python 3</li>
  //           <li className="mb-2">Django</li>
  //           <li className="mb-2">Insomnia</li>
  //           <li className="mb-2">TablePlus</li>
  //         </ul>
  //         <ul className="col">
  //           <div className="h4 fw-bold mb-3">PACKAGE</div>
  //           <li className="mb-2">npm</li>
  //           <li className="mb-2">pip</li>
  //           <br></br>
  //           <div className="h4 fw-bold mb-3">STORAGE</div>
  //           <li className="mb-2">Heroku</li>
  //           <li className="mb-2">Netlify</li>
  //           <li className="mb-2">Cloudinary</li>
  //         </ul>
  //         <ul className="col">
  //           <div className="h4 fw-bold mb-3">VERSION CONTROLS</div>
  //           <li className="mb-2">Git</li>
  //           <li className="mb-2">GitHub</li>
  //         </ul>
  //         <hr className="bg-dark border-5 border-top border-dark"></hr>
  //       </div>
  //     </div>
  //   </section>
  // )
}

export default Skills