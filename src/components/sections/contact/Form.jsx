import { useState } from "react"
import PageHeading from "../../common/PageHeading"

export default function Form() {
    const obj={ name: "", email: "", message: "" }
    const [formValue, setFormValue] = useState(obj)
    const handleInput=(evt)=>{
        const {name, value} = evt.target
        setFormValue((prev)=>{
            return{
                ...prev,
                [name]: value
            }
        })
    }
    //need to uncomment
    const onSubmit = async (event) => {
        setFormValue(obj);
        alert("Form Submitted Successfully")
        event.preventDefault()
        return;
        const formData = new FormData(event.target);
        formData.append("access_key", "f0eb00dc-6863-46be-b296-b5a72dc4b341");
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            setFormValue(obj);
            alert("Form Submitted Successfully")
        }
    }
    return (
        <div className="form contactContainer">
            <PageHeading title={"Contact Me"} colored={true} />
            <form className="mainForm" onSubmit={onSubmit}>
                <div className="formContainer">
                    <label>Name</label>
                    <input type="text" name="name" value={formValue.name}
                    onInput={handleInput} placeholder="Enter your Name" autoComplete="off" />
                    <label>Email</label>
                    <input type="email" name="email"  value={formValue.email}
                    onInput={handleInput} placeholder="Enter your Email" autoComplete="off" />
                    <label>Message</label>
                    <textarea name="message" value={formValue.message}
                    onInput={handleInput} placeholder="Enter your Message..." autoComplete="off" />
                </div>
                <button type="submit" className="submitForm">Submit</button>
            </form>
        </div>

    )
}