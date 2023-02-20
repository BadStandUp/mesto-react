import React from "react";

function PopupWithForm(props) {
    return (
        <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <h2 className="popup__title">{props.title}</h2>
                <form  className={`popup__form popup__form_${props.name}`} name="popupForm" noValidate>
                    {props.children}
                    {/*<input type="text" className="popup__input popup__input_data_name" id="name" name="nameInput" placeholder="Имя" required minLength="2" maxLength="40"/>*/}
                    {/*<span className="popup__input-error" id="name-error"></span>*/}
                    {/*<input type="text" className="popup__input popup__input_data_about" id="about" name="aboutInput" placeholder="О себе" required minLength="2" maxLength="200"/>*/}
                    {/*<span className="popup__input-error" id="about-error"></span>*/}
                    <button className="popup__save-button" type="submit">Сохранить</button>
                </form>
                <button className="popup__close-button popup__close-button_profile-edit" onClick={props.onClose} type="button" aria-label="Выйти"></button>
            </div>
        </div>
    )
}

export default PopupWithForm;