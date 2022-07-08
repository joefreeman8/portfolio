import AOS from 'aos'
import 'aos/dist/aos.css'

import htmlIcon from '../assets/techUsed/html-5.svg'
import cssIcon from '../assets/techUsed/css3.svg'
import javascriptIcon from '../assets/techUsed/javaScript.svg'
import reactIcon from '../assets/techUsed/react.svg'
import bootstrapIcon from '../assets/techUsed/bootstrap.svg'
import muiIcon from '../assets/techUsed/material-ui.svg'
import bulmaIcon from '../assets/techUsed/bulma.svg'
import tailwindIcon from '../assets/techUsed/tailwind-css-2.svg'

import nodeIcon from '../assets/techUsed/node-js.svg'
import expressIcon from '../assets/techUsed/expressjs-icon.svg'
import mongoIcon from '../assets/techUsed/mongodb.svg'
import pythonIcon from '../assets/techUsed/python.svg'
import djangoIcon from '../assets/techUsed/django.svg'
import insomniaIcon from '../assets/techUsed/insomnia.svg'
import tablePlusIcon from '../assets/techUsed/tableplus-icon.png'
import postgreSQLIcon from '../assets/techUsed/postgresql.svg'

import npmIcon from '../assets/techUsed/npm.svg'
import pipIcon from '../assets/techUsed/folder-python-svgrepo-com.svg'
import homebrewIcon from '../assets/techUsed/homebrew.svg'
import herokuIcon from '../assets/techUsed/heroku-4.svg'
import netlifyIcon from '../assets/techUsed/netlify-icon.svg'
import cloudinaryIcon from '../assets/techUsed/cloudinary-svgrepo-com.svg'
import gitIcon from '../assets/techUsed/git-icon.svg'
import githubIcon from '../assets/techUsed/github.svg'

function Skills() {

  AOS.init({
    duration: 50,
    easing: 'linear',
    once: true,
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
    },
    {
      name: 'Node.js',
      imageSrc: nodeIcon,
    },
    {
      name: 'Express',
      imageSrc: expressIcon,
    },
    {
      name: 'Python',
      imageSrc: pythonIcon,
    },
    {
      name: 'Django',
      imageSrc: djangoIcon,
    },
    {
      name: 'MongoDB',
      imageSrc: mongoIcon,
    },
    {
      name: 'Insomnia',
      imageSrc: insomniaIcon,
    },
    {
      name: 'PostgreSQL',
      imageSrc: postgreSQLIcon,
    },
    {
      name: 'TablePlus',
      imageSrc: tablePlusIcon,
    },
    {
      name: 'NPM',
      imageSrc: npmIcon,
    },
    {
      name: 'pip',
      imageSrc: pipIcon,
    },
    {
      name: 'Homebrew',
      imageSrc: homebrewIcon,
    },
    {
      name: 'Heroku',
      imageSrc: herokuIcon,
    },
    {
      name: 'Netlify',
      imageSrc: netlifyIcon,
    },
    {
      name: 'Cloudinary',
      imageSrc: cloudinaryIcon,
    },
    {
      name: 'Git',
      imageSrc: gitIcon,
    },
    {
      name: 'GitHub',
      imageSrc: githubIcon,
    }
  ]

  return (
    <section className="skills container" id="skills">
      <div data-aos="zoom-in-left">
        <div className="skills-content">
          <h1 className="display-1 mt-5 pt-5" >Tech and Tools</h1>
          <hr className="col-12 bg-dark border-5 border-top border-dark mt-5"></hr>
          <div className="row mt-5 skills-icon-container">
            <div className="h4 fw-bold mb-3">Tech I have experience in using so far:</div>
            <div className="frontend-tech">
              {tags.map((tag, index) => (
                <div className="tech" key={index}>
                  <img className="tech-icons" src={tag.imageSrc} alt={tag.name} />
                  <h4>{tag.name}</h4>
                </div>
              )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills