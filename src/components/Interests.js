import fuego from '../assets/fuego.jpg'
import tazzy from '../assets/tazzy.jpg'
import octopus from '../assets/octopus.jpg'
import lava from '../assets/lava.jpg'
import iguazu from '../assets/iguazu.jpg'
import jurassic from '../assets/Jurassic.jpg'
import minnewanka from '../assets/Minnewanka.jpg'

function Interests() {

  return (
    <div className="container interests ">
      <h1 className="display-1" id="interests">My Interests</h1>
      <div className="row d-flex justify-content-around flex-nowrap">
        <div className="interest-pic col">
          <img className="photosizing" src={fuego} alt="fuego" />
        </div>
        <div className="interest-pic col">
          <img className="photosizing" src={tazzy} alt="taz" />
        </div>
        <div className="interest-pic col">
          <img className="photosizing" src={octopus} alt="octopus" />
        </div>
        <div className="interest-pic col">
          <img className="photosizing" src={iguazu} alt="iguazu" />
        </div>
        <div className="interest-pic col">
          <img className="photosizing" src={lava} alt="lava" />
        </div>
        <div className="interest-pic col">
          <img className="photosizing" src={jurassic} alt="jurassic" />
        </div>
        <div className="interest-pic col">
          <img className="photosizing" src={minnewanka} alt="minnewanka" />
        </div>


      </div>
    </div>

  )
}

export default Interests