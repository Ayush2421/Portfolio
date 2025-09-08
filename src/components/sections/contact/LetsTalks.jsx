import PersonalInfo from "../../common/personalInfo.jsx"
import PageHeading from "../../common/PageHeading"
import { ContactInfo, letTalkInfo } from "../../sectionsConstant/contact"

export default function LetsTalk(){
    
    return (
        <div className="letTalk contactContainer">
        <PageHeading title={"Let's Talk"} colored={true} />
        <p>{letTalkInfo.text}</p>
        {
            ContactInfo.map((element)=>{
                return <div key={element.name}>
                    <PersonalInfo img={element.logo} text={element.text} flag={element?.flag} />
                </div>
            })
        }
        </div>
    )
}