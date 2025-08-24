import "./Experiences.css"
import ExperiencesCard from "./ExperiencesCard"
import PageHeading from "../../common/PageHeading"
import { ExperiencesInfo } from "../../sectionsConstant/experiences"

export default function Experiences() {
    
    return (
        <section className="experiences" id="experiences">
           <PageHeading title={"EXPERIENCES"}/>
            <div className="experiencesContent">
                <div className="horizontalLine"></div>
                {
                    ExperiencesInfo.map((element, i) =>
                        <div className="abc" key={i} 
                        id={i%2===0? "left":"right"}>
                         {/* style={{top:`${i*250}px`}}> */}
                            <ExperiencesCard expInfoData={element} />
                        </div>
                    )
                }
            </div>
        </section>
    )
}

