import React, {useEffect} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup";
import {api} from "../utils/api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function App() {

    const [cards, setCards] = React.useState([]);
    React.useEffect(() => {
        api.getInitialCards()
            .then((cards) => {
                setCards(cards);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const [currentUser, setCurrentUser] = React.useState({});
    useEffect(() => {
        api.getUserInfo()
            .then((info) => {
                setCurrentUser(info);
            })
            .catch((err) => console.log(err));
    }, [])

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

    const [selectedCard, setSelectedCard] = React.useState(null);
    function handleCardClick(card) {
        setSelectedCard(card);
    }

    const [isLoading, setIsLoading] = React.useState(false);

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard(null);
    }

    function closeOnOverlayClick(evt) {
        if (evt.target.classList.contains('popup')) {
            closeAllPopups();
        }
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some((like) => like._id === currentUser._id);

        api.changeLikeCardStatus(card._id, isLiked)
            .then((newCard) => setCards(state => {
                state.map((c) => c._id === card._id ? newCard : c);
            }))
            .catch((err) => console.log(err))
    }


    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                setCards(cards.filter((item) => {
                    return item._id !== card._id;
                }))
            })
            .catch(err => console.log(err))
    }

    function handleUpdateUser(data) {
        setIsLoading(true)
        api.editProfile(data)
            .then((info) => {
                setCurrentUser(info);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    function handleUpdateAvatar(data) {
        setIsLoading(true);
        api.editAvatar(data)
            .then((info) => {
                setCurrentUser(info);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    function handleAddPlaceSubmit(data) {
        setIsLoading(true)
        api.addCard(data)
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

  return (
    <div className="page">
      <div className="page__content">

      <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
              cards={cards}
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
          />
          <Footer />
          <EditProfilePopup
              isLoading={isLoading}
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onOverlay={closeOnOverlayClick}
              onUpdateUser={handleUpdateUser}
          />
          <AddPlacePopup
              isLoading={isLoading}
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onOverlay={closeOnOverlayClick}
              onAddPlace={handleAddPlaceSubmit}
          />
          <EditAvatarPopup
              isLoading={isLoading}
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onOverlay={closeOnOverlayClick}
              onUpdateAvatar={handleUpdateAvatar}
          />
          <ImagePopup
              card={selectedCard}
              onOverlay={closeOnOverlayClick}
              onClose={closeAllPopups}
          />
      </CurrentUserContext.Provider>

      </div>
    </div>
  );
}

export default App;
