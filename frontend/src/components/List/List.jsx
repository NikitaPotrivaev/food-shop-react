import './List.css'
import data from '../../images/data.svg'
import exit from '../../images/exit.svg'
import reg from '../../images/reg.svg'
import auth from '../../images/auth.svg'
import { Link } from 'react-router-dom'

export function List({ onLogout, isLoggedIn, onSigninPopupClick, onSignupPopupClick, onClose }) {
    return(
        <section className='list'>
            {isLoggedIn ?
            <>
            <div className='list__orders'>
                <Link className='list__link' to='/data' onClick = {onClose}>
                    <img src={data} className='list__img'/>
                    <p className='list__text'>Мои данные</p>
                </Link>
            </div>
            <div className='list__orders'>
                <Link className='list__link' onClick = {onLogout}>
                    <img src={exit} className='list__img'/>
                    <p className='list__text'>Выйти</p>
                </Link>
            </div>
            </>
            :
            <>
            <div className='list__orders'>
                <Link className='list__link' onClick = {onSignupPopupClick}>
                    <img src={reg} className='list__img'/>
                    <p className='list__text'>Регистрация</p>
                </Link>
            </div>
            <div className='list__orders'>
                <Link className='list__link' onClick = {onSigninPopupClick}>
                    <img src={auth} className='list__img'/>
                    <p className='list__text'>Авторизация</p>
                </Link>
            </div>
            </>}
        </section>
    )
}