import "./NavBar.css"
import logo from "../../../assets/logo.png"
import heading_underline from "../../../assets/heading_underline.svg"
import ConnectWithMe from "../../common/ConnectWithMe"
import { useState } from "react"

export default  function NavBar() {
  const [navBarClicked ,setNavBarClicked]=useState("home")

    return (
      <nav className="navBar">
      <img src={logo} alt="logo"/>
        <ul className="navMenu">
            <div id="navBarContent">
            <li onClick={()=>setNavBarClicked("home")}><a href="#home" className="anchor">Home</a></li>
            {navBarClicked==="home"?<img src={heading_underline} alt=""/>: null}
            </div>
            <div id="navBarContent">
            <li onClick={()=>setNavBarClicked("skills")}><a href="#skills" className="anchor">Skills</a></li>
            {navBarClicked==="skills"?<img src={heading_underline} alt=""/>: null}
            </div>
            <div id="navBarContent">
            <li onClick={()=>setNavBarClicked("experiences")}><a href="#experiences" className="anchor">Experiences</a> </li>
            {navBarClicked==="experiences"?<img src={heading_underline} alt=""/>: null}
            </div>
            <div id="navBarContent">
            <li onClick={()=>setNavBarClicked("project")}><a href="#project" className="anchor">Projects</a></li>
            {navBarClicked==="project"?<img src={heading_underline} alt=""/>: null}
            </div>
            <div id="navBarContent">
            <li onClick={()=>setNavBarClicked("contact")}><a href="#contact" className="anchor">Contact</a></li>
            {navBarClicked==="contact"?<img src={heading_underline} alt=""/>: null}
            </div>
            </ul>
      <ConnectWithMe/>
      </nav>
    )
  }
  
  