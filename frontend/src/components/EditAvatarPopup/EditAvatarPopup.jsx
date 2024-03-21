import './EditAvatarPopup.css'

import { useRef, useEffect } from "react";
import { PopupWithForm } from '../PopupWithForm/PopupWithForm';
import { useForm } from '../../hooks/useForm';

export function EditAvatarPopup(props) {

    const ref = useRef()

    const { values, handleChange, resetForm, errors, isValid } = useForm()

    useEffect(() => {
        ref.current.value = ''
        resetForm()
    }, [resetForm, props.isOpen])

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({ avatar: ref.current.value })
    }

    return(
    <PopupWithForm
        isOpen = { props.isOpen }
        onClose = { props.onClose }
        onSubmit = { handleSubmit }
        isValid = { isValid }
        isDisabled = { !isValid || props.isLoading }
        title = 'Обновить аватар'
        name = 'picture'
        buttonText = {props.isLoading ? 'Сохранить...' : 'Сохранить'}
    >
        <input name="avatar" className="popup__edit" type="url" value={ values.avatar || '' } onChange={ handleChange } placeholder="Введите ссылку" ref={ref} required/>
            <span id="avatar-error" className="popup__error popup__error_active">{ errors.avatar || "" }</span>
    </PopupWithForm>
    )
}