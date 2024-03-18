import { Form } from '../Form/Form';
import { BackButton } from '../BackButton/Backbutton';
import { useForm } from '../../hooks/useForm';

export function Signup() {
    const { values, handleChange, errors, isValid } = useForm()
    return(
        <>
        <BackButton />
        <Form
            isValid={isValid}
            isDisabled={!isValid || ''}
            title='Добро пожаловать!'
            text='Зарегистрироваться'
            linkCaption='Уже зарегистрированы?'
            linkText='Войти'
            path='/signin'
        >
            <div className='input'>
                <p className='input__info'>Имя</p>
                <input name='name' className='input__element' type='text' value={values.name || '' } onChange = { handleChange } minLength="2" maxLength="40" required />
                    <span className='input__error input__error_active'>{errors.name || '' }</span>
            </div>
            <div className='input'>
                <p className='input__info'>E-mail</p>
                <input name='email' pattern="^\w+@\w+\.\w{2,}(\.\w{2,})*$" autoComplete='new-email' className='input__element' type='email' value={values.email || '' } onChange = { handleChange } minLength="2" maxLength="40" required />
                    <span className='input__error input__error_active'>{errors.email || '' }</span>
            </div>
            <div className='input'>
                <p className='input__info'>Пароль</p>
                <input name='password' className='input__element' type='password' autoComplete='new-password' value={values.password || '' } onChange = { handleChange } minLength="6" maxLength="40" required />
                    <span className='input__error input__error_active'>{errors.password || '' }</span>
            </div>
            <div className='input'>
                <p className='input__info'>Номер Телефона</p>
                <input name='phone' pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$" className='input__element' type='tel' autoComplete='new-phone' value={values.phone || '' } onChange = { handleChange } minLength="11" maxLength="12" required />
                    <span className='input__error input__error_active'>{errors.phone || '' }</span>
            </div>           
        </Form>
    </>
    )
}