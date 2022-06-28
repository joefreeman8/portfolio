import AOS from 'aos'
import 'aos/dist/aos.css'

function Interests() {

  AOS.init({
    offset: 700,
    duration: 500,
    easing: 'linear',
    once: true,
  })


  return (
    <section className="interests container" id="interests">
      <div data-aos="zoom-in-left">
        <h1 className="display-1">My Interests</h1>
        <hr className="bg-dark border-5 border-top border-dark"></hr>
        <div>
          <p>When I&apos;m not at my computer searching the MDN archives, I enjoy following football gossip, listening to music and spending time with my dog, Taz.</p>
          <p>With a love for travel, the three destinations I fancy most are a snowboarding trip to Japan, some diving in the Galapagos and a return trip to Mexico for those prized tacos.</p>
          <p>Below is a mini gallery of some of my favourite photos, the book I am currently reading and of course, my favourite beer!</p>
        </div>
        <div className="mt-5 container container-fluid">
          <div className="row gy-2 gx-2">
            <img className="interests-img col-3" src="https://i.imgur.com/alTthI3.jpg?1" alt="taz" />
            <img className="interests-img col-3" src="https://i.imgur.com/TGkFDXm.jpg?1" alt="fuego" />
            <img className="interests-img col-3" src="https://i.imgur.com/fPH5v4S.jpg?1" alt="octopus" />
            <img className="interests-img col-3" src="https://i.imgur.com/39WvDy6.jpg?1" alt="tazzy" />
            <img className="interests-img col-3" src="https://i.imgur.com/LN8S6ti.jpg?1" alt="lake minnewanka" />
            <img className="interests-img col-3" src="https://i.imgur.com/iwkYGEx.jpg" alt="komodo island" />
            <img className="interests-img col-3" src="https://i.imgur.com/w85ts8J.jpg?1" alt="midnight library" />
            <img className="interests-img col-3" src="https://i.imgur.com/SZ1DN5H.jpg?1" alt="hazy ipa" />
            {/* <img className="interests-img col-3" src="https://i.imgur.com/uGwFxmM.png?1" alt="netflix" /> */}
          </div>
        </div>
        <hr className="bg-dark border-5 border-top border-dark"></hr>
      </div>





    </section>
  )
}
export default Interests