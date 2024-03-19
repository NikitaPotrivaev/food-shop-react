import './Header.css'
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';

export function Header({ isLoggedIn }) {

    const currentUser = useContext(CurrentUserContext)

    return(
        <header className='header'>
            <img src={logo} alt="Суши" className='header__logo'/>
            <div className='header__info'>
                <p className='header__name'>{ isLoggedIn ? currentUser.name : '' }</p>
                {isLoggedIn ? 
                        <Link to='/profile'><img src={currentUser.avatar} className='header__avatar-img'/></Link> 
                            : 
                        <Link to='/signin'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwtkwjGRzByI80Tm5DY7EeuvfZ79wTPvsH3l9diNt73lq67VavlQeKukcAbqAwjstq3CM&usqp=CAU' className='header__avatar-img'/></Link>}
            </div>
        </header>
    )
}