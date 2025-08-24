export default function SkillsCard({ skillsInfo }) {
    return (
        <div className="skillsCard">
            <div className="skillsCardImg">
                <img src={skillsInfo.logo} alt={skillsInfo.name} />
            </div>
            <div className="skillsCardText">
                <h6>{skillsInfo.name}</h6>
            </div>
        </div>
    )
}
