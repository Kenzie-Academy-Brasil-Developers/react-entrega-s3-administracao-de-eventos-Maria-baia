import { useHistory } from "react-router-dom"
import { BasketContext } from "../../providers/Basket/index"
import { useContext } from "react"
import { GraduationContext } from "../../providers/GraduationProvider/index"
import {WeddingContext } from "../../providers/WeddingProvider/index"
import {ConfraternizationContext } from "../../providers/ConfraternizationProvider/index"

const Events = () => {
    const history = useHistory()
    const {basket} = useContext(BasketContext)
    const {graduation, setGraduation} = useContext(GraduationContext)
    const {wedding, setWedding} = useContext(WeddingContext)
    const {confraternization, setConfraternization} = useContext(ConfraternizationContext)
    const clickGraduation = (basket) => {
        setGraduation([...graduation, basket])
        history.push("/graduation")
    }
    const clickWedding = (basket) => {
        setWedding([...wedding, basket])
        history.push("/wedding")
    }
    const clickConfraternization = (basket) => {
        setConfraternization([...confraternization, basket])
        history.push("/confraternization")
    }

    return(
        <>
            <h1>Selecione o evento abaixo:</h1>
            <button onClick={() => clickGraduation(basket)}>Formatura</button>
            <button onClick={() => clickWedding(basket)}>Casamento</button>
            <button onClick={() => clickConfraternization(basket)}>Confraternização</button>
        </>
    )
}

export default Events