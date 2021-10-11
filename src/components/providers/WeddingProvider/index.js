import {createContext, useState} from "react"

export const WeddingContext = createContext([])

export const WeddingProvider = ({children}) => {
    const [wedding, setWedding] = useState([])

    return (
        <WeddingContext.Provider value={{wedding, setWedding}}>
            {children}
        </WeddingContext.Provider>    
    )
}