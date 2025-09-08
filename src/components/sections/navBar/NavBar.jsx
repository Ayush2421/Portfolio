import "./NavBar.css"
import portFolio_Logo from "../../../assets/portFolio_Logo.png"
import ConnectWithMe from "../../common/ConnectWithMe"
import { useState, useRef } from "react"
import { CommonInfo } from "../../sectionsConstant/common"
import { NavBarHeading, NavBarInfo } from "../../sectionsConstant/navBar"

export default function NavBar() {
  const [navBarClicked, setNavBarClicked] = useState("home")
  const menuRef = useRef()
  const openMenu = () => {
    menuRef.current.style.right = "0px";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <nav className="navBar">
      <img className="navBarLogo" src={portFolio_Logo} alt="portFolio_Logo" />
      <img className="openImg" src={NavBarInfo.open} onClick={openMenu} alt="open" />
      <ul ref={menuRef} className="navMenu">
        <img className="closeImg" src={NavBarInfo.close} onClick={closeMenu} alt="close" />
        {
          NavBarHeading.map((headingName, index) => 
            <div id="navBarContent" key={index}>
              <li onClick={() => setNavBarClicked(headingName)}><a href={`#${headingName}`} className="anchor">{headingName}</a></li>
              {navBarClicked === headingName ? <img src={CommonInfo.headingLineImg} alt="" /> : null}
            </div>
          )
        }
      </ul>
      <div className="connectContainer">
        <ConnectWithMe />
      </div>
    </nav>
  )
}

