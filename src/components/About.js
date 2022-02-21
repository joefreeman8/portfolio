import AOS from 'aos'
import 'aos/dist/aos.css'

function About() {

  AOS.init({
    offset: 700,
    duration: 500,
    easing: 'linear',
    once: true,
  })

  return (
    <section className="about container row" id="about">
      <div className="aboutme-contents col-7 " data-aos="zoom-in-right" >
        <h2 className="aboutme-title">Hi, I&apos;m Joe!
          {/* <img className="col-4" src="https://i.imgur.com/3DGre8r.jpg?1" alt="joe and taz" /> */}
        </h2>
        <h4 className="aboutme-subtitle fw-bold text-uppercase">A recent graduate of a Software Engineering Immersive by General Assembly.</h4>
        <div>
          <p className="aboutme-paragraphs mt-3">Having previously worked in corporate finance for a period of 5 years. I took a career break and the adventure of a lifetime around the world, exploring all the beaches, reefs and mountains I could.</p>
          <p className="aboutme-paragraphs">Then came the pandemic, everybody&apos;s lives changed and the world stopped. This offered me the rare chance to stop and take the time to try something new.</p>
          <p className="aboutme-paragraphs">Having always had a natural interest in web development, I finally had the perfect opportunity to test the waters. It started with Codecademy, teaching myself HTML, CSS and some JavaScript, and it then led me to enrolling on a 12 week bootcamp with General Assembly.</p>
          <p className="aboutme-paragraphs">Now that I have graduated from the Software Engineering course, I am eager to build on my new skills, grow as a developer and establish myself in an exciting new industry.</p>
          <div className="social-media">
            <div className="about-icon">
              <a href="https://github.com/joefreeman8" className="icon-link" target="_blank" rel="noreferrer">
                <i><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" /></svg></i>
              </a>
            </div>
            <div className="about-icon">
              <a href="https://www.linkedin.com/in/joefreeman8" className="icon-link" target="_blank" rel="noreferrer">
                <i><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></i>
              </a>
            </div>
            <div className="about-icon">
              <a href="mailto:joefreeman8@gmail.com" className="icon-link" target="_blank" rel="noreferrer">
                <i><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 122.88 122.88"><path d="M25.2,0H97.68a25.27,25.27,0,0,1,25.2,25.2V97.68a25.27,25.27,0,0,1-25.2,25.2H25.2A25.27,25.27,0,0,1,0,97.68V25.2A25.27,25.27,0,0,1,25.2,0Zm4.1,37.59L62,64.26,93.33,37.59ZM27.19,82.48l23.3-23.37-23.3-19V82.48ZM53.06,61.21,29,85.29H93.65l-23-24.08-7.57,6.45h0a1.66,1.66,0,0,1-2.12,0l-7.94-6.48ZM73.2,59.07,95.69,82.66V39.9L73.2,59.07Z" /></svg></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-3" data-aos="zoom-in-left">
        <img className="col-12 picture-joe" src="https://i.imgur.com/3DGre8r.jpg?1" alt="joe and taz" />
        {/* <img className="col-12" src="https://i.imgur.com/JWVnfPS.jpg?1" alt="joe and taz" /> */}
      </div>


    </section>
  )
}

export default About