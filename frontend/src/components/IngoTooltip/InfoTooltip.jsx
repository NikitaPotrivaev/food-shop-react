import './InfoTooltip.css'
import success from '../../images/successfuly.svg';
import error from '../../images/error.svg';
import { useEffect } from 'react';

export function InfoTooltip({ isOpenTooltip, onClose, status, message }) {

    useEffect(() => {
        if (!isOpenTooltip) return;
        
        function handleESC(e) {
          if (e.key === "Escape") {
            onClose()
          }
        }
        document.addEventListener("keydown", handleESC);
    
        return () => document.removeEventListener("keydown", handleESC);
      }, [isOpenTooltip]);

    const handleOverlayClose = (e) => {
        if (e.target === e.currentTarget && isOpenTooltip) {
          onClose();
        }
      }

    return(
        <div className={ `popup ${isOpenTooltip ? 'popup_opened' : ''}` } onMouseDown={handleOverlayClose}>
            <div className="popup__container">
                <div className="popup__auth-status">
                    { status ? (
                        <>
                            <img src={success} className="popup__auth-icon" alt="Успешно" />
                            <p className="popup__auth-text">{ message }</p>
                        </>
                    ) : (
                        <>
                            <img src={error} className="popup__auth-icon" alt="Ошибка"/>
                            <p className="popup__auth-text">{ message }</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}