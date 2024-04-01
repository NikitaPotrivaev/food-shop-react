import { useState } from "react"

export function CartItem(props) {
    const [isHovered, setIsHovered] = useState(false)
    const [count, setCount] = useState(1)
    let [price, setPrice] = useState(props.price)
    let [weight, setWeight] = useState(props.weight)
    let [qty, setQty] = useState(props.qty)
    let [priceInitial] = useState(props.priceInitial)
    let [weightInitial] = useState(props.weightInitial)
    let [qtyInitial] = useState(props.qtyInitial)

    function handleIncrement() {
        setCount(count + 1)
        setPrice((+price) + (+priceInitial))
        setWeight((+weight) + (+weightInitial))
        setQty((+qty) + (+qtyInitial))
    }
  
    function handleDecrement() {
        if (parseInt(count) > 1) {
            setCount(count - 1)
            setPrice(price - priceInitial)
            setWeight(weight - weightInitial)
            setQty(qty - qtyInitial)
        }
    }

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
                    <p className="cart-item__qty">{qty} шт.</p>
                    <p className="cart-item__weight">/{weight}г</p>
                </div>
                <div className='cart__info-container'>
                    <div className="cart__counter-wrapper">
                        <div onClick={handleDecrement} className="cart__items-minus">-</div>
                        <div className="cart__items-current">{count}</div>
                        <div onClick={handleIncrement} className="cart__items-plus">+</div>
                    </div>
                        <div className="cart__price">{price} ₽</div>
                </div>
            </div>
            <button onClick={handleDeleteClick} className={isHovered ? "cart__delete-visible" : "cart__delete"}/>
        </li>
    )
}