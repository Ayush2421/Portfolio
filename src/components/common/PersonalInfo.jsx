import "./CommonFile.css"

export default function PersonalInfo({img, text, flag}){
    return (
        <div id="personalInfo">
                <img  src={img}  alt={img}/>
                {flag? <img src={flag} alt={flag}/>:null}
                <span>{text}</span>
        </div>
    )
}