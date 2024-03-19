import './Header.css'
import logo from '../../images/logo.svg';
import nick from '../../images/nick.jpg'
import { Link } from 'react-router-dom';

export function Header({ onSignPopupClick }) {

    const isLoggedin = false

    return(
        <header className='header'>
            <img src={logo} alt="Суши" className='header__logo'/>
            <div className='header__info'>
                <p className='header__name'>Никитос Потриваев</p>
                {isLoggedin ? 
                        <Link to='/profile'><img src={nick} className='header__avatar-img'/></Link> 
                            : 
                        <Link to='/signin'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwtkwjGRzByI80Tm5DY7EeuvfZ79wTPvsH3l9diNt73lq67VavlQeKukcAbqAwjstq3CM&usqp=CAU' className='header__avatar-img' onClick={onSignPopupClick}/></Link>}
            </div>
        </header>
    )
}