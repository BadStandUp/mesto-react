import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import Card from "./Card";



function App() {





    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    const [selectedCard, setSelectedCard] = React.useState();
    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
    }


  return (
    <div className="page">
      <div className="page__content">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}/>
      <Footer />

          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>

      {/*<div className="popup popup_avatar">*/}
      {/*  <div className="popup__container">*/}
      {/*    <h2 className="popup__title">Обновить аватар</h2>*/}
      {/*    <form className="popup__form popup__form_avatar" name="popupForm" noValidate>*/}
      {/*      <input type="url" className="popup__input popup__input_avatar_url" id="avatar" name="avatarInput" placeholder="Ссылка на картинку" required/>*/}
      {/*        <span className="popup__input-error" id="avatar-error"></span>*/}
      {/*        <button className="popup__save-button" type="submit" disabled>Создать</button>*/}
      {/*    </form>*/}
      {/*    <button className="popup__close-button popup__close-button_avatar" type="button" aria-label="Выйти"></button>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="popup popup_confirm">*/}
      {/*  <div className="popup__container">*/}
      {/*    <h2 className="popup__title">Вы уверены?</h2>*/}
      {/*    <button className="popup__close-button popup__close-button_confirm" type="button" aria-label="Выйти"></button>*/}
      {/*    <button className="popup__save-button popup__save-button_confirm" type="submit">Да</button>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="popup popup_zoom-image">*/}
      {/*  <div className="popup__figure-container">*/}
      {/*    <figure className="popup__figure">*/}
      {/*      <img src="src#" alt="#" className="popup__image"/>*/}
      {/*        <figcaption className="popup__caption"></figcaption>*/}
      {/*    </figure>*/}
      {/*    <button className="popup__close-button popup__close-button_zoom-image" type="button" aria-label="Выйти"></button>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="popup popup_add-card">*/}
      {/*  <div className="popup__container">*/}
      {/*    <h2 className="popup__title">Новое место</h2>*/}
      {/*    <form action="src#" className="popup__form popup__form_add-card" name="popupForm" noValidate>*/}
      {/*      <input type="text" className="popup__input popup__input_place_name" id="place" name="placeInput" placeholder="Название" required minLength="2" maxLength="30"/>*/}
      {/*        <span className="popup__input-error" id="place-error"></span>*/}
      {/*        <input type="url" className="popup__input popup__input_place_url" id="url" name="urlInput" placeholder="Ссылка на картинку" required/>*/}
      {/*          <span className="popup__input-error" id="url-error"></span>*/}
      {/*          <button className="popup__save-button" type="submit" disabled>Создать</button>*/}
      {/*    </form>*/}
      {/*    <button className="popup__close-button popup__close-button_add-card" type="button" aria-label="Выйти"></button>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="popup popup_profile-edit">*/}
      {/*  <div className="popup__container">*/}
      {/*    <h2 className="popup__title">Редактировать профиль</h2>*/}
      {/*    <form action="src#" className="popup__form popup__form_profile-edit" name="popupForm" noValidate>*/}
      {/*      <input type="text" className="popup__input popup__input_data_name" id="name" name="nameInput" placeholder="Имя" required minLength="2" maxLength="40"/>*/}
      {/*        <span className="popup__input-error" id="name-error"></span>*/}
      {/*        <input type="text" className="popup__input popup__input_data_about" id="about" name="aboutInput" placeholder="О себе" required minLength="2" maxLength="200"/>*/}
      {/*          <span className="popup__input-error" id="about-error"></span>*/}
      {/*          <button className="popup__save-button" type="submit">Сохранить</button>*/}
      {/*    </form>*/}
      {/*    <button className="popup__close-button popup__close-button_profile-edit" type="button" aria-label="Выйти"></button>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <template id="card-template">
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
      </template>

      </div>
    </div>
  );
}

export default App;
