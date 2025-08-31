import "./Home.css"
import { CommonInfo } from "../../sectionsConstant/common"
import { AboutDev, TextAnimation } from "../../sectionsConstant/home"
export default function Home() {
  return (
    <section className="home" id="home">
      <div className="homeContainer">
        <div className="homeContent">
          <h1>Hello<span className="gradientEmoji">👋</span> I am </h1>
          <div className="developerName">{CommonInfo.devName}</div>
          <div className="textChanger">
            <div className="rollContainer">
             {
             TextAnimation.map((element, index)=>
                  <span id="roll" key={index}>{element}</span>)
          } </div>

          </div>
          <p>
            {AboutDev.about}
          </p>
        </div>
        <div className="imgParent">
        <div className="imgContainer">
        <img className="devImg" src={CommonInfo.devPic} alt="Ayush_photo"></img>
        </div>
        </div>
      </div>
      <button className="resumeBtn">My Resume</button>
    </section>
  )
}

