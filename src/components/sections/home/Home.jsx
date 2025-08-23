import "./Home.css"
import ayush_photo from "../../../assets/ayush_photo.jpg"
export default function Home() {
  return (
    <section className="home" id="home">
      <div className="homeContainer">
        <div className="homeContent">
          <h1>Hello<div className="gradientEmoji">👋</div> I am </h1>
          <div className="developerName">Ayush Gupta</div>
          <h1>Full STACK eNGINER</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odit nobis illum id ducimus illo impedit quam ad optio
          </p>
        </div>
        <img src={ayush_photo} alt="Ayush_photo"></img>
      </div>
      <div className="resumeBtn">My Resume</div>
    </section>
  )
}

