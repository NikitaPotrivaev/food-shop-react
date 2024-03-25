import './Cart.css'
import philadelphia from '../../images/philadelphia.jpg'

export function Cart() {
    return (
        <div className="cart">
        <div className="cart__container">
            <h5 className="cart__title">Ваш заказ</h5>
            <div className="cart__wrapper">
                <img className='cart__img' src={philadelphia} alt="филадельфия"/>
                <div className='cart__item'>
                    <div className="cart-item__title">Калифорния темпура</div>
                    <div className="cart-item__weight">6 шт. / 205г.</div>
                    <div className='cart__info-container'>
                        <div className="cart__counter-wrapper">
                            <div className="cart__items-minus">-</div>
                            <div className="cart__items-current">1</div>
                            <div className="cart__items-plus">+</div>
                        </div>
                            <div className="cart__price">250 ₽</div>
                    </div>
                </div>
            </div>
            <div className="cart__total">
                <p><span className="cart__delivery">Доставка:</span> <span className="cart__delivery-free">бесплатно</span> </p>
                <p><span className="cart__conclusion">Итого:</span> <span className="cart__total-price">330 ₽</span></p>
            </div>
        </div>
        <div className="cart__body">
            <h5 className="cart__offer">Оформить заказ</h5>
            <form className="cart__form">
                <input type="text" className="cart__form-control" placeholder="Ваш номер телефона"></input>
                <button type="submit" className="cart__btn-order">Заказать</button>
            </form>
        </div>
    </div>
    )
}