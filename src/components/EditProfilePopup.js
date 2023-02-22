import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({isOpen, onClose}) {
    return (
<PopupWithForm name='profile-edit' title='Редактировать профиль' isOpen={isOpen} onClose={onClose} buttonText='Сохранить'>
    <input type="text" className="popup__input popup__input_data_name" id="name" name="nameInput" placeholder="Имя" required minLength="2" maxLength="40"/>
    <span className="popup__input-error" id="name-error"></span>
    <input type="text" className="popup__input popup__input_data_about" id="about" name="aboutInput" placeholder="О себе" required minLength="2" maxLength="200"/>
    <span className="popup__input-error" id="about-error"></span>
</PopupWithForm>
    )
}

export default EditProfilePopup;