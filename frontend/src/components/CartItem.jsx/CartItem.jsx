import { useState } from "react"

export function CartItem(props) {
    const [isHovered, setIsHovered] = useState(false)

    function handleMouseEnter() {
        setIsHovered(true)
    }

    function handleMouseLeave() {
        setIsHovered(false)
    }

    function handleDeleteClick() {
        props.onDelete(props.item.id)
    }

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="cart__info">
            <img src={props.link} className='cart__img'  alt={props.name}/>
            <div className='cart__item'>
                <div className="cart-item__title">{props.name}</div>
                <div className="cart-item__text">
                    <p className="cart-item__qty">{props.qty} шт.</p>
                    <p className="cart-item__weight">/{props.weight}г</p>
                </div>
                <div className='cart__info-container'>
                    <div className="cart__counter-wrapper">
                        <div className="cart__items-minus">-</div>
                        <div className="cart__items-current">1</div>
                        <div className="cart__items-plus">+</div>
                    </div>
                        <div className="cart__price">{props.price} ₽</div>
                </div>
            </div>
            <button onClick={handleDeleteClick} className={isHovered ? "cart__delete-visible" : "cart__delete"}/>
        </li>
    )
}