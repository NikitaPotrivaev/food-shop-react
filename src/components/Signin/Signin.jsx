import { Form } from '../Form/Form';
import { BackButton } from '../BackButton/Backbutton';

export function Signin() {
    return(
        <>
        <BackButton />
        <Form
            title='Добро пожаловать!'
            text='Зарегистрироваться'
            linkCaption='Ещё не зарегистрированы?'
            linkText='Войти'
            errorText = 'Что-то пошло не так, попробуйте ещё раз.'
            path='/signup'
        >
        <div className='input'>
            <p className='input__info'>Имя</p>
            <input name='name' className='input__element' type='text' minLength="2" maxLength="40" required />
                <span className='input__error input__error_active'></span>
        </div>
        <div className='input'>
            <p className='input__info'>E-mail</p>
            <input name='email' pattern="^\w+@\w+\.\w{2,}(\.\w{2,})*$" className='input__element' type='email' minLength="2" maxLength="40" required />
                <span className='input__error input__error_active'></span>
        </div>
        <div className='input'>
            <p className='input__info'>Пароль</p>
            <input name='password' className='input__element' type='password' minLength="6" maxLength="40" required />
                <span className='input__error input__error_active'></span>
        </div>
        </Form>
    </>
    )
}