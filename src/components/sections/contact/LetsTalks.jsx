import india_flag from "../../../assets/india_flag.png"

import mail_icon  from "../../../assets/mail_icon.svg"
import call_icon  from "../../../assets/call_icon.svg"
import location_icon  from "../../../assets/location_icon.svg"
import PersonalInfo from "../../common/personalInfo"
import PageHeading from "../../common/PageHeading"

export default function LetsTalk(){

    return (
        <div className="letTalk contactContainer">
        {/* <h1>Let's Talk</h1> */}
        <PageHeading title={"Let's Talk"} colored={true} />
        <p>I am currently avaliable to take on new projects, so feel free to send me a message 
        about anything that you want me to work on. You can contact anytime.</p>
        <PersonalInfo img={mail_icon} text={"ayush2421gupta@gmail.com"} />
        <PersonalInfo img={call_icon} text={"+91 8076440462"} />
        <PersonalInfo img={location_icon} text={"India"} flag={india_flag} />
        </div>
    )
}