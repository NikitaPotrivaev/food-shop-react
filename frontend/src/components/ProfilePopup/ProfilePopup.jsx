import './ProfilePopup.css'
import { List } from '../List/List'
import { useEffect } from 'react';
import { useContext } from "react"
import { CurrentUserContext } from '../../context/CurrentUserContext'

export function ProfilePopup(props) {

    const currentUser = useContext(CurrentUserContext)

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

    return(
        <div className={`popup__profile ${props.isOpen ? 'popup__profile_opened' : ''}`} onMouseDown={handleOverlayClose}>
        <div className="popup__container">
            <div className='popup__header'>
                <h2 className="popup__profile-title">{props.isLoggedIn ? currentUser.name : ''}</h2>

                <div className="popup__avatar">
                  <div className="popup__header-avatar-zone">
                    {props.isLoggedIn ? <button className="popup__avatar-edit" type="button" aria-label="edit" onClick={ props.onEditAvatar }></button> : ''}
                    {props.isLoggedIn ? <img src={currentUser.avatar} className='popup__header-avatar-img'/> :
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwtkwjGRzByI80Tm5DY7EeuvfZ79wTPvsH3l9diNt73lq67VavlQeKukcAbqAwjstq3CM&usqp=CAU' className='popup__header-avatar-img'/>}
                  </div>
                </div>

            </div>
            <List onClose = { props.onClose } isLoggedIn = { props.isLoggedIn } onSigninPopupClick = { props.onSigninPopupClick } onSignupPopupClick = { props.onSignupPopupClick } onLogout = { props.onLogout }/>
        </div>
     </div>
    )
}