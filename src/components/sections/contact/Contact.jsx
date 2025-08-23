
import PageHeading from "../../common/PageHeading"
import "./Contact.css"
import Form from "./Form"
import LetsTalk from "./LetsTalks"
// import contact_img from "../../../assets/contact_img.svg"

export default function Contact() {

  return (
    <section className="contact" id="contact">
      <PageHeading title={"CONTACT"} />
      <div className="contactMeContent">
        <LetsTalk />
        <Form />
      </div>
      {/* <img src={contact_img} alt="contactImg"/> */}
    </section>
  )
}
