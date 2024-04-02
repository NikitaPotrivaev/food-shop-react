import './Card.css'

export function Card(props) {

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
                <p className="card__qty">{props.qty} шт.</p>
                <div className="card__wrapper">
                    <div className="card__items">
                        <div onClick={() => {props.decrease(props.card.id)}} className="card__items-minus">-</div>
                        <div className="card__items-current">{props.count}</div>
                        <div  onClick={() => {props.increase(props.card.id)}} className="card__items-plus">+</div>
                    </div>
                    <div className="card__info">
                        <p className="card__info-weight">{props.weight}г</p>
                        <p className="card__info-price">{props.price} ₽</p>
                    </div>
                </div>
                <button onClick={handleAddToCart} className="card__button-in-cart" type="button">Добавить</button>
            </div>
        </li>        
    )
}