import './Header.css'
import logo from '../../images/logo.svg';
import { useContext } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';

export function Header({ isLoggedIn, onProfilePopupClick, onCartPopupClick, total }) {

    const currentUser = useContext(CurrentUserContext)

    return(
        <header className='header'>
            <img src={logo} alt="Суши" className='header__logo'/>
            <div className='header__info'>
                <button onClick={onCartPopupClick} className='header__img'>
                    <span className={total.count > 0 ? 'header__counter-visible' : 'header__counter'}>{total.count}</span>
                </button>
                <p className='header__name'>{ isLoggedIn ? currentUser.name : '' }</p>
                {isLoggedIn ? 
                        <img onClick={onProfilePopupClick} src={currentUser.avatar} className='header__avatar-img'/>
                            : 
                        <img onClick={onProfilePopupClick} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwtkwjGRzByI80Tm5DY7EeuvfZ79wTPvsH3l9diNt73lq67VavlQeKukcAbqAwjstq3CM&usqp=CAU' className='header__avatar-img'/>}
            </div>
        </header>
    )
}