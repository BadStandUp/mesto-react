import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose}) {
    return (
<PopupWithForm name='add-card' title='Новое место' isOpen={isOpen} onClose={onClose} buttonText='Сохранить'>
    <input type="text" className="popup__input popup__input_place_name" id="place" name="placeInput" placeholder="Название" required minLength="2" maxLength="30"/>
    <span className="popup__input-error" id="place-error"></span>
    <input type="url" className="popup__input popup__input_place_url" id="url" name="urlInput" placeholder="Ссылка на картинку" required/>
    <span className="popup__input-error" id="url-error"></span>
</PopupWithForm>
    )
}

export default AddPlacePopup;