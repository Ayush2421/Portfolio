import "./Home.css"
import { CommonInfo } from "../../sectionsConstant/common"
export default function Home() {
  return (
    <section className="home" id="home">
      <div className="homeContainer">
        <div className="homeContent">
          <h1>Hello<span className="gradientEmoji">👋</span> I am </h1>
          <div className="developerName">{CommonInfo.devName}</div>
          <div className="textChanger">
            <div className="rollContainer">
            <span id="roll">Full1 STACK eNGINER</span>
            <span id="roll">Full2 STACK eNGINER</span>
            <span id="roll">Full3 STACK eNGINER</span>
            <span id="roll">Full4 STACK eNGINER</span>
            <span id="roll">Full5 STACK eNGINER</span>
            </div>

          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odit nobis illum id ducimus illo impedit quam ad optio
          </p>
        </div>
        <div className="imgContainer">
        <img className="devImg" src={CommonInfo.devPic} alt="Ayush_photo"></img>
        </div>
      </div>
      <button className="resumeBtn">My Resume</button>
    </section>
  )
}

