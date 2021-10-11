import { useHistory } from "react-router-dom"
import {useContext} from "react"
import { WeddingContext } from "../../providers/WeddingProvider/index"

const Wedding = () => {
    const history = useHistory()
    const {wedding, setWedding} = useContext(WeddingContext)
    const handleClick = (drink) => {
        const newWedding = 
        wedding.filter(drinkOn => drinkOn !== drink)
        setWedding(newWedding)
    }

    return (
        <div>
            <h1>Casamento</h1>
            <ul>
                {wedding.map((drink, index) => (
                    <li key={index}>
                        <img src={drink.image_url}></img>
                        <h3>{drink.name}</h3>
                        <h4>{drink.first_brewed}</h4>
                        <p>{drink.description}</p>
                        <span>{drink.volume.value}</span>
                        <button onClick={() => handleClick(drink)}>Remover</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => history.push("/")} >Voltar a Home</button>
        </div>
    )
}

export default Wedding