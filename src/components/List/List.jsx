import './List.css'
import cart from '../../images/cart.svg'
import data from '../../images/data.svg'
import exit from '../../images/exit.svg'
import { Link } from 'react-router-dom'

export function List() {
    return(
        <section className='list'>
            <div className='list__orders'>
                <Link className='list__link' to='/signup'>
                    <img src={cart} className='list__img'/>
                    <p className='list__text'>Корзина</p>
                </Link>
            </div>
            <div className='list__orders'>
                <img src={data} className='list__img'/>
                <p className='list__text'>Мои данные</p>
            </div>
            <div className='list__orders'>
                <img src={exit} className='list__img'/>
                <p className='list__text'>Выйти</p>
            </div>
        </section>
    )
}