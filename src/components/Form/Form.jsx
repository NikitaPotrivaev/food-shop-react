import './Form.css'
import { Link } from 'react-router-dom'

export function Form({ children, title, text, linkCaption, linkText, path }) {
    return(
        <section className="form">
            <div className="form__header">
                <div className='logo'>
                    <Link className='logo-img' to='/'></Link>
                </div>
                <h2 className="form__header-title">{title}</h2>
            </div>
            <form className="form__base" noValidate>
                <div className="form__base-inputs">
                    {children}
                </div>
                    <button className='form__base-button'>{text}</button>
                <div className="form__link-container">
                    <p className="form__link-caption">{linkCaption}</p>
                    <Link className="form__link" to={path}>{linkText}</Link>
                </div>
            </form>
        </section>
    )
}