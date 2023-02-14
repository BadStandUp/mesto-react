import logo from './images/logo.svg';

function App() {
  return (
    <div className="page">
      <div className="page__content">
      <header className="header">
        <img alt="Лого" className="header__logo" src={logo}/>
      </header>
      <main className="content">
        <section className="profile">
          <div className="profile__info">
            <div className="profile__avatar-container">
              <img alt="Аватар" className="profile__avatar" src='#'/>
            </div>
            <div className="profile__wrapper">
              <div className="profile__text-container">
                <h1 className="profile__title"></h1>
                <button className="profile__edit-button" type="button" aria-label="Редактирование профиля"></button>
              </div>
              <p className="profile__subtitle"></p>
            </div>
          </div>
          <button className="profile__add-button" type="button" aria-label="Добавить карточку"></button>
        </section>
        <section className="elements">

        </section>
      </main>
      <footer className="footer">
        <p className="footer__copyright">&copy; 2022 Mesto Russia</p>
      </footer>

      <div className="popup popup_avatar">
        <div className="popup__container">
          <h2 className="popup__title">Обновить аватар</h2>
          <form action="#" className="popup__form popup__form_avatar" name="popupForm" noValidate>
            <input type="url" className="popup__input popup__input_avatar_url" id="avatar" name="avatarInput" placeholder="Ссылка на картинку" required/>
              <span className="popup__input-error" id="avatar-error"></span>
              <button className="popup__save-button" type="submit" disabled>Создать</button>
          </form>
          <button className="popup__close-button popup__close-button_avatar" type="button" aria-label="Выйти"></button>
        </div>
      </div>

      <div className="popup popup_confirm">
        <div className="popup__container">
          <h2 className="popup__title">Вы уверены?</h2>
          <button className="popup__close-button popup__close-button_confirm" type="button" aria-label="Выйти"></button>
          <button className="popup__save-button popup__save-button_confirm" type="submit">Да</button>
        </div>
      </div>

      <div className="popup popup_zoom-image">
        <div className="popup__figure-container">
          <figure className="popup__figure">
            <img src="#" alt="#" className="popup__image"/>
              <figcaption className="popup__caption"></figcaption>
          </figure>
          <button className="popup__close-button popup__close-button_zoom-image" type="button"
                  aria-label="Выйти"></button>
        </div>
      </div>

      <div className="popup popup_add-card">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <form action="#" className="popup__form popup__form_add-card" name="popupForm" noValidate>
            <input type="text" className="popup__input popup__input_place_name" id="place" name="placeInput" placeholder="Название" required minLength="2" maxLength="30"/>
              <span className="popup__input-error" id="place-error"></span>
              <input type="url" className="popup__input popup__input_place_url" id="url" name="urlInput" placeholder="Ссылка на картинку" required/>
                <span className="popup__input-error" id="url-error"></span>
                <button className="popup__save-button" type="submit" disabled>Создать</button>
          </form>
          <button className="popup__close-button popup__close-button_add-card" type="button" aria-label="Выйти"></button>
        </div>
      </div>

      <div className="popup popup_profile-edit">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <form action="#" className="popup__form popup__form_profile-edit" name="popupForm" noValidate>
            <input type="text" className="popup__input popup__input_data_name" id="name" name="nameInput" placeholder="Имя" required minLength="2" maxLength="40"/>
              <span className="popup__input-error" id="name-error"></span>
              <input type="text" className="popup__input popup__input_data_about" id="about" name="aboutInput" placeholder="О себе" required minLength="2" maxLength="200"/>
                <span className="popup__input-error" id="about-error"></span>
                <button className="popup__save-button" type="submit">Сохранить</button>
          </form>
          <button className="popup__close-button popup__close-button_profile-edit" type="button" aria-label="Выйти"></button>
        </div>
      </div>

      <template id="card-template">
        <article className="element">
          <img src="#" alt="#" className="element__image"/>
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
