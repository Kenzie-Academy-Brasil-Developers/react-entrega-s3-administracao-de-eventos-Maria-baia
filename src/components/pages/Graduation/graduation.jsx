import { useHistory } from "react-router-dom";
import {useContext} from "react"
import {GraduationContext} from "../../providers/GraduationProvider/index"

const Graduation = () => {
    const history = useHistory()
    const {graduation, setGraduation} = useContext(GraduationContext)
    const handleClick = (drink) => {
        const newGraduation = 
        graduation.filter(drinkOn => drinkOn !== drink)
        setGraduation(newGraduation)
    }

    return (
        <div>
            <h1>Formatura</h1>
            <ul>
                {graduation.map((drink, index) => (
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
            <button onClick={() => history.push("/")}>Voltar a Home</button>
        </div>
    )
}

export default Graduation;