import './InfoTooltip.css'
import success from '../../images/successfuly.svg';
import error from '../../images/error.svg';

export function InfoTooltip({ isOpen, onClose, status, successfulText, errorText }) {

    const handleOverlayClose = (e) => {
        if (e.target === e.currentTarget && isOpen) {
          onClose();
        }
      }

    return(
        <div className={ `popup ${isOpen ? 'popup_opened' : ''}` } onMouseDown={handleOverlayClose}>
            <div className="popup__container">
                <div className="popup__auth-status">
                    { status ? (
                        <>
                            <img src={success} className="popup__auth-icon" alt="Успешно" />
                            <p className="popup__auth-text">{ successfulText }</p>
                        </>
                    ) : (
                        <>
                            <img src={error} className="popup__auth-icon" alt="Ошибка"/>
                            <p className="popup__auth-text">{ errorText }</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}