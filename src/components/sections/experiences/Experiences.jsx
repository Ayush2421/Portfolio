import { useState } from "react"
import "./Experiences.css"
import ExperiencesCard from "./ExperiencesCard"
import PageHeading from "../../common/PageHeading"

export default function Experiences() {
    const [data, _] = useState(["a1", "a2","a3", "a4"])
    return (
        <section className="experiences" id="experiences">
           <PageHeading title={"EXPERIENCES"}/>
            <div className="experiencesContent">
                <div className="horizontalLine"></div>
                {
                    data.map((element, i) =>
                        <div className="abc" key={i} 
                        id={i%2===0? "left":"right"}
                        style={{top:`${i*100}px`}}>
                            <ExperiencesCard element={element} />
                        </div>
                    )
                }
            </div>
        </section>
    )
}

