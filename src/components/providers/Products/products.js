import {createContext, useState, useEffect} from "react"
import axios from "axios"

export const HomeContext = createContext([])

export const HomeProvider = ({children}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://api.punkapi.com/v2/beers")
        .then(response => setData(response.data))
        .catch(err => console.log(err))
    })

    return (
        <HomeContext.Provider value={{data}}>
            {children}
        </HomeContext.Provider>
    )
}