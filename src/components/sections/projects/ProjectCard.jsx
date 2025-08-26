

export default function ProjectCard({project}){
    const {name, image , heading, text} = project;
    return (
    <section className="projectCard">
                <img src={image} alt={name}/>
        <div className="projectCardText">
            <h5> {heading} </h5>
            <span>{text}</span>
        </div>
       
    </section>

    )
}