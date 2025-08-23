import { useState } from "react"
import "./Skills.css"
import SkillsCard from "./SkillsCard"
import PageHeading from "../../common/PageHeading"

export default function Skills() {
const [data, _] = useState(["a1","a2","a3", "a4" ,"a5","a1","a2","a3", "a4" ,"a5"])
    return (
      <section className="skills" id="skills">
       <PageHeading title={"SKILLS"}/>
        <div className="skillsContent">
            {
                data.map((element, i)=> 
                <div className="skillsCard" key={i}>
                    <SkillsCard element={element}/>
                </div> 
                )
            }
        </div>
            
           
        
      </section>
    )
  }
  