import PageHeading from "../../common/PageHeading"
import "./Project.css"
import ProjectCard from "./ProjectCard"
import { ProjectInfo } from "../../sectionsConstant/projects"

export default function Project() {
    return (
        <section className="project" id="project">
            <PageHeading title={"PROJECTS"}/>    
            <div className="projectContent">
            {
                ProjectInfo.map((project)=>
               <ProjectCard project={project} key={project.name} />
               )
            }
            </div>          
        </section>
    )
}

