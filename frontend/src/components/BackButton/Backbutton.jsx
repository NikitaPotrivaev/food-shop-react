import './BackButton.css';
import { Link } from 'react-router-dom';
import back from '../../images/back.svg';
import { useNavigate } from 'react-router-dom';

export function BackButton() {
    const nav = useNavigate()

    return(
        <Link>
            <img src={back} className='back__img' onClick={() => nav(-1)}/>
        </Link>
    )
}