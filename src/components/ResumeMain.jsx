import "./ResumeMain.css"
import NavBar from "./sections/navBar/NavBar";
import Home from "./sections/home/Home";
import Skills from "./sections/skills/Skills";
import Experiences from "./sections/experiences/Experiences";
import Project from "./sections/projects/Project";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";

export default function ResumeMain() {

    return (
      <section className="resumeMain">
      <NavBar/>
      <Home/>
      <Skills/>
      <Experiences/>
      <Project/>
      <Contact/>
      <Footer/>
      </section>
    )
  }
  