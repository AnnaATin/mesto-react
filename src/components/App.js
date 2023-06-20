import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

import React from 'react'

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }

  function onCardClick(card) {
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setSelectedCard(null)
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={onCardClick}
        />
        <Footer />
      </div>
      <PopupWithForm
        title="Редактировать профиль"
        name="profile-edit"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <fieldset className = "popup__inputs-container">
            <div className ="popup__input-container"> 
                <input
                name="name"
                type="text"
                className="popup__input"
                id="name"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                required
                />
                <span className="popup__input-error name-input-error"></span>
            </div> 
            <div className ="popup__input-container"> 
                <input
                name="description"
                type="text"
                className="popup__input"
                id="description"
                placeholder="Описание"
                minLength="2"
                maxLength="200"
                required
                />
                <span className="popup__input-error description-input-error"></span>
            </div>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        title="Новое место"
        name="place-edit"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText="Создать"
      >
        <fieldset className="popup__inputs-container">
          <div className="popup__input-container">
            <input 
            name="placename"
            type="text"
            className="popup__input"
            id="placename"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
            />
            <span className="popup__input-error placename-input-error"></span>
          </div>
          <div className="popup__input-container">
            <input
            type="url"
            className="popup__input"
            name="imglink"
            id="imglink"
            placeholder="Ссылка на картинку"
            required
            />
            <span className="popup__input-error imglink-input-error"></span>
          </div>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        title="Обновить аватар"
        name="avatar-edit"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Обновить"
      >
        <input
        type="url"
        className="popup__input"
        name="userAvatar"
        id="avatarLink"
        placeholder="Ссылка на картинку"
        required
        />
        <span className ="popup__input-error avatarLink-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        title="Вы уверены?"
        name="submit-delete"
        onClose={closeAllPopups}
        buttonText="Да"
      />
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </>
  )
}

export default App