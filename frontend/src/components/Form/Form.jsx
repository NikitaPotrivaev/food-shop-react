import './Form.css'
import { Logo } from '../Logo/Logo'
import { useEffect } from 'react';

export function Form({ children, title, text, isValid, isDisabled, onSubmit, isOpen, onClose }) {

    useEffect(() => {
        if (!isOpen) return;
        
        function handleESC(e) {
          if (e.key === "Escape") {
            onClose()
          }
        }
        document.addEventListener("keydown", handleESC);
    
        return () => document.removeEventListener("keydown", handleESC);
      }, [isOpen]);
    
      const handleOverlayClose = (e) => {
        if (e.target === e.currentTarget && isOpen) {
          onClose();
        }
    }

    return(
        <div className={`popup ${isOpen ? 'popup_opened' : ''}`} onMouseDown={handleOverlayClose}>
            <div className="popup__container">
                <button className="popup__close" type="button" onClick={ onClose } aria-label="Закрыть"></button>
                <section className="form">
                    <div className="form__header">
                        <Logo />
                        <h2 className="form__header-title">{title}</h2>
                    </div>
                    <form className="form__base" onSubmit={onSubmit} noValidate>
                        <div className="form__base-inputs">
                            {children}
                        </div>
                            <button className={isValid ? 'form__base-button' : 'form__base-buttton-inactive'} onClick={ onClose } disabled={isDisabled}>{text}</button>
                    </form>
                </section>
            </div>
        </div>
    )
}