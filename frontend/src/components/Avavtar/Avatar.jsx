import './Avatar.css'
import { useContext } from "react"
import { CurrentUserContext } from '../../context/CurrentUserContext'

export function Avatar({ onEditAvatar }) {

    const currentUser = useContext(CurrentUserContext)

    return(
        <section className="avatar">
            <div className="avatar-zone">
                <button className="avatar-edit" type="button" aria-label="edit" onClick={ onEditAvatar }></button>
                <img src={currentUser.avatar} alt="Аватар профиля" className="avatar-profile"/>
            </div>
        </section>
    )
}