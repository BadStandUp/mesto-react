import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card({card, onCardClick, onCardLike, onCardDelete}) {

    const currentUser = React.useContext(CurrentUserContext);

    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(like => like._id === currentUser._id);
    const cardLikeButtonClassName = (`element__like-button ${isLiked ? 'element__like-button_active' : ''}`);

    function handleClick() {
        onCardClick(card)
    }

    function handleLikeClick() {
        onCardLike(card)
    }

    function handleDeleteClick() {
        onCardDelete(card)
    }

    return (
        <article className="element">
            <img src={card.link} alt={card.name} onClick={handleClick} className="element__image"/>
            {isOwn && <button className="element__delete-button" type="button" aria-label="Удалить" onClick={handleDeleteClick}/>}
            <div className="element__caption">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__like">
                    <button className={cardLikeButtonClassName} type="button" aria-label="Лайк" onClick={handleLikeClick}/>
                    <span className="element__like-counter">{card.likes.length}</span>
                </div>
            </div>
        </article>
    )
}

export default Card;