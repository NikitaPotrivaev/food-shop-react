import './Signup.css'
import { Form } from '../Form/Form'
import { BackButton } from '../BackButton/Backbutton';

export function Signup() {
    return(
        <>
            <BackButton />
            <Form
                title='Для оформления вашего заказа необходимо авторизоваться 🥺'
                text='Войти'
                linkText='Регистрация'
                errorText = 'Неправильные почта или пароль.'
                linkCaption='Ещё не зарегистрированы?'
                path="/signin"
            >
                <div className='input'>
                    <p className='input__info'>E-mail</p>
                    <input name='email' pattern="^\w+@\w+\.\w{2,}(\.\w{2,})*$" className='input__element' type='email' minLength="2" maxLength="40" required />
                        <span className='input__error input__error_active'></span>
                </div>
                <div className='input'>
                    <p className='input__info'>Имя</p>
                    <input name='name' className='input__element' type='text' minLength="6" maxLength="40" required />
                        <span className='input__error input__error_active'></span>
                </div>
            </Form>
        </>
    )
}