import './Card.css'
import { useState } from 'react'

export function Card(props) {
    const [count, setCount] = useState(1)

    function handleIncrement() {
        setCount(count + 1)
    }

    function handleDecrement() {
        if (parseInt(count) > 1) {
            setCount(count - 1)
        }
    }

    function handleAddToCart() {
        props.onAdd(props.card)
    }

    function handleClick() {
        props.onCardClick(props.card)
    }

    return(
        <li className="card__card" key = {props.card.id}>
            <img src={props.link} alt={props.name} onClick={ handleClick } className="card__image"/>
            <div className="card__container">
                <p className="card__text">{props.name}</p>
                <p className="card__qty">{props.qty}</p>
                <div className="card__wrapper">
                    <div className="card__items">
                        <div onClick={handleDecrement} className="card__items-minus">-</div>
                        <div className="card__items-current">{count}</div>
                        <div onClick={handleIncrement} className="card__items-plus">+</div>
                    </div>
                    <div className="card__info">
                        <p className="card__info-weight">{props.weight}</p>
                        <p className="card__info-price">{props.price}</p>
                    </div>
                </div>
                <button onClick={handleAddToCart} className="card__button-in-cart" type="button">Добавить</button>
            </div>
        </li>        
    )
}