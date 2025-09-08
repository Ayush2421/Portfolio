import ConnectWithMe from "../../common/ConnectWithMe";
import "./Footer.css"
import portFolio_Logo from "../../../assets/portFolio_Logo.png"
import { CommonInfo } from "../../sectionsConstant/common";

export default function Footer() {
    return (
        <footer className="footer">
            <hr />
            <div className="footerContent">
            <div className="footerLeft">
                 <img src={portFolio_Logo} alt="portFolio_Logo"/>
                <p>© 2025 {CommonInfo.devName}. All rights reserved.</p>
            </div>
            <div className="footerRight">
                <ConnectWithMe />
            </div>
            </div>
        </footer>
    )
}