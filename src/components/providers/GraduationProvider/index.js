import {createContext, useState} from "react"

export const GraduationContext = createContext([])

export const GraduationProvider = ({children}) => {
    const [graduation, setGraduation] = useState([])

    return (
        <GraduationContext.Provider value={{graduation, setGraduation}}>
            {children}
        </GraduationContext.Provider>    
    )
}