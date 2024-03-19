import './Signin.css'
import { Form } from '../Form/Form'
import { BackButton } from '../BackButton/Backbutton';
import { useForm } from '../../hooks/useForm';

export function Signin() {
    const { values, handleChange, errors, isValid } = useForm()

    return(
        <>
            <BackButton />
            <Form
                isValid={isValid}
                isDisabled={!isValid || ''}
                title='Для оформления вашего заказа необходимо авторизоваться 🥺'
                text='Войти'
                linkText='Регистрация'
                linkCaption='Ещё не зарегистрированы?'
                path="/signup"
            >
            <div className='input'>
                <p className='input__info'>E-mail</p>
                <input name='email' pattern="^\w+@\w+\.\w{2,}(\.\w{2,})*$" autoComplete='new-email' className='input__element' type='email' onChange = { handleChange } value={values.email || '' } minLength="2" maxLength="40" required />
                    <span className='input__error input__error_active'>{errors.email || '' }</span>
            </div>
            <div className='input'>
                <p className='input__info'>Пароль</p>
                <input name='password' className='input__element' type='password' autoComplete='new-password' value={values.password || '' } onChange={ handleChange } minLength="6" maxLength="40" required />
                    <span className='input__error input__error_active'>{errors.password || '' }</span>
            </div>
            </Form>
        </>
    )
}