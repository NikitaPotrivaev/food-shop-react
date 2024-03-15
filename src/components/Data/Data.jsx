import './Data.css'
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useContext, useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { BackButton } from '../BackButton/Backbutton';
import { Logo } from '../Logo/Logo';

export function Data() {
    const currentUser = useContext(CurrentUserContext)
    const [isDataChanged, setDataChanged] = useState(false);
    const { values, setValues, handleChange, errors, isValid } = useForm()

    useEffect(() => {
        values.name === currentUser.name && values.email === currentUser.email && values.phone
          ? setDataChanged(false)
          : setDataChanged(true);
      }, [values, currentUser.name, currentUser.email, currentUser.phone]);

    useEffect(() => {
        setValues({
          name: currentUser.name,
          email: currentUser.email,
          phone: currentUser.phone
        });
      }, [currentUser.name, currentUser.email, currentUser.phone, setValues]);

    return(
        <>
            <BackButton/>
            <section className='data'>
                <Logo />
            <h3 className='data__title'>Мои данные</h3>
            <form className='data__form'>
                <label className='data__input-container'>Имя
                    <input name='name' className='data__input-element' type='text' value={values.name || '' } onChange = { handleChange } minLength="2" maxLength="40" required ></input>
                </label>
                    <span className='data__input-element-error data__input-element-error_active'>{errors.name || '' }</span>
                <label className='data__input-container'>E-mail
                    <input name='email' pattern="^\w+@\w+\.\w{2,}(\.\w{2,})*$" className='data__input-element' type='email' value={values.email || '' } onChange = { handleChange } minLength="2" maxLength="40" required ></input>
                </label>
                    <span className='data__input-element-error data__input-element-error_active'>{errors.email || '' }</span>
                <label className='data__input-container'>Номер телефона
                    <input name='phone' pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$" className='data__input-element' type='tel' value={values.phone || '' } onChange = { handleChange } minLength="11" maxLength="12" required ></input>
                </label>
                    <span className='data__input-element-error data__input-element-error_active'>{errors.phone || '' }</span>
                    <button className= {`data__button ${!isDataChanged || !isValid ? 'data__button-inactive' : ''}`} disabled={ !isValid || !isDataChanged } type='submit'>Сохранить изменения</button>
            </form>
        </section>
    </>
    )
}