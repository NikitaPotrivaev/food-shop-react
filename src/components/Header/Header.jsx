import './Header.css'
import logo from '../../images/logo.svg';
import nick from '../../images/nick.jpg'
import { Link } from 'react-router-dom';

export function Header() {
    return(
        <header className='header'>
            <img src={logo} alt="Суши" className='header__logo'/>
            <div className='header__info'>
                <p className='header__name'>Никитос Потриваев</p>
                <Link to='/profile'>
                    <img src={nick} className='header__avatar-img'/>
                </Link>
            </div>
        </header>
    )
}