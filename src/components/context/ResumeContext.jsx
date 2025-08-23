import { createContext } from "react"

const context = createContext()

export default function ResumeContext(props){
    const resumeData ={

    }
    return (
        <context.Provider value={resumeData}>
        {props.children}
        </context.Provider>
    )
}