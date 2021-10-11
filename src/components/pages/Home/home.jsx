import { HomeContext } from "../../providers/Products/products"
import {useContext} from "react"
import { useHistory } from "react-router-dom"
import { BasketContext } from "../../providers/Basket/index"

const Home = () => {
    const { data } = useContext(HomeContext)
    const {setBasket} = useContext(BasketContext)
    const history = useHistory()
    const handleClick = (drink) => {
        setBasket(drink)
        history.push("/events")
    }

    return(
        <div>
            <h1>Todas as bebidas</h1>
            <ul>
            {data.map((drink, index) => (
                    <li key={index}>
                        <img src={drink.image_url}></img>
                        <h3>{drink.name}</h3>
                        <h4>Data de fabricação: {drink.first_brewed}</h4>
                        <p>{drink.description}</p>
                        <span>{drink.volume.value} litros</span>
                        <button onClick={() => handleClick(drink)} >Adicionar a evento</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home