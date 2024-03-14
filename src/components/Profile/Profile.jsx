import './Profile.css';
import { Shop } from '../Shop/Shop';
import { Avatar } from '../Avavtar/Avatar';
import { List } from '../List/List';
import { BackButton } from '../BackButton/Backbutton';

export function Profile() {
    return(
        <>  
            <BackButton />
            <Shop />
            <Avatar />
                <div className="profile__info">
                    <p className="profile__info-name">Никитос Потриваев</p>
                </div>
            <List />
        </>
    )
}