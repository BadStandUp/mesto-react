import React from "react";

function ImagePopup() {
    return (
        <div className="popup popup_zoom-image">
            <div className="popup__figure-container">
                <figure className="popup__figure">
                    <img src="src#" alt="#" className="popup__image"/>
                    <figcaption className="popup__caption"></figcaption>
                </figure>
                <button className="popup__close-button popup__close-button_zoom-image" type="button" aria-label="Выйти"></button>
            </div>
        </div>
    )
}

export default ImagePopup;