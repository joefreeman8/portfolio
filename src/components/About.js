import snowboarder from '../assets/snowboarder3.png'
import taz from '../assets/taz.png'
import octopus from '../assets/octopus3.png'

function About() {
  return (
    <>
      <div className="about-container">
        <div className="aboutme-info-container">
          <h2 className="aboutme-title">Hi, I&apos;m Joe!</h2>
          <h6 className="aboutme-subtitle">A recent graduate of a Software Engineering Immersive by General Assembly.</h6>
          <div className="aboutme-paragraphs">
            <p>I previously worked in corporate finance for a period of 5 years, before deciding to take a career break and taking an adventure around the world. Catching that travel bug of course and exploring all the beaches, reefs and mountains I could.</p>
            <br />
            <p>Then everybody&apos;s lives changed, the world stopped, and I returned to the UK. The pandemic had arrived and it offered something very unique to me. It offered the chance to stop, reset and  reassess.</p>
            <br />
            <p>Having always had a natural interest in web development, I finally had the perfect opportunity to test the waters. It started with Codecademy, teaching myself HTML, CSS and some JavaScript, and it then led me to enrolling on a 12 week bootcamp with General Assembly.</p>
            <br />
            <p>Now that I have graduated from the Software Engineering course, I am looking to build on my new skills, grow as a developer and establish myself in an exciting new industry.</p>
          </div>
        </div>
        <div className="interests">
          <div className="interest-one">
            <img src={snowboarder} alt="snowboarder" />
          </div>
          <div className="interest-two">
            <img src={taz} alt="mexico and taz" />
          </div>
          <div className="interest-three">
            <img src={octopus} alt="octopus" />
          </div>

        </div>
      </div>
    </>
  )
}

export default About