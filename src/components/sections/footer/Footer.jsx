import ConnectWithMe from "../../common/ConnectWithMe";
import "./Footer.css"
import logo from "../../../assets/logo.png"
import PageHeading from "../../common/PageHeading";

export default function Footer() {
    return (
        <footer className="footer">
            <hr />
            <div className="footerContent">
            <div className="footerLeft">
                 <img src={logo} alt="logo"/>
                <p>© 2025 Ayush Gupta. All rights reserved.</p>
            </div>
            <div className="footerRight">
                <ConnectWithMe />
            </div>
            </div>
        </footer>
    )
}