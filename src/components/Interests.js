import fuego from '../assets/fuego.jpg'
import tazzy from '../assets/tazzy.jpg'
import octopus from '../assets/octopus.jpg'


function Interests() {

  return (
    <div className="container interests ">
      <h1 className="display-1" id="interests">My Interests</h1>
      <div className="row d-flex justify-content-around flex-nowrap">
        <div className="interest-one col">
          <img className="photosizing" src={fuego} alt="fuego" />
        </div>
        <div className="interest-two col">
          <img className="photosizing" src={tazzy} alt="taz" />
        </div>
        <div className="interest-three col">
          <img className="photosizing" src={octopus} alt="octopus" />
        </div>
      </div>
    </div>

  )
}

export default Interests