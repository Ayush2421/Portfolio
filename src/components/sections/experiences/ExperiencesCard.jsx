import logo from "../../../assets/react.svg"
export default function ExperiencesCard({element}) {

    return (
      <section className="experiencesCard">
            <img src={logo} alt="logo"/>
            <h6>{element}</h6> 
      </section>
    )
  }
  