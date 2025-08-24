import "./Home.css"
import { CommonInfo } from "../../sectionsConstant/common"
export default function Home() {
  return (
    <section className="home" id="home">
      <div className="homeContainer">
        <div className="homeContent">
          <h1>Hello<span className="gradientEmoji">👋</span> I am </h1>
          <div className="developerName">{CommonInfo.devName}</div>
          <h1>Full STACK eNGINER</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odit nobis illum id ducimus illo impedit quam ad optio
          </p>
        </div>
        <img src={CommonInfo.devPic} alt="Ayush_photo"></img>
      </div>
      <div className="resumeBtn">My Resume</div>
    </section>
  )
}

