import React from "react";
import {api} from "../utils/api.js";
import Card from "./Card";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

    const [cards, setCards] = React.useState([]);
    React.useEffect(() => {
        api.getInitialCards()
            .then((cards) => {
                setCards(cards)
                console.log(cards)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const [userName, setUserName] = React.useState();

    const [userDescription, setUserDescription] = React.useState();

    const [userAvatar, setUserAvatar] = React.useState();

    React.useEffect(() => {
        api.getUserInfo()
            .then((info) => {
                setUserAvatar(info.avatar);
                setUserName(info.name);
                setUserDescription(info.about)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__info">
                    <div className="profile__avatar-container" onClick={onEditAvatar}>
                        <img alt="Аватар" className="profile__avatar" src={userAvatar}/>
                    </div>
                    <div className="profile__wrapper">
                        <div className="profile__text-container">
                            <h1 className="profile__title">{userName}</h1>
                            <button className="profile__edit-button" type="button" aria-label="Редактирование профиля" onClick={onEditProfile}></button>
                        </div>
                        <p className="profile__subtitle">{userDescription}</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить карточку" onClick={onAddPlace}></button>
            </section>
            <section className="elements">
                {cards.map((card) => (
                    <Card key={card._id} card={card} onCardClick={onCardClick} />
                ))}
            </section>
        </main>
    )
}

export default Main;