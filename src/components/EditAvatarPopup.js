import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose}) {
    return (
    <PopupWithForm name='avatar' title='Обновить аватар' isOpen={isOpen} onClose={onClose}>
        <input type="url" className="popup__input popup__input_avatar_url" id="avatar" name="avatarInput" placeholder="Ссылка на картинку" required/>
        <span className="popup__input-error" id="avatar-error"></span>
    </PopupWithForm>
    )
}

export default EditAvatarPopup;