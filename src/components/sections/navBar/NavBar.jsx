import "./NavBar.css"
import logo from "../../../assets/logo.png"
import ConnectWithMe from "../../common/ConnectWithMe"
import { useContext, useState, useEffect,useRef } from "react"
import { CommonInfo } from "../../sectionsConstant/common"
import { NavBarInfo } from "../../sectionsConstant/navBar"

export default  function NavBar() {
  const [navBarClicked ,setNavBarClicked]= useState("home")
 const menuRef= useRef()
 const openMenu =()=>{
  menuRef.current.style.right="0px";
 }
 const closeMenu =()=>{
  menuRef.current.style.right="-350px";
 }
  // const {windowSize,setWindowSize} = useContext(context);

    return (
      <nav className="navBar">
      <img className="navBarLogo" src={logo} alt="logo"/>
      <img  className="openImg" src={NavBarInfo.open} onClick={openMenu} alt="open"/>
        <ul ref={menuRef} className="navMenu">
          <img  className="closeImg" src={NavBarInfo.close} onClick={closeMenu} alt="close"/>
            <div id="navBarContent">
            <li onClick={()=>setNavBarClicked("home")}><a href="#home" className="anchor">Home</a></li>
            {navBarClicked==="home"?<img src={CommonInfo.headingLineImg} alt=""/>: null}
            </div>
            <div id="navBarContent">
            <li onClick={()=>setNavBarClicked("skills")}><a href="#skills" className="anchor">Skills</a></li>
            {navBarClicked==="skills"?<img src={CommonInfo.headingLineImg} alt=""/>: null}
            </div>
            <div id="navBarContent">
            <li onClick={()=>setNavBarClicked("experiences")}><a href="#experiences" className="anchor">Experiences</a> </li>
            {navBarClicked==="experiences"?<img src={CommonInfo.headingLineImg} alt=""/>: null}
            </div>
            <div id="navBarContent">
            <li onClick={()=>setNavBarClicked("project")}><a href="#project" className="anchor">Projects</a></li>
            {navBarClicked==="project"?<img src={CommonInfo.headingLineImg} alt=""/>: null}
            </div>
            <div id="navBarContent">
            <li onClick={()=>setNavBarClicked("contact")}><a href="#contact" className="anchor">Contact</a></li>
            {navBarClicked==="contact"?<img src={CommonInfo.headingLineImg} alt=""/>: null}
            </div>
            </ul>
            <div className="connectContainer">
                  <ConnectWithMe/>
            </div>
      </nav>
    )
  }
  
  