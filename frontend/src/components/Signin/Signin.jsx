import './Signin.css'
import { Form } from '../Form/Form'
import { useForm } from '../../hooks/useForm';
import { useEffect } from 'react';

export function Signin({ onLogin, isOpen, onClose, isLoading }) {

    const { values, handleChange, errors, isValid, resetForm } = useForm()

    useEffect(() => {
        resetForm();
    }, [resetForm]);

    function handleSubmit(e) {
        e.preventDefault()
        onLogin(values["email"], values["password"])
    }

    return(
        <>
            <Form
                isOpen={isOpen}
                onClose={onClose}
                onSubmit={handleSubmit}
                isValid={isValid}
                isDisabled={!isValid || ''}
                title='Здравствуйте, для дальнейшего оформления заказа необходимо авторизоваться!'
                text={ isLoading ? 'Войти...' : 'Войти' }
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