import './Profile.css';
import { Shop } from '../Shop/Shop';
import { Avatar } from '../Avavtar/Avatar';
import { List } from '../List/List';
import { BackButton } from '../BackButton/Backbutton';
import { Footer } from '../Footer/Footer';
import { useContext } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';

export function Profile({ onEditAvatar, onLogout }) {

    const currentUser = useContext(CurrentUserContext)

    return(
        <>
            <BackButton />
            <Shop />
            <Avatar 
                onEditAvatar = {onEditAvatar}
            />
            <div className="profile__info">
                <p className="profile__info-name">{currentUser.name}</p>
            </div>
            <List onLogout = {onLogout}/>
                <div className='profile__empty'></div>
            <Footer />
        </>
    )
}