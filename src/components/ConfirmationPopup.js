import React from "react";
import PopupWithForm from "./PopupWithForm";

function ConfirmationPopup() {
    return (
        <PopupWithForm>
            <h2 className="popup__title">Вы уверены?</h2>
            <button className="popup__close-button popup__close-button_confirm" type="button" aria-label="Выйти"></button>
        </PopupWithForm>
    )
}

export default ConfirmationPopup;