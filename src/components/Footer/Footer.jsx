import './Footer.css';
import github from '../../images/github.svg';
import telegram from '../../images/telegram.svg'

export function Footer() {
    return (
        <footer className='footer'>
            <p className='footer__title'>Доставка пайки.Быстро и вкусно</p>
            <div className='footer__container'>
                <div className='footer__copyright'>
                    <p className='footer__copyright-text'>&copy; ООО «Доставка Пайки»</p>
                    <p className='footer__copyright-text'>Проект Никиты Потриваева</p>
                </div>
                <ul className='footer__links'>
                    <li>
                        <a href="https://t.me/npotrivaev" className='footer__link' target="_blank" rel="noreferrer">
                            <img className='footer__link-img' src={telegram} alt="Гитхаб" />
                            <p className='footer__link-text'>Telegram</p>                            
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/NikitaPotrivaev" className='footer__link' target="_blank" rel="noreferrer">
                            <img className='footer__link-img' src={github} alt="Гитхаб" />
                            <p className='footer__link-text'>GitHub</p>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}