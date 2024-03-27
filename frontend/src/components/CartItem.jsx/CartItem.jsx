import deleteCart from "../../images/delete.svg"

export function CartItem(props) {

    function handleDeleteClick() {
        props.onDelete(props.item.id)
    }

    return (
        <li className="cart__info">
            <img src={props.link} className='cart__img'  alt={props.name}/>
            <div className='cart__item'>
                <div className="cart-item__title">{props.name}</div>
                <div className="cart-item__text">
                    <p className="cart-item__qty">{props.qty}</p>
                    <p className="cart-item__weight">/{props.weight}</p>
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
            <img onClick={handleDeleteClick} src={deleteCart} className="cart__delete" alt="Корзина удаления"/>
        </li>
    )
}