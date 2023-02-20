import React from "react";

function Main({onEditAvatar, onEditProfile, onAddPlace}) {
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__info">
                    <div className="profile__avatar-container" onClick={onEditAvatar}>
                        <img alt="Аватар" className="profile__avatar" src='src#'/>
                    </div>
                    <div className="profile__wrapper">
                        <div className="profile__text-container">
                            <h1 className="profile__title"></h1>
                            <button className="profile__edit-button" type="button" aria-label="Редактирование профиля" onClick={onEditProfile}></button>
                        </div>
                        <p className="profile__subtitle"></p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить карточку" onClick={onAddPlace}></button>
            </section>
            <section className="elements">

            </section>
        </main>
    )
}

export default Main;