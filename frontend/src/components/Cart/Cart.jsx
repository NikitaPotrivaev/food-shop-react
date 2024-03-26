import './Cart.css'
import { useEffect } from 'react';
import { CartItem } from './CartItem';
import big from '../../images/big-cart.png'

export function Cart(props) {

    useEffect(() => {
        if (!props.isOpen) return;
        
        function handleESC(e) {
          if (e.key === "Escape") {
            props.onClose()
          }
        }
        document.addEventListener("keydown", handleESC);
    
        return () => document.removeEventListener("keydown", handleESC);
      }, [props.isOpen]);
    
      const handleOverlayClose = (e) => {
        if (e.target === e.currentTarget && props.isOpen) {
          props.onClose();
        }
      }

    return (
        <div className={`popup__cart ${props.isOpen ? 'popup__cart_opened' : ''}`} onMouseDown={handleOverlayClose}>
            {props.orders.length > 0 ?
            <div className="cart">
            <div className="cart__container">
                <h5 className="cart__title">Ваш заказ</h5>
                <div className='cart__wrapper-container'>
                    <ul className="cart__wrapper">
                    {props.orders.map(item => (
                        <CartItem
                            key={item.id}
                            item={item}
                            link = {item.link}
                            name = {item.name}
                            qty = {item.qty}
                            weight = {item.weight}
                            price = {item.price}
                        />
                    ))}
                    </ul>
                </div>
                <div className="cart__total">
                    <p><span className="cart__delivery">Доставка:</span> <span className="cart__delivery-free">бесплатно</span> </p>
                    <p><span className="cart__conclusion">Итого:</span> <span className="cart__total-price">330 ₽</span></p>
                </div>
            </div>
            <div className="cart__body">
                <h5 className="cart__offer">Оформить заказ</h5>
                <form className="cart__form">
                    <input type="text" className="cart__form-control" placeholder="Ваш адрес"></input>
                    <button type="submit" className="cart__btn-order">Заказать</button>
                </form>
            </div>
        </div>
        :
        <div className="cart">
            <div className="cart__empty-container">
                <div className='cart__empty'>
                    <h3 className='cart__empty-text'>Ваша корзина пуста!</h3>
                    <img src={big} className='cart__big-img' alt='Большая корзина'/>
                </div>
            </div>
        </div>
        }
        </div>
    )
}