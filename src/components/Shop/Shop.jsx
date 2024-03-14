import './Shop.css'
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom'

export function Shop() {
    return(
        <section className="shop">
            <Link to='/'>
                <img src={logo} alt="Суши" className="shop__logo"/>
            </Link>
                <h1 className="shop__title">Доставка пайки</h1>
                <p className="shop__text">Оперативно и вкусно</p>
        </section>
    )
}