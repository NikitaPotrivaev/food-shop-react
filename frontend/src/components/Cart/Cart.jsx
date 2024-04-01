import './Cart.css'
import { useEffect } from 'react';
import { CartItem } from '../CartItem.jsx/CartItem';
import big from '../../images/big-cart.png'
import { useForm } from '../../hooks/useForm';

export function Cart(props) {
    let sum = 0
    props.orders.forEach(el => sum += Number.parseFloat(el.price))

    const { values, handleChange, errors, isValid } = useForm()

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
                            priceInitial = {item.priceInitial}
                            weightInitial = {item.weightInitial}
                            qtyInitial = {item.qtyInitial}
                            onDelete = {props.onDelete}
                        />
                    ))}
                    </ul>
                </div>
                <div className="cart__total">
                    <p><span className="cart__delivery">Доставка:</span> <span className="cart__delivery-free">бесплатно</span> </p>
                    <p><span className="cart__conclusion">Итого:</span> <span className="cart__total-price">{sum} ₽</span></p>
                </div>
            </div>
            <div className="cart__body">
                <h5 className="cart__offer">Оформить заказ</h5>
                <form className="cart__form">
                    <input name='address' type="text" pattern='/^[1-9][0-9]*([a-z]|[а-я]|(\/[1-9][0-9]*))?$/i' className="cart__form-control" value={ values.address || '' } onChange={ handleChange } placeholder="Ваш адрес" required></input>
                        <span id="address-error" className="popup__error popup__error_active">{ errors.address || "" }</span>
                    <button disabled={!isValid} type="submit" className={!isValid ? 'cart__btn-order-invisible' : 'cart__btn-order'}>Заказать</button>
                </form>
            </div>
        </div>
        :
        <div className="cart">
            <div className="cart__empty-container">
                <div className='cart__empty'>
                    <h3 className='cart__empty-text'>В вашей корзине пока пусто!</h3>
                    <img src={big} className='cart__big-img' alt='Большая корзина'/>
                </div>
            </div>
        </div>
        }
        </div>
    )
}