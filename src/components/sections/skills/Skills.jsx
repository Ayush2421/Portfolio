import "./Skills.css"
import SkillsCard from "./SkillsCard"
import PageHeading from "../../common/PageHeading"
import { SkillsInfo } from "../../sectionsConstant/skills"

export default function Skills() {
    return (
      <section className="skills" id="skills">
       <PageHeading title={"SKILLS"}/>
        <div className="skillsContent">
            {
                SkillsInfo.map((element)=> 
                <div key={element.name}>
                    <SkillsCard skillsInfo={element}/>
                </div> 
                )
            }
        </div>
      </section>
    )
  }
  