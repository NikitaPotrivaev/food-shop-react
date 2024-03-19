import './NotFound.css'
import { useNavigate } from 'react-router-dom';

export function NotFound() {
    const nav = useNavigate()

    return(
        <div className='not-found'>
            <h1 className='not-found__title'>404</h1>
            <p className='not-found__text'>Страница не найдена</p>
            <button className='not-found__buttton' type='button' onClick={() => nav(-1)}>Назад</button>
        </div>
    )
}