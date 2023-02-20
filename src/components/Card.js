import React from "react";

function Card({card}) {
    return (
        <article className="element">
            <img src="src#" alt="#" className="element__image"/>
            <button className="element__delete-button" type="button" aria-label="Удалить"></button>
            <div className="element__caption">
                <h2 className="element__title"></h2>
                <div className="element__like">
                    <button className="element__like-button" type="button" aria-label="Лайк"></button>
                    <span className="element__like-counter">0</span>
                </div>
            </div>
        </article>
    )
}

export default Card;