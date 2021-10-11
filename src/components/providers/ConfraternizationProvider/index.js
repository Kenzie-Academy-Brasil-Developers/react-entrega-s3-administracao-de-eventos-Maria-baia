import {createContext, useState} from "react"

export const ConfraternizationContext = createContext([])

export const ConfraternizationProvider = ({children}) => {
    const [confraternization, setConfraternization] = useState([])

    return (
        <ConfraternizationContext.Provider value={{confraternization, setConfraternization}}>
            {children}
        </ConfraternizationContext.Provider>    
    )
}