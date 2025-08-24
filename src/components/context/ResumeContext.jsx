import { createContext, useEffect, useState } from "react"
export const context = createContext()

export default function ResumeContext(props){
    const [windowSize, setWindowSize]= useState(null);
    

    const data ={
        windowSize, setWindowSize
    }
    return (
        <context.Provider value={data}>
        {props.children}
        </context.Provider>
    )
}