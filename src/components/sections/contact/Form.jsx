import PageHeading from "../../common/PageHeading"

export default function Form() {
    const handleSubmitForm = (evt) => {
        evt.preventDefault()
    }
    return (
        <div className="form contactContainer">
            <PageHeading title={"Contact Me"} colored={true} />
            <form className="mainForm" onSubmit={handleSubmitForm}>
                <div className="formContainer">
                    <label>Name</label>
                    <input placeholder="Enter your Name" />
                    <label>Email</label>
                    <input placeholder="Enter your Email" />
                    <label>Message</label>
                    <textarea placeholder="Enter your Message..." />
                </div>
                <div className="submitForm">Submit</div>
            </form>
        </div>

    )
}