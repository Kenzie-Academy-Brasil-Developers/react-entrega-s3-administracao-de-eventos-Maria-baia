import { useHistory } from "react-router-dom"
import {useContext} from "react"
import {ConfraternizationContext} from "../../providers/ConfraternizationProvider/index"

const Confraternization = () => {
    const history = useHistory()
    const {confraternization, setConfraternization} = useContext(ConfraternizationContext)
    const handleClick = (drink) => {
        const newConfraternization =
        confraternization.filter(drinkOn => drinkOn !== drink)
        setConfraternization(newConfraternization)
    }

    return (
        <div>
            <h1>Confraternização</h1>
            <ul>
                {confraternization.map((drink, index) => (
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
            <button onClick={() => history.push("/")}>Voltar a home</button>
        </div>
    )
}

export default Confraternization