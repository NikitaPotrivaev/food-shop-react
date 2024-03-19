import './Avatar.css'
import nick from '../../images/nick.jpg'

export function Avatar({ onEditAvatar }) {
    return(
        <section className="avatar">
            <div className="avatar-zone">
                <button className="avatar-edit" type="button" aria-label="edit" onClick={ onEditAvatar }></button>
                <img src={nick} alt="Аватар профиля" className="avatar-profile"/>
            </div>
        </section>
    )
}