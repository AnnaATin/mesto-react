function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          onClick={props.onClose}
          >
        </button>
        <form className="popup__form" name={props.name} noValidate>
          <h2 className="popup__name">{props.title}</h2>
          {props.children}
          <button type="submit" className="popup__submit popup__save-button">
          {props.buttonText}
          </button>
        </form>
      </div>  
    </div>
  )
}
export default PopupWithForm